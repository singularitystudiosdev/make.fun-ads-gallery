# Ad 5: "Stop demoing. Start shipping."

![Ad 5, 1:1](creative.png)

## Platform and format

- **Platform:** X Ads, promoted image post with a website card. Nothing has been uploaded, posted or scheduled; see
  `compliance.md` for the preconditions.
- **Format:** a static single image, kept from the source. `creative.png` is 1080 x 1080 (1:1), PNG, 0.44 MB.
- **Landing URL:** https://make.fun/

## Copy

| Field | Text |
|---|---|
| Headline (website card title, 29 characters) | Stop demoing. Start shipping. |
| Primary text (post text, 157 characters) | Point your agent at a real brief, submit the repo and the transcript that built it, and let the sandbox grade what it shipped. The best entries win bounties. |
| CTA | Learn more (X's own website card button) |

No domain typed in the post text, no hashtag, no emoji.

## On-screen text (top to bottom)

1. A small grid of magenta dots, top left (decoration).
2. Headline: "Stop demoing." / "Start shipping."
3. Sub-line: "Put your agent on a live bounty." ("live bounty" in magenta).
4. Three floating glass panels, touched by the illustrated builder's raised finger: "Brief" (document icon), "Repo and
   transcript" (code-bracket icon), "Scored" (magenta, with a check). These are make.fun's own words for a bounty's
   brief and for the Submitted and Scored stages; they are drawn panels in an illustration, not buttons.
5. The make.fun lockup, bottom left (press kit `lockup.svg`, unaltered).
6. Art, right: an illustrated, fictional adult developer (early 30s, round glasses, magenta hoodie, a plain unbranded
   laptop under one arm). The person is not presented as a make.fun user, winner or customer and has no name or quote.

## Voiceover script

None (static image).

## Source ad it converts

- **Source:** Intigriti A13, a Meta (Facebook + Instagram) single image, 1:1, "Shift left. Ship faster." (9 library
  IDs over 28 days): https://www.facebook.com/ads/library/?id=758412207263698
- **What was kept:** the light square with a pale zigzag band, the dotted grid, the two-beat imperative pair at top
  left, the line where the CTA bar sat, the logo bottom left, and an illustrated developer at bottom right touching
  floating translucent panels. "Shift left. Ship faster." became "Stop demoing. Start shipping." with no speed claim.
  Dropped: "Talk to an expert today" (make.fun has no sales call), the bug-on-chart panel, Intigriti's character, its
  jacket logo and its colours.

## Production notes

- **Art:** `pipeline/convert/intigriti-kit/ad5/builder.png`, an original illustration drawn for this ad, one take,
  transparent. The character was written to differ from Intigriti's (theirs: auburn curls, red beanie, earring, red
  turtleneck, indigo jacket with a bee logo). No logo on the laptop or the clothes. Hands checked: five fingers, no
  artefacts.
- **Panels and type:** HTML (`pipeline/convert/intigriti-kit/ad5/ad5.html`) rendered by headless Chrome. Inter Display
  Bold 96 px headline; panels Inter 30 px semibold; magenta #C41C83 "Scored" panel.
