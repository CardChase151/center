import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pub = join(__dirname, '..', 'public')

const W = 1200
const H = 630
const logoSize = 280

// Solid brand-dark canvas
const canvas = sharp({
  create: {
    width: W,
    height: H,
    channels: 4,
    background: { r: 14, g: 14, b: 16, alpha: 1 },
  },
})

// Logo, resized
const logoBuf = await sharp(join(pub, 'images', 'logo.png'))
  .resize(logoSize, logoSize, { fit: 'inside' })
  .toBuffer()

// Subtle radial vignette + text overlays
const overlay = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="vignette" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#0E0E10" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.55"/>
    </radialGradient>
    <linearGradient id="rule" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#C9A24A" stop-opacity="0"/>
      <stop offset="50%" stop-color="#C9A24A" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#C9A24A" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#vignette)"/>

  <text x="${W / 2}" y="155" font-family="Helvetica, Arial, sans-serif" font-size="20" fill="#C9A24A" text-anchor="middle" letter-spacing="6" font-weight="500">PEABODY · BOSTON'S NORTH SHORE</text>

  <rect x="450" y="450" width="300" height="1.5" fill="url(#rule)"/>

  <text x="${W / 2}" y="520" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="58" fill="#F5F1EA" text-anchor="middle" font-weight="400">You're Welcome Here.</text>

  <text x="${W / 2}" y="585" font-family="Helvetica, Arial, sans-serif" font-size="15" fill="#A89E92" text-anchor="middle" letter-spacing="4" font-weight="500">CENTERCHURCHNE.COM</text>
</svg>`)

await canvas
  .composite([
    { input: logoBuf, top: 175, left: Math.floor((W - logoSize) / 2) },
    { input: overlay, top: 0, left: 0 },
  ])
  .png({ compressionLevel: 9 })
  .toFile(join(pub, 'og-image.png'))

// Favicons + apple-touch-icon
await sharp(join(pub, 'images', 'logo.png'))
  .resize(32, 32, { fit: 'contain', background: { r: 14, g: 14, b: 16, alpha: 1 } })
  .png()
  .toFile(join(pub, 'favicon-32.png'))

await sharp(join(pub, 'images', 'logo.png'))
  .resize(180, 180, { fit: 'contain', background: { r: 14, g: 14, b: 16, alpha: 1 } })
  .png()
  .toFile(join(pub, 'apple-touch-icon.png'))

console.log('Generated: public/og-image.png, public/favicon-32.png, public/apple-touch-icon.png')
