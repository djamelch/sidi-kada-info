# Say Briefly — Style Reference
> creative agency sketchbook on cream paper
> Style ID: 8b91f4c9-74e5-4925-90a3-3dd31fd5725e
> Source: https://styles.refero.design/style/8b91f4c9-74e5-4925-90a3-3dd31fd5725e

**Theme:** light

SayBriefly speaks the visual language of a creative studio's moodboard: warm cream paper, a single deep forest green that does the heavy lifting for text and primary actions, and a vivid school-bus yellow that acts as both highlight marker and playful punctuation. Type is deliberately split-personality — Bricolage Grotesque at extrabold for display headlines with positive tracking that gives the words a sticker-book chunkiness, paired with Inter's clean humanist sans for everything functional. The overall feel is approachable, hand-made, and slightly rebellious: rounded 6px corners everywhere, minimal shadows, scattered pastel accent cards that feel like sticky notes rather than UI cards. Color is rationed — green for structure, yellow for emphasis, and tiny washes of teal/pink/orange as decorative one-offs.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Forest Ink | `#1a3300` | `--color-forest-ink` | Primary text, filled CTA buttons, link text, nav borders, card borders — the structural backbone. This near-black green carries 90% of the interface weight |
| Highlighter Yellow | `#ffe95c` | `--color-highlighter-yellow` | Text highlight wash (behind keywords in headlines), badge backgrounds, accent fills. Always reads as a marker stroke, never as a CTA |
| Cream Paper | `#fcfaf5` | `--color-cream-paper` | Page canvas, card surfaces, nav background — the warm off-white everything sits on. Slightly yellow-shifted to feel like aged paper, not screen white |
| Pencil Gray | `#b6b6b6` | `--color-pencil-gray` | Nav and divider borders — a single mid-gray for hairlines that should recede |
| Whisper Gray | `#f1f1f1` | `--color-whisper-gray` | Muted helper text, secondary labels — disappears into the cream canvas |
| Sticky Note Teal | `#a8e5e5` | `--color-sticky-note-teal` | Teal action color for filled buttons, selected navigation states, and focused conversion moments |
| Sticky Note Mint | `#d5f5c2` | `--color-sticky-note-mint` | Green action color for filled buttons, selected navigation states, and focused conversion moments |
| Sticky Note Blush | `#f6d0ff` | `--color-sticky-note-blush` | Decorative button/card fill. Sprinkle use only |
| Terracotta | `#cb5521` | `--color-terracotta` | Decorative card accent — warm counterpoint to the green/yellow palette |

## Tokens — Typography

### Bricolage Grotesque / Cairo
- **Display Headlines:** Bricolage Grotesque (or Cairo Black for Arabic), weight 800.
- **Sizes:** 55px, 66px, 90px
- **Line height:** 1.00 - 1.20
- **Letter spacing:** 0.04em at 55px, 0.05em at 66-90px
- **Role:** Display headlines only. Chunky, sticker-like, authoritative.

### Inter / IBM Plex Sans Arabic
- **Functional UI & Body:** Inter (or IBM Plex Sans Arabic for Arabic), weights 400, 500, 600, 700.
- **Sizes:** 14px caption, 16px body-sm, 18px body, 20px body-lg, 28px subheading.
- **Line height:** 1.38 - 1.5.

### Roboto Mono / JetBrains Mono
- **Metadata, micro-labels, code, technical prompts:** Roboto Mono / JetBrains Mono, weight 400, size 12-15px.

## Spacing & Shapes

- **Base Unit:** 8px
- **Page Max Width:** 1200px
- **Section Gap:** 64px
- **Card Padding:** 24px
- **Element Gap:** 16px
- **Border Radius:**
  - Buttons: 6px
  - Cards: 12px
  - Nav: 16px (floating pill)
  - Tags: 9999px (full pill)

## Elevation & Shadows
- Minimal, tactile elevation.
- Primary CTA: `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- Secondary hover: `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px`
- Yellow atmospheric bleed: `rgba(255, 235, 90, 0.1) 0px 33px 72px 0px`
- Rely on crisp 1px borders (`#1a3300` or `#b6b6b6`) rather than blurry drop shadows.

## Do's and Don'ts
### DO:
- Use Forest Ink (`#1a3300`) for structural text, borders, and primary CTA buttons.
- Apply Highlighter Yellow (`#ffe95c`) as a marker wash behind key words in headlines.
- Keep the page 95% Cream Paper (`#fcfaf5`) + Forest Ink (`#1a3300`).
- Use pastel accents (Mint, Blush, Teal) like individual sticky notes separated by cream space.
- Use 6px radius for buttons, 12px for cards.

### DON'T:
- Don't use heavy dark gradients or blurry box shadows.
- Don't use pure black (`#000000`) for text.
- Don't use Highlighter Yellow as a CTA background (it's a marker, not an action).
- Don't crowd multiple pastels in one row without whitespace.
