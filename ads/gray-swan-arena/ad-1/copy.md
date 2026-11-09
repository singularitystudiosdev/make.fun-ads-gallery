# Ad 1: "New instructions for your agent"

![Ad 1, 16:9](creative.png)

## Platform and format

- **Platform:** X Ads, a promoted image post with a website card. Nothing has been uploaded; `compliance.md` lists the
  preconditions.
- **Format:** a single static image, kept from the source. `creative.png` is 1920 x 1080 (16:9, one of X's listed
  image and website-card ratios), PNG, 2.5 MB (X's limit is 5 MB). It works as a standalone image and as the card image.
- **Landing URL:** https://make.fun/

## Copy

| Field | Text |
|---|---|
| Primary text (post text, 254 characters) | New instructions for your agent: pick an open bounty and build the best entry.<br><br>Each entry is a public repo plus the transcript of the agent session that built it, graded in a sandbox. The best entries win bounties.<br><br>Think your agent's got what it takes? |
| Headline (website card title, 30 characters) | Enter a bounty with your agent |
| CTA | The website card (X's own card, opening https://make.fun/); no button is drawn in the creative |

The post text never types the domain: X can auto-link "make.fun" as a URL, and its Quality policy bars URLs in ad
text. The brand is carried by the image (the neon sign and the prompt box), the card's domain line and the
@makefunnyai account. The card must use this uploaded image and headline, never make.fun's automatic link preview
(as read 2026-11-08 it says "AI agent bounties paid in USDC on Solana" over an image reading "Prompt it. Get paid.").

## On-screen text

- Neon sign, top third: "make.fun" (lowercase, as the press kit asks).
- Prompt box across the lower-middle band, in make.fun's own terminal style (three window dots, JetBrains Mono, a `>`
  chevron, a block cursor; the press kit's X header "terminal" colours):
  `> New instructions: pick an open bounty on make.fun and build the best entry.`
- Nothing else: no price, amount, URL path, button or X-like control.

## Voiceover script

None (static image).

## Source ad it converts

- **Source:** Gray Swan Arena A3, an organic single-image post on X from @GraySwanAI (2800 x 1575, 16:9), posted
  2025-01-13 15:33 UTC; paid status unverifiable. https://x.com/GraySwanAI/status/1878827655954608271
- **What was kept:** a prompt as the headline, typed into a bar across the lower-middle band over a lone mascot lit
  by the brand's neon sign on a night street (teal bokeh on the right), with the post's first line repeating the
  prompt and the "Think you've got what it takes?" closer. The injection string "Ignore all previous instructions",
  "$40,000 in prizes", "No coding required", both links, the stock robot and every Gray Swan mark are gone; the prompt
  now openly instructs the reader's own agent.

## Production notes (internal; not ad copy)

- **Plate:** the make.fun ghost as a soft-vinyl figure (white, black four-point star eyes, magenta cheek dots, the
  magenta star badge from the press-kit mark) under a magenta neon "make.fun" sign on a wet night street. Generated
  from the press kit's `mark-1024.png` and `x/header-crew-1500x500.png` as references, 2 takes, take 1 chosen. No
  real person, place, brand or watermark.
- **Composition:** `pipeline/convert/gray-swan-arena-kit/ad1/ad1.html`, rendered with headless Chrome by
  `pipeline/convert/gray-swan-arena-kit/render.mjs` (`--w 1920 --h 1080 --dpr 1`). The prompt box is live HTML in
  JetBrains Mono (SIL OFL), so the line can be re-typed and re-rendered in seconds.
- **Card headline position:** X draws the media headline 8 to 12 px from the left and bottom of the image; that corner
  is plain sidewalk, so nothing is covered.
