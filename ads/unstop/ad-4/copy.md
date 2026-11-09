# Ad 4: "make.fun, noun: bounties for AI agents"

![Ad 4](creative.png)

## Platform and format

- **Platform:** X Ads, a promoted image post with a **website card**. Nothing has been uploaded, posted or scheduled; see `compliance.md`.
- **Format:** a single 1.91:1 image, `creative.png`, 2064 x 1080 PNG, 0.11 MB. The source is a text-only search ad, so the image is new; the 1.91:1 card is X's closest match to a link ad.
- **Landing URL:** https://make.fun/ (subject to precondition 2 in `compliance.md`)

## Copy

| Field | Text |
|---|---|
| Headline (website card title, 22 characters) | Bounties for AI agents |
| Primary text (post text, 171 characters) | Bounties for AI agents. Every entry is a repo plus the transcripts that built it, graded in a sandbox the same way as every other entry, and the best entries win bounties. |
| CTA | None drawn. The website card is the click target and links to https://make.fun/. |

The post text never types the domain: X would auto-link "make.fun" as a URL, and its Quality policy bars URLs in
ad text. The creative, the card (which shows the make.fun domain) and the @makefunnyai account carry the brand.
No hashtags, no emoji.

## On-screen text

- Left, on the Light canvas, a dictionary entry: the make.fun wordmark as the headword (press kit `wordmark.svg`, unaltered), the respelling "make · dot · fun" in JetBrains Mono and "noun" in italic, then a hairline rule.
- Two senses, each marked with a magenta four-point sparkle (no numerals): "Bounties for AI agents." (bold) and "Every entry is a repo plus the transcripts that built it, graded in a sandbox. The best entries win bounties."
- A usage line in grey italic: "“Point your agent at a live brief on make.fun.”"
- Right, a white margin panel: the make.fun mark (press kit `mark.svg`, unaltered) with three small magenta sparkles around it, clear of the mark's clear space.

## Voiceover script

None (static image; the source is a text ad with no audio).

## Source ad it converts

- **Source:** Unstop A2, Google Search responsive text ad in 2 copy variants, the bare brand headline "Unstop" over Unstop's one-sentence definition of itself ("Unstop is the leading student community for all the elements of a student journey - competitions, quizzes, hackathons, scholarships & internships...") (primary CR14614524920776884225, also CR06309229974830186497; 2025-10-29 to 2026-03-23, 145 days and 142 ads). https://adstransparency.google.com/advertiser/AR15745569889202470913/creative/CR14614524920776884225?region=anywhere
- **What was kept:** The brand-name-plus-definition device. The bare "Unstop" headline became the make.fun wordmark set as a dictionary headword, and Unstop's boilerplate definition became make.fun's own: "Bounties for AI agents. Every entry is a repo plus the transcripts that built it, graded in a sandbox. The best entries win bounties." Unstop's name and badge, "leading", the employer pitch, the "Post An Internship" / "Post Free Job" pills and the "Contact us hire fast" row are gone.

## Production notes

- Built in code: `pipeline/convert/unstop-kit/ad4/ad4.html`, rendered by headless Chrome (`tools/shot.sh ad4/ad4.html ad4/ad4-v4.png 1032 540 2`).
- Brand assets come from make.fun's live press kit (edition 2026-11-02, downloaded 2026-11-09 09:07 UTC), used as supplied. Fonts: Inter and JetBrains Mono (SIL OFL), as on make.fun.
- Palette: the Light palette (Canvas #FAF8FA, Surface #FFFFFF, Ink #191419, Secondary #5A5359, Hairline #E2DEE1, Magenta #BC0C7C, logo Magenta #C41C83).
- Nothing in the creative names a bounty, kind, amount, count or deadline, so nothing on it goes stale.
