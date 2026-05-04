import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { circle, colors, drawBackground, drawText, line, HEIGHT, WIDTH } from "./og-png/draw.mjs";
import { encodePng } from "./og-png/png.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");
const outputDir = join(projectRoot, "public", "og");

const cards = [
  { file: "og-image.png", title: ["109.STUDIO"] },
  { file: "og-applied-ai.png", title: ["APPLIED AI"] },
  { file: "og-drupal-ai.png", title: ["DRUPAL AI"] },
  { file: "og-architecture-audit.png", title: ["2-WEEK", "ARCHITECTURE", "AUDIT"] },
];

const drawLogo = (buffer) => {
  const ox = 700;
  const oy = 105;
  const s = 0.52;
  const px = (x) => ox + x * s;
  const py = (y) => oy + y * s;

  circle(buffer, px(410) + 18, py(410) + 22, 215 * s, colors.shadow, 28 * s);
  line(buffer, px(140) + 18, py(680) + 22, px(680) + 18, py(140) + 22, 28 * s, colors.shadow);

  circle(buffer, px(410), py(410), 215 * s, colors.cream, 28 * s);
  circle(buffer, px(410), py(410), 54 * s, colors.cream, 28 * s);
  line(buffer, px(140), py(680), px(680), py(140), 28 * s, colors.cream);
  circle(buffer, px(110), py(710), 55 * s, colors.gold, 10 * s, colors.orange);
  circle(buffer, px(710), py(110), 55 * s, colors.gold, 10 * s, colors.orange);
  circle(buffer, px(75), py(410), 45 * s, colors.cream, 28 * s);
  circle(buffer, px(745), py(410), 45 * s, colors.cream, 28 * s);

  line(buffer, px(410), py(245), px(410), py(325), 28 * s, colors.cream);
  line(buffer, px(410), py(495), px(410), py(575), 28 * s, colors.cream);
  line(buffer, px(245), py(410), px(325), py(410), 28 * s, colors.cream);
  line(buffer, px(495), py(410), px(575), py(410), 28 * s, colors.cream);

  line(buffer, px(65), py(265), px(65), py(70), 28 * s, colors.cream);
  line(buffer, px(65), py(70), px(255), py(70), 28 * s, colors.cream);
  line(buffer, px(255), py(70), px(347), py(162), 28 * s, colors.cream);
  line(buffer, px(195), py(245), px(195), py(160), 28 * s, colors.cream);
  line(buffer, px(195), py(160), px(295), py(260), 28 * s, colors.cream);

  line(buffer, px(755), py(555), px(755), py(750), 28 * s, colors.cream);
  line(buffer, px(755), py(750), px(565), py(750), 28 * s, colors.cream);
  line(buffer, px(565), py(750), px(473), py(658), 28 * s, colors.cream);
  line(buffer, px(625), py(575), px(625), py(660), 28 * s, colors.cream);
  line(buffer, px(625), py(660), px(525), py(560), 28 * s, colors.cream);

  circle(buffer, px(410), py(410), 36 * s, colors.orange, 12 * s);
};

const renderCard = ({ title }) => {
  const buffer = Buffer.alloc(WIDTH * HEIGHT * 4);
  drawBackground(buffer);
  drawLogo(buffer);
  drawText(buffer, 82, 96, "109.STUDIO", 4, colors.bronze, 3);

  let titleY = title.length > 1 ? 155 : 185;
  const titleScale = title.length > 1 ? 8 : 9;
  title.forEach((lineText) => {
    drawText(buffer, 82, titleY, lineText, titleScale, colors.cream, Math.ceil(titleScale * 0.4));
    titleY += titleScale * 8.2;
  });

  line(buffer, 82, 500, 430, 500, 3, colors.bronze);
  return encodePng({ width: WIDTH, height: HEIGHT, rgba: buffer });
};

await mkdir(outputDir, { recursive: true });
await Promise.all(cards.map((card) => writeFile(join(outputDir, card.file), renderCard(card))));
console.log(`Generated ${cards.length} Open Graph PNG assets in ${outputDir}`);
