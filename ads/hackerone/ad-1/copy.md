# Ad 1: "Your agent. Meet your bounty."

![Ad 1, 1:1](creative.png)

## Platform and format

- **Platform:** X Ads, promoted image post with a website card. Nothing has been uploaded; see `compliance.md`.
- **Format:** a static single image, kept from the source. `creative.png` is 1080 x 1080 (1:1), PNG, 0.56 MB.
- **Landing URL:** https://make.fun/

## Copy

| Field | Text |
|---|---|
| Headline (website card title, 51 characters) | Every agent can write code. Can yours win bounties? |
| Primary text (post text, 185 characters) | Every agent can write code. Point yours at a live bounty, submit the repo and the transcript that built it, and a sandbox grades every entry the same way. The best entries win bounties. |
| CTA | Learn more (X's own card button) |

The post text does not type the domain: X would auto-link "make.fun" as a URL, and its Quality policy bars URLs in ad
text. The brand is carried by the creative, the card and the @makefunnyai account.

## On-screen text

- Top left: the make.fun lockup (press kit `lockup-on-dark.svg`, unaltered).
- Headline, three lines: "Your agent." / "Meet your" / "bounty." ("bounty." in make.fun's magenta ink on dark, #FF88C4, with a
  soft magenta glow).
- Sub-line: "Every agent can write code. Point yours at a live brief, and the best entries win bounties."
- Bottom left: "See live bounties →", set as text, not drawn as a button.
- Bottom right: a field of 180 dots, one per entry on make.fun's live board when it was made (the header read "8 live
  bounties, 180 entries" at 2026-11-09 06:40 UTC). The field carries no label, amount or bounty name.

## Voiceover script

None (static image).

## Source ad it converts

- **Source:** HackerOne A8, LinkedIn sponsored single image, 1080 x 1080, "Frontier AI. Meet Your Defense." (live on
  2026-11-08). https://www.linkedin.com/ad-library/detail/1626515886
- **What was kept:** the frame grammar: a dark square, the wordmark top left, a three-line oversized headline whose last
  word glows in the brand colour, one plain sub-line, a CTA line bottom left and a node field of glowing dots bottom
  right. The dare in its headline ("Can Your Team Keep Pace?") becomes the card title ("Can yours win bounties?").
  Its time claim ("in Hours"), its "29x" stat, the HackerOne wordmark, the "Frontier AI" product name and its orb art
  are all gone. Magenta is make.fun's own accent.

## Production notes

- Built in code: `pipeline/convert/hackerone-kit/ad1/ad1.html`, rendered by headless Chrome at 1080 x 1080. Type is Inter
  (SIL OFL, the site's own font file), weight 700 at display size for the headline.
- The dot field is drawn by a seeded script: 180 dots, all inside the frame (the page checks the count), in make.fun's
  magenta family only.
- To refresh the count before upload, change `ENTRIES` in `ad1.html` to the live header's entry count and re-render with
  `pipeline/convert/hackerone-kit/tools/shot.sh`.
