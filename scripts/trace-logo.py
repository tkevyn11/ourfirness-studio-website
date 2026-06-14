"""Trace Ourfitness logo PNG into polished SVG paths."""
from __future__ import annotations

from pathlib import Path

import numpy as np
import potrace
from PIL import Image

SRC = Path(
    r"C:\Users\USER\.cursor\projects\d-Zumba-website\assets\c__Users_USER_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_ourfitness_logo-0ba3f2ad-9c50-46bd-b87d-30aa200876ce.png"
)
OUT_SVG = Path(__file__).resolve().parents[1] / "public" / "ourfitness-logo.svg"

ORANGE = "#FAB31B"
BLUE = "#224097"


def layer_mask(arr: np.ndarray, kind: str) -> np.ndarray:
    r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]
    visible = a > 128
    if kind == "orange":
        mask = (
            visible
            & (r.astype(int) > 200)
            & (g.astype(int) > 130)
            & (b.astype(int) < 100)
        )
    else:
        mask = (
            visible
            & (r.astype(int) < 80)
            & (g.astype(int) < 110)
            & (b.astype(int) > 90)
        )
    return mask.astype(np.uint8) * 255


def content_bounds(*masks: np.ndarray) -> tuple[int, int, int, int]:
    combined = np.zeros_like(masks[0], dtype=bool)
    for mask in masks:
        combined |= mask > 0
    ys, xs = np.where(combined)
    pad = 4
    return (
        max(0, xs.min() - pad),
        max(0, ys.min() - pad),
        min(masks[0].shape[1] - 1, xs.max() + pad),
        min(masks[0].shape[0] - 1, ys.max() + pad),
    )


def curve_to_path(curve: potrace.Curve, offset_x: int, offset_y: int) -> str:
    parts: list[str] = []
    start = curve.start_point
    parts.append(f"M {start.x - offset_x:.2f} {start.y - offset_y:.2f}")
    for segment in curve:
        if segment.is_corner:
            corner = segment.c
            end = segment.end_point
            parts.append(
                f"L {corner.x - offset_x:.2f} {corner.y - offset_y:.2f} "
                f"L {end.x - offset_x:.2f} {end.y - offset_y:.2f}"
            )
        else:
            c1, c2 = segment.c1, segment.c2
            end = segment.end_point
            parts.append(
                "C "
                f"{c1.x - offset_x:.2f} {c1.y - offset_y:.2f} "
                f"{c2.x - offset_x:.2f} {c2.y - offset_y:.2f} "
                f"{end.x - offset_x:.2f} {end.y - offset_y:.2f}"
            )
    parts.append("Z")
    return " ".join(parts)


def path_area(curve: potrace.Curve) -> float:
    points = [curve.start_point]
    for segment in curve:
        points.append(segment.end_point)
    if len(points) < 3:
        return 0.0
    area = 0.0
    for i in range(len(points)):
        j = (i + 1) % len(points)
        area += points[i].x * points[j].y - points[j].x * points[i].y
    return abs(area) / 2.0


def trace_layer(mask: np.ndarray, offset_x: int, offset_y: int, canvas_area: float) -> list[str]:
    bitmap = potrace.Bitmap(mask)
    traced = bitmap.trace(
        turdsize=2,
        turnpolicy=potrace.POTRACE_TURNPOLICY_MINORITY,
        alphamax=1.0,
        opticurve=True,
        opttolerance=0.2,
    )
    paths: list[str] = []
    for curve in traced:
        if path_area(curve) > canvas_area * 0.35:
            continue
        paths.append(curve_to_path(curve, offset_x, offset_y))
    return paths


def main() -> None:
    arr = np.array(Image.open(SRC).convert("RGBA"))
    orange_mask = layer_mask(arr, "orange")
    blue_mask = layer_mask(arr, "blue")
    x0, y0, x1, y1 = content_bounds(orange_mask, blue_mask)
    width = x1 - x0 + 1
    height = y1 - y0 + 1
    canvas_area = width * height

    orange_crop = orange_mask[y0 : y1 + 1, x0 : x1 + 1]
    blue_crop = blue_mask[y0 : y1 + 1, x0 : x1 + 1]

    orange_paths = trace_layer(orange_crop, 0, 0, canvas_area)
    blue_paths = trace_layer(blue_crop, 0, 0, canvas_area)

    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}" role="img" aria-label="Ourfitness">',
        "  <title>Ourfitness</title>",
        "  <desc>Ourfitness Studio wordmark — Our in orange, fitness in blue italic.</desc>",
        "  <g>",
    ]
    for path_data in orange_paths:
        lines.append(f'    <path fill="{ORANGE}" d="{path_data}"/>')
    for path_data in blue_paths:
        lines.append(f'    <path fill="{BLUE}" d="{path_data}"/>')
    lines.extend(["  </g>", "</svg>", ""])

    OUT_SVG.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {OUT_SVG}")
    print(f"viewBox: 0 0 {width} {height}")
    print(f"paths: {len(orange_paths)} orange, {len(blue_paths)} blue")


if __name__ == "__main__":
    main()
