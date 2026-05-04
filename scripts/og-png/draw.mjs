import { FONT } from "./font.mjs";

export const WIDTH = 1200;
export const HEIGHT = 630;

export const colors = {
  bgA: [14, 15, 15, 255],
  bgB: [27, 23, 18, 255],
  grid: [76, 72, 64, 80],
  cream: [238, 232, 220, 255],
  orange: [255, 107, 0, 255],
  bronze: [192, 111, 42, 255],
  gold: [240, 210, 109, 255],
  shadow: [0, 0, 0, 120],
};

const clamp = (value) => Math.max(0, Math.min(255, Math.round(value)));

export const blend = (buffer, x, y, color) => {
  if (x < 0 || y < 0 || x >= WIDTH || y >= HEIGHT) return;
  const i = (y * WIDTH + x) * 4;
  const alpha = color[3] / 255;
  const inverse = 1 - alpha;
  buffer[i] = clamp(color[0] * alpha + buffer[i] * inverse);
  buffer[i + 1] = clamp(color[1] * alpha + buffer[i + 1] * inverse);
  buffer[i + 2] = clamp(color[2] * alpha + buffer[i + 2] * inverse);
  buffer[i + 3] = 255;
};

export const fillRect = (buffer, x, y, width, height, color) => {
  for (let yy = Math.max(0, y); yy < Math.min(HEIGHT, y + height); yy += 1) {
    for (let xx = Math.max(0, x); xx < Math.min(WIDTH, x + width); xx += 1) {
      blend(buffer, xx, yy, color);
    }
  }
};

export const line = (buffer, x1, y1, x2, y2, width, color) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const steps = Math.max(Math.abs(dx), Math.abs(dy));
  const radius = Math.max(1, Math.floor(width / 2));

  for (let i = 0; i <= steps; i += 1) {
    const x = Math.round(x1 + (dx * i) / steps);
    const y = Math.round(y1 + (dy * i) / steps);
    for (let yy = -radius; yy <= radius; yy += 1) {
      for (let xx = -radius; xx <= radius; xx += 1) {
        if (xx * xx + yy * yy <= radius * radius) {
          blend(buffer, x + xx, y + yy, color);
        }
      }
    }
  }
};

export const circle = (buffer, cx, cy, radius, color, width = 1, fill = null) => {
  const outer = radius;
  const inner = Math.max(0, radius - width);

  for (let y = Math.floor(cy - outer); y <= Math.ceil(cy + outer); y += 1) {
    for (let x = Math.floor(cx - outer); x <= Math.ceil(cx + outer); x += 1) {
      const d = Math.hypot(x - cx, y - cy);
      if (fill && d <= radius) blend(buffer, x, y, fill);
      if (d <= outer && d >= inner) blend(buffer, x, y, color);
    }
  }
};

export const drawBackground = (buffer) => {
  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 4;
      const t = (x / WIDTH) * 0.55 + (y / HEIGHT) * 0.45;
      buffer[i] = clamp(colors.bgA[0] * (1 - t) + colors.bgB[0] * t);
      buffer[i + 1] = clamp(colors.bgA[1] * (1 - t) + colors.bgB[1] * t);
      buffer[i + 2] = clamp(colors.bgA[2] * (1 - t) + colors.bgB[2] * t);
      buffer[i + 3] = 255;
    }
  }

  for (let x = 0; x < WIDTH; x += 48) line(buffer, x, 0, x, HEIGHT, 1, colors.grid);
  for (let y = 0; y < HEIGHT; y += 48) line(buffer, 0, y, WIDTH, y, 1, colors.grid);

  const cx = WIDTH * 0.74;
  const cy = HEIGHT * 0.45;
  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const distance = Math.hypot(x - cx, y - cy) / 500;
      const alpha = Math.max(0, 1 - distance) ** 2;
      if (alpha > 0) blend(buffer, x, y, [192, 111, 42, alpha * 70]);
    }
  }
};

const drawGlyph = (buffer, x, y, glyph, scale, color) => {
  const pattern = (FONT[glyph] ?? FONT[" "]).split("/");
  pattern.forEach((row, rowIndex) => {
    [...row].forEach((bit, columnIndex) => {
      if (bit === "1") fillRect(buffer, x + columnIndex * scale, y + rowIndex * scale, scale, scale, color);
    });
  });
};

export const drawText = (buffer, x, y, text, scale, color, tracking = scale) => {
  let cursor = x;
  [...text.toUpperCase()].forEach((glyph) => {
    drawGlyph(buffer, cursor, y, glyph, scale, color);
    cursor += glyph === " " ? scale * 4 : scale * 6 + tracking;
  });
};
