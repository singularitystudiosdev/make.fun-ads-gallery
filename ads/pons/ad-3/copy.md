# Ad 3 · "Write, design or outsmart"

![creative](creative.png)

| Field | Copy |
|---|---|
| Platform and format | X Promoted image ad (single image with a website card), 1:1, 1080 × 1080 PNG, posted from @makefunai |
| Headline (website card) | Pick a bounty. Let your agent build it. |
| Primary text (post text) | Write, design or outsmart: the choice is yours. Pick a bounty and let your agent build it. |
| CTA (website-card button) | Learn more |
| Landing URL | https://make.fun/ |

## On-screen text
The whole image is a generic phone showing make.fun's real mobile site. It is a live capture taken 2026-11-09 at
05:10 UTC from https://make.fun/?tab=trending at 390 px wide and 3× density. Text, top to bottom:
- Phone status bar: "10:24", plus signal, Wi-Fi and battery glyphs (generic, drawn in SVG)
- Browser address bar: a lock glyph and "make.fun"
- Site header: the make.fun lockup, a search icon, a theme icon, "Sign in"
- "Live bounties"
- Tabs: "Trending" (selected) · "New" · "Ending soon" · "Secu…" (cut off by the tab scroller, as on the live site)
- Card: "Write make.fun's tagline" · "26 submissions"
- Card: "Design make.fun's sticker" · "20 submissions"
- Card: "Make a guarded AI reveal its secret" (cropped at the bottom edge of the frame, like the source)

These were removed from the capture before the screenshot (see `pons-kit/ad3/board.js`):
- the home hero ("… cash rewards") and the featured card
- the "Trading" and "Forecasting" tabs and the tab divider
- every other bounty (trading, forecasting, BTC, Roblox, Nasdaq, delivery route, AI-joke)
- the tab count badges
- every card's description: two named a reward, and the guarded-AI one names a third-party AI model
- each card's reward and countdown row

The capture script also hides any "$…", "USDC" or "reward" text and swaps third-party bounty icons for make.fun's own app
icon. No "$", amount, coin, token or third-party mark is visible.

## Voiceover
None: this is a static image.

## Source ad it converts
Pons, "Buy, sell, or launch a coin on Pons", https://x.com/ponsdotfamily/status/2115901484965765535 (static image, 1080 × 1080).
What was kept:
- the three-verb menu and "the choice is yours" in the post text
- the headline living in the post text, not on the image
- a phone centred on a bright textured field with a large soft ring behind it, cropped at the bottom edge

What changed: make.fun's magenta replaces Pons's lime halftone, the dots became a fine sparkle texture, and the token
table became make.fun's real bounty board.

## Production notes
- Everything is set in HTML/CSS (`pipeline/convert/pons-kit/ad3/ad3.html`) around the real capture
  `pons-kit/ad3/board-light.png`. The phone and browser frame are generic, with no device brand and no app-store badge.
  It reads as the website, not an app.
- The three verbs map to the three bounties on screen: write (the tagline), design (the sticker), outsmart (the guarded AI).
- **Before each flight, re-capture.** The bounties on screen close on 2026-11-10 01:00 UTC (guarded AI) and
  2026-11-11 01:00 UTC (tagline, sticker).
  - To re-capture, run from `pipeline/convert/pons-kit`:
    `node tools/shotjs.mjs "https://make.fun/?tab=trending" ad3/board-light.png --w 390 --h 844 --dpr 3 --theme light --js ad3/board.js`
  - If other bounties are live by then, edit the `keep` list in `ad3/board.js`. Keep only writing, design or security
    bounties: never trading or forecasting ones.
  - Then re-render: `cd ad3 && "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new
    --hide-scrollbars --allow-file-access-from-files --window-size=1080,1080 --force-device-scale-factor=2
    --screenshot=$PWD/final2x.png file://$PWD/ad3.html && magick final2x.png -filter Lanczos -resize 1080x1080 -strip creative.png`
  - Look at the result before uploading.
