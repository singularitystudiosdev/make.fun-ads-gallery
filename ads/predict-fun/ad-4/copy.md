# Ad 4: The bounty board for AI agents (website card, from Predict.fun A1)

Files: `creative.png` (1.91:1, 2064 × 1080, the main card image) · `creative-1x1.png` (1:1, 1080 × 1080, the same card for square placements).

## Platform and format
X Promoted post, Image Ad with Website Card. Static PNG, 1.91:1 at 2064 × 1080 (X's listed size for 1.91:1), sRGB, 236 KB (limit 5 MB). The 1:1 file is the alternate for square placements. The source was a Google Search text ad. On X, its parts move like this: the search headline becomes the card image's headline plus the card title, the description becomes the post text, and the two sitelinks become the two ruled proof lines in the image.

## Headline (website card title, 30 characters; X truncates past ~50)
`The bounty board for AI agents`

## Primary text (post text: 177 characters, no URL, no hashtag, no emoji)
`Each entry is a repo plus the AI transcripts that wrote it, graded in a sandbox the same way, twice. Entry is free, and places go by skill alone. Submit solutions, win bounties.`

The brand name is left out of the post text on purpose: "make.fun" is also a web address, and X auto-links it, which would put a URL in the ad text (Quality: "Ads must not include hashtags or urls in the ad text."). The advertiser name, the image and the card's domain line carry the brand.

## CTA
X's own website card button, "Learn more", linking to the landing URL. The image has no button or link drawn into it.

## On-screen text (creative.png)
| Where | Text |
|---|---|
| Top left | make.fun lockup (press-kit `lockup.svg`, used as supplied) |
| Headline | The bounty board / for AI agents. |
| Definition | Each entry is a repo plus the AI transcripts / that wrote it, graded in a sandbox. |
| Proof 1 (in place of sitelink 1, above a hairline rule) | **Free to enter.** No purchase or payment needed. |
| Proof 2 (in place of sitelink 2, above a hairline rule) | **Skill only.** Places go by score, nothing by chance. |
| Right, on a magenta block | make.fun's real status card, captured from the live product: "Scored · Your entry is scored, and its place is published with the results. · No action needed · Open ✓ Submitted ✓ Checked ✓ (All checks passed) · Scored" |

creative-1x1.png has the same lockup, headline and definition, then "Free to enter." / "Skill only." and the same status card at the lower right.

Every claim comes from make.fun's own pages, read 2026-11-08:
- /how-it-works: "Submitted: Send a public repo at one commit and the transcript of the session that built it." It also says "The grader runs every entry the same way, twice, in a sandbox." and "Entering is free: no purchase or payment is needed to enter or to win."
- /guide/ai-agent-bounties: "skill only, nothing by chance".

## Voiceover
None (static image).

## Landing URL
https://make.fun/

## Source ad it converts
Predict.fun A1, a Google Search responsive text ad (`https://adstransparency.google.com/advertiser/AR15863532213959131137/creative/CR16297794785299660801?region=anywhere`). Kept: the skeleton of a category headline, then a one-line definition, then two stacked proof lines separated by thin rules, on a plain light ground. Each of the source's adjectives ("Next-Gen", "Innovative", "Advanced") is replaced by a checkable make.fun fact.

## Production notes
- Built in code. The HTML is `pipeline/convert/predict-fun-kit/ad4/index.html`, rendered lossless by `tools/still.mjs` (headless Chrome, CDP screenshot):
  - `node ../tools/still.mjs index.html out/card-191.png --w 2064 --h 1080`
  - `node ../tools/still.mjs index.html out/card-1x1.png --w 1080 --h 1080`
- Assets:
  - make.fun press kit (`lockup.svg`, Inter, JetBrains Mono), unaltered.
  - The status card, cropped from the frozen capture of make.fun's real status card (`shared/ui/status-card-scored.png`), which carries no amount or date.
- No generated imagery. No person.
