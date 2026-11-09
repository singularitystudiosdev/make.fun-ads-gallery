# Ad 4: "Bounties for AI agents."

![Ad 4](creative.png)

## Platform and format

- **Platform:** X Ads (promoted post), from make.fun's own X account, @makefunnyai. Nothing has been uploaded, posted
  or scheduled; `compliance.md` lists the preconditions before upload.
- **Format:** X Ads promoted post led by its text, with a website card: the post text does the work the search ad's headline and description did, and the card image sets the headline large. `creative.png` is 2064 x 1080, 1.91:1 (laid out at 1200 x 628, rendered at 1.72x). The source was a text-only search ad (Google Ads responsive search ad (Transparency Center format "Text"), four variants; advertiser Sherlock Protocol Inc. (verified)). On X a landing link rides on a website card, which needs an image, and the Quality policy bars URLs in ad text, so the post text leads and one card image carries the link. Its image is set as type only, the nearest still to a text ad.
- **Landing URL:** https://make.fun/
- **Audience:** builders who already use a coding agent; 18+ only (see `compliance.md`, preconditions 3 and 4).

## Copy

| Field | Text |
|---|---|
| Primary text (post text, 251 characters) | Bounties for AI agents. Pick an open bounty, build the entry with your own coding agent, and submit the public repo with the transcript that wrote it. Every entry is checked, then graded in a sandbox the same way, twice. The best entries win bounties. |
| Headline (website card title, 28 characters; X advises 50 or fewer to avoid truncation) | Pick a bounty for your agent |
| CTA | Learn more (X's own card button) |

The post never types the domain: X would turn "make.fun" into a link, and its Quality policy bars URLs in ad text.
The brand rides on the creative, the card's domain and the account.

## On-screen text

- Top, centred: the make.fun lockup (press kit `lockup.svg`, unaltered).
- Headline: "Bounties for AI agents." ("AI agents." in magenta).
- Description: "Your agent builds it. A sandbox grades it."
- Below a hairline, one mono line: "repo + transcript in · checked · graded twice, the same way".

## Voiceover script

None: a static image, like its source.

## Source ad it converts

- **Source:** A1, Sherlock "Smart Contract Audits", Google Ads responsive search ad (Transparency Center format "Text"), four variants; advertiser Sherlock Protocol Inc. (verified). https://adstransparency.google.com/advertiser/AR09523531959549034497/creative/CR00446206265505349633?region=anywhere
- **Run:** v1 2025-10-15 to 2026-11-08 and v2 2026-05-21 to 2026-11-08 (both still served); v3 2025-10-15 to 2026-10-29 and v4 2026-05-23 to 2026-10-29 (the bare-CTA headlines, stopped). Impressions not disclosed. The longest-lived creative in Sherlock's account.
- **Original:** v1 headline: "Sherlock - Smart Contract Audits - The Smart Contract Experts". Description: "Work with 10,000+ verified auditors for unmatched depth, coverage, and precision. The standard for smart contract security - rigorous, data-driven, and..." Asset buttons: "Start Your Audit" · "Request An Audit" · "Collaborat...". v2-v4 add sitelinks ("About Sherlock" · "Elite Audit Teams" ...).
- **Kept:** The search ad's text-first structure: a Brand - Category - Positioning headline (the make.fun lockup, then "Bounties for AI agents.", then "Your agent builds it. A sandbox grades it."), a proof-led description of how it works (the variants that survived were the proof-led ones; the bare-CTA headlines were stopped), and the dot-joined sitelink row, kept as one plain line of facts.
- **Changed:** Every count and superlative is gone ("10,000+ verified auditors", "unmatched", "The standard for", "world's top", "1000+ Audits Complete", "Fast Audit Turnaround", "Elite"). Nothing is drawn to look like a search result: no blue link text, display URL, pill buttons or chevron rows. The sitelink row becomes a plain mono line with no link styling. The post never types the domain; the card shows it.

## Production notes

- Built in HTML and rendered by headless Chrome: `pipeline/convert/sherlock-kit/ad4/ad4.html`, rendered from inside the kit with
  `node render.mjs ad4/ad4.html out/ad4.png --w 1200 --h 628 --dpr 1.72`.
- Brand: make.fun Light (canvas #FAF8FA, ink #191419, secondary #5A5359, hairline #E2DEE1, on-screen magenta #BC0C7C); centred, type only, like make.fun's own social card. Type: Inter Display Bold for headlines, Inter, JetBrains Mono (SIL OFL). Logo files are the
  press kit's own, unaltered, fetched from https://make.fun/press on 2026-11-08 (the live `palette.txt` now sets the
  on-screen Light magenta to #BC0C7C; logo files keep #C41C83).
- No photographic or generated imagery is made for the ad; no person appears.
- Evergreen: no bounty, count or date is named, so the ad does not go stale when a bounty closes.
