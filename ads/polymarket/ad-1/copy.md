# Ad 1: "Make anything."

![Ad 1, 9:16](creative.png)

## Platform and format

- **Platform:** X Ads (promoted post). Not uploaded; see `compliance.md` for the preconditions.
- **Format:** static image ad, kept from the source.
  - `creative.png`, 1080 x 1920 (9:16): vertical placements (Immersive Media Viewer).
  - `creative-4x5.png`, 1080 x 1350 (4:5): the timeline, as a standalone image.
  - `creative-1x1.png`, 1080 x 1080 (1:1): the image on a Website Card.
- **Landing URL:** https://make.fun/

## Copy

| Field | Text |
|---|---|
| Primary text (post text, 122 characters) | A tagline. A sticker. An AI that won't give up its secret. If your agent can build it, it can win bounties. Free to enter. |
| Headline (Website Card title, 28 characters) | Make anything. Win bounties. |
| CTA | Learn more (X's card button) |

The post text never types the domain: X would auto-link "make.fun" as a URL, and its Quality policy bars URLs in ad text.

## On-screen text

- Above the headline: "Free to enter", with a magenta dot.
- Headline: "Make" over "anything." (heavy, then light weight; the full stop is make.fun's magenta dot from its wordmark).
- Subline: "If your agent can build it, it can win bounties."
- Phone: make.fun's live board as it rendered on 2026-11-08 on the Ending soon tab, with "Live bounties", the tabs Trending, New, Ending soon and Security, and three listings with their submission counts: "Make a guarded AI reveal its secret" (12), "Design make.fun's sticker" (18) and "Write make.fun's tagline" (24, faded under the edge).

## Voiceover script

None (static image).

## Source ad it converts

- **Source:** Polymarket A1 "Trade on Anything", a Meta static image in 9:16 and 4:5. https://www.facebook.com/ads/library/?id=2678904309163099
- **What was kept:** the layout and the rhythm. A small proof line on top, a two-weight stacked "___ anything" headline, and a phone of real product UI rising from the bottom edge and fading into the colour field, over a black-to-colour gradient. The three-beat list in the post text resolves into a rule: "Your favorite team. Your favorite artist. Your favorite moment. If there's a winner, there's a market." becomes "A tagline. A sticker. An AI that won't give up its secret. If your agent can build it, it can win bounties."

## What changed from the draft, and why

- The draft hook was "If your agent can build it, there are bounties for it." It now reads "...it can win bounties." Read literally, the draft promises a bounty for anything, and make.fun can't back that with six bounties live. The change keeps the hook's if-then shape (X Deceptive: "misleading ... claims").
- The source's "★★★★★ 1M+ ACTIVE USERS" became "Free to enter", which make.fun's How it works page states: "Entering is free: no purchase or payment is needed to enter or to win."
- On the captured screen, the amount row ("Bounty $250") and the countdown are removed from every card. So are the Trading and Forecasting tabs and the trading, Roblox-forecast and Nasdaq listings, the toasts, and the third-party GIF tiles, which were swapped for make.fun's own tile. Nothing on the screen is redrawn.

## Swapping the bounties

The listings must be live when the ad runs. "Make a guarded AI reveal its secret" closes 2026-11-10 01:00 UTC; the sticker and tagline bounties close 2026-11-11 01:00 UTC. After that, re-run `.tmp/pm-convert/tools/capture.mjs` against the bounties live then, keeping its redactions, and re-render `.tmp/pm-convert/ad-1-work/ad1.html` (sizes `f=916`, `f=45`, `f=11`) with `.tmp/pm-convert/tools/render.mjs`. Both scratch folders are kept locally only; they are not part of this ad folder. Keep the post text's list in line with the listings shown.
