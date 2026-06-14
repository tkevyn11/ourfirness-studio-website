"""Generate Ourfitness wordmark SVG from system fonts (Arial Bold / Bold Italic)."""
from __future__ import annotations

import re
from pathlib import Path

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT_SVG = ROOT / "public" / "ourfitness-logo.svg"
OUT_PNG = ROOT / "public" / "ourfitness-logo-transparent.png"

ORANGE = "#FAB31B"
BLUE = "#224097"
TARGET_WIDTH = 906
TARGET_HEIGHT = 158
PAD = 4

FONT_FILES = {
    "bold": r"C:\Windows\fonts\arialbd.ttf",
    "bold_italic": r"C:\Windows\fonts\arialbi.ttf",
}


def load_font(style: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(FONT_FILES[style], size)


def glyph_path(
    font: TTFont,
    char: str,
    x: float,
    baseline_y: float,
    scale: float,
) -> str:
    cmap = font.getBestCmap()
    glyph_name = cmap[ord(char)]
    glyph_set = font.getGlyphSet()
    pen = SVGPathPen(glyph_set)
    tpen = TransformPen(pen, (scale, 0, 0, -scale, x, baseline_y))
    glyph_set[glyph_name].draw(tpen)
    return pen.getCommands()


def measure_text(text: str, pil_font: ImageFont.FreeTypeFont) -> float:
    bbox = pil_font.getbbox(text)
    return bbox[3] - bbox[1]


def find_font_size(target_height: float) -> int:
    for size in range(80, 240):
        if abs(measure_text("Our", load_font("bold", size)) - target_height) < 1.0:
            return size
    return 148


def build_layer(
    text: str,
    style: str,
    font_size: int,
    x_start: float,
    baseline_y: float,
) -> tuple[list[str], float]:
    pil_font = load_font(style, font_size)
    tt = TTFont(FONT_FILES[style])
    scale = font_size / tt["head"].unitsPerEm

    paths: list[str] = []
    x = x_start
    for char in text:
        path = glyph_path(tt, char, x, baseline_y, scale)
        if path:
            paths.append(path)
        x += pil_font.getlength(char)
    return paths, x


def path_bounds(paths: list[str]) -> tuple[float, float, float, float]:
    xs: list[float] = []
    ys: list[float] = []
    for d in paths:
        nums = [float(v) for v in re.findall(r"[-+]?(?:\d*\.\d+|\d+)", d)]
        xs.extend(nums[0::2])
        ys.extend(nums[1::2])
    return min(xs), min(ys), max(xs), max(ys)


def render_png(font_size: int, fitness_kern: float) -> None:
    scale = 2
    img = Image.new("RGBA", (TARGET_WIDTH * scale, TARGET_HEIGHT * scale), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    bold = load_font("bold", font_size * scale)
    italic = load_font("bold_italic", font_size * scale)
    bbox = bold.getbbox("Our")
    y = (PAD - bbox[1]) * scale
    x = PAD * scale
    draw.text((x, y), "Our", font=bold, fill=ORANGE)
    x += bold.getlength("Our") - fitness_kern * scale
    draw.text((x, y), "fitness", font=italic, fill=BLUE)

    # Crop to content and scale into target frame.
    cropped = img.crop(img.getbbox())
    fitted = Image.new("RGBA", (TARGET_WIDTH * scale, TARGET_HEIGHT * scale), (0, 0, 0, 0))
    ratio = min(
        (TARGET_WIDTH - 2 * PAD) * scale / cropped.width,
        (TARGET_HEIGHT - 2 * PAD) * scale / cropped.height,
    )
    new_size = (int(cropped.width * ratio), int(cropped.height * ratio))
    resized = cropped.resize(new_size, Image.Resampling.LANCZOS)
    # Left-align like the reference wordmark.
    ox = PAD * scale
    oy = int((TARGET_HEIGHT * scale - new_size[1]) / 2)
    fitted.paste(resized, (ox, oy), resized)
    fitted.save(OUT_PNG, "PNG")
    print(f"Wrote {OUT_PNG} ({fitted.size[0]}x{fitted.size[1]})")


def main() -> None:
    content_height = TARGET_HEIGHT - 2 * PAD
    font_size = find_font_size(content_height)
    bold = load_font("bold", font_size)

    bbox = bold.getbbox("Our")
    baseline_y = PAD - bbox[1]
    fitness_kern = 6.0

    orange_paths, our_end = build_layer("Our", "bold", font_size, PAD, baseline_y)
    blue_paths, _ = build_layer(
        "fitness", "bold_italic", font_size, our_end - fitness_kern, baseline_y
    )

    all_paths = orange_paths + blue_paths
    min_x, min_y, max_x, max_y = path_bounds(all_paths)
    content_w = max_x - min_x
    content_h = max_y - min_y

    avail_w = TARGET_WIDTH - 2 * PAD
    avail_h = TARGET_HEIGHT - 2 * PAD
    fit_scale = min(avail_w / content_w, avail_h / content_h)
    offset_x = PAD - min_x * fit_scale
    offset_y = PAD + (avail_h - content_h * fit_scale) / 2 - min_y * fit_scale

    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {TARGET_WIDTH} {TARGET_HEIGHT}" width="{TARGET_WIDTH}" height="{TARGET_HEIGHT}" role="img" aria-label="Ourfitness">',
        "  <title>Ourfitness</title>",
        "  <desc>Ourfitness Studio wordmark — Our in orange, fitness in blue italic.</desc>",
        f'  <g fill-rule="evenodd" transform="translate({offset_x:.3f} {offset_y:.3f}) scale({fit_scale:.6f})">',
    ]
    for path_data in orange_paths:
        lines.append(f'    <path fill="{ORANGE}" d="{path_data}"/>')
    for path_data in blue_paths:
        lines.append(f'    <path fill="{BLUE}" d="{path_data}"/>')
    lines.extend(["  </g>", "</svg>", ""])

    OUT_SVG.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {OUT_SVG}")
    print(f"viewBox: 0 0 {TARGET_WIDTH} {TARGET_HEIGHT}")
    print(f"font_size: {font_size}, fit_scale: {fit_scale:.4f}")
    print(f"paths: {len(orange_paths)} orange, {len(blue_paths)} blue")

    render_png(font_size, fitness_kern)


if __name__ == "__main__":
    main()
