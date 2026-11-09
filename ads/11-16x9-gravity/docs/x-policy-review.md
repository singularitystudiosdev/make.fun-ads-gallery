# X policy review: Ad 11 (16:9, gravity), the film (`out/final.mp4`) and its landing page

The clause-by-clause review below was made on 2026-11-09 by a separate reviewer (read-only, harsh: an ambiguous row is
a FAIL; a restricted category without shown pre-authorization is a FAIL) on the round-1 animatic, reading every
policy live in that session. The film changed after it (four critique rounds); the rows it judged are re-judged on the
final cut in "Author's response" at the end, and the measurements it asked for are taken on the final.

## URLs read live today (2026-11-09)

Read live with the scraper's browser (full text obtained):
- https://x.com/en/tos (Terms of Service, effective October 9, 2026; first and last parts inline, the middle read from the saved render by keyword search for advertising / synthetic / AI / autonomous clauses)
- https://help.x.com/en/business-and-advertising/ads-policies (index; 59 links harvested)
- https://help.x.com/en/business-and-advertising/quality-policy
- https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content
- https://help.x.com/en/business-and-advertising/unacceptable-content
- https://help.x.com/en/business-and-advertising/gambling-content
- https://help.x.com/en/business-and-advertising/financial-services (first two scrapes froze the tab; read on the third try through fetch_or_scrape)
- https://help.x.com/en/business-and-advertising/prohibited-content-for-minors
- https://help.x.com/en/business-and-advertising/illegal-products-and-services (the guessed /rules-and-policies/ path 404'd; the /business-and-advertising/ page was served live)
- https://help.x.com/en/rules-and-policies/paid-partnerships-policy
- https://help.x.com/en/rules-and-policies/x-contest-rules ("Guidelines for Promotions on X")
- https://help.x.com/en/rules-and-policies/authenticity (contains "Synthetic and Manipulated Media")
- https://help.x.com/en/rules-and-policies/x-rules
- https://business.x.com/en/help/ads-policies/ads-policy-update-log
- https://dev.make.fun/ and https://dev.make.fun/#all-bounties (rendered; both returned identical text, so the #all-bounties anchor adds nothing the scrape could see)
- https://dev.make.fun/terms (make.fun's own terms, read to check eligibility, entry cost and payout terms)

Read, but NOT live:
- https://help.x.com/en/business-and-advertising/political-content: the browser scrape froze, so the text is a Wayback capture of 2026-10-27, not the live page. Used only to confirm the policy is irrelevant (see row 23).

Could not read:
- https://ads.x.com/terms (X Master Services Agreement; redirects to https://legal.x.com/ads-terms.html, which rendered only a region picker and a cookie banner, no agreement text). See row 1: FAIL.
- https://help.x.com/en/rules-and-policies/x-promotions-guidelines: 404 (wrong guess); the correct page is x-contest-rules, which was read.
- The index's other restricted or prohibited categories (Adult, Alcohol, Drugs, Healthcare, Tobacco, Weapons, Targeting Sensitive Categories, Housing/Lending/Credit): not read. The creative and the landing page contain nothing in any of those categories (no people, products, health, weapons or alcohol; only a staged software leaderboard).

AI / synthetic-media disclosure for ads: searched. The live pages I read contain no clause that requires (or forbids) labelling AI-generated media in an ad. The only synthetic-media rules are on the X Rules page ("Synthetic and Manipulated Media: You may not deceptively share synthetic or manipulated media that are likely to cause harm. In addition, we may label posts containing synthetic and manipulated media...") and the Authenticity page (media "shared as authentic but ... significantly and deceptively altered, manipulated, or fabricated in a way that fundamentally changes its meaning and can result in widespread confusion on public issues, impact public safety, or cause serious harm"). Two secondary sources found by search say X has no universal AI label for ad creative (auditsocials.com, digitalapplied.com, not authoritative). There is also a March 2026 creator-monetization labelling rule for AI videos of armed conflict (reported by a blog, not read at the source; irrelevant here).


## What the creative contains (the final cut)

16:9, 1920 x 1080, 60 fps, 15 s; synthesized music and SFX (a marimba strike on every landing), no voice, mixed to -14
LUFS. The frame is split: a flat ink (#191419) panel with large white Inter captions, one accent word in the site's
own accent ink (#ff88c4), and make.fun's real phone-layout site (a frozen copy of today's live dev.make.fun production
build, never redrawn) under a camera at 1.19-1.28x, into which the real UI's pieces fall under one gravity and land
with a bounce; on each tap a screen's pieces fall out and the next screen's rain in. For the entry steps the page whips
to the left half and the captions land on the right. A soft grey touch dot shows each tap.

It opens on the site's own win sheet ("You won 1st place", the bounty "Close a month of books into a ledger that
reconciles", "@you", the site's own confetti; the prize line, per-place amounts, "Share on X" and "View payout"
removed) slamming down under "Bounties / you can / win."; then the board's card (the bounty, "Write a Python program
that turns a month of bank, card and payroll exports into a closed, reconciled...", "Ends in 35d 23h 17m 42s",
"Submit", "0 submissions"; the prize figure and its "Bounty" label removed); the bounty page ("All bounties",
"Automation, by make.fun", the agent prompt "Read dev.make.fun/skill.md and enter the bounty ...", "Copy for your
agent" turning to "Copied" while a copy of the prompt is thrown up out of the frame, "Enter manually", "Starter
kit"); the site's "Submit an entry" sheet ("3 Paste your link", "Repo or commit link" receiving
https://github.com/you/month-close, "Commit" receiving a 40-character sha, each thrown in from the frame's edge,
"Transcripts" with transcripts.jsonl, "Title (optional)" "Limber Filament", "As @you.", "Submit entry"); the
receipt ("Point us at a commit; we snapshot it and grade it. Up to 3 entries a day.", "Submitted. Checks are
running.", a transcripts sha256, "Your claim code MF-4KXR-7QTV-2WNJ"); the ranking (Rank / Entrant / Score; @you,
"Your entry", 5.94, jumps from third to first over @quiet-lynx 5.71 and @ledger-pete 5.48; @byte-heron, @nova-tern;
each row "On track to win" with its figure removed); the win sheet again on a magenta panel under "Win / the
bounty."; the end on ink: make.fun's own mark and wordmark and "Win bounties." on the accent.

Captions: "Bounties / you can / win." / "1 Pick / a bounty." / "2 Hand it / to your / agent." / "3 Submit / an
entry." / "4 Paste / the link / and commit." / "5 Send / it in." / "6 Climb / to first." / "Win / the bounty." /
"Win bounties." No dollar amount, currency, token, wallet or payout appears in any frame (`tools/sweep.mjs`, every
0.05 s of the final: see Measurements). Nothing says or implies the ad is AI-generated. No X logo or X-like UI. GitHub's
logo is hidden. The session (@you, the entry, its score, the fictional rival handles, the win) is staged locally on the
real frontend; nothing was written to make.fun. The bounty, its title, brief and deadline (2026-12-14) are real.

## Standing decisions of the advertiser for this series (recorded, not argued)

1. **No on-screen "demo" label on the staged win.** As in ads 06-10, the film carries no "Demo" or "Results are
   staged" legend. The rows this touches (11, Deceptive "misleading tactics or claims") stay FAIL, and the response to X
   must state the staging plainly.
2. **The message is that you can win bounties, without figures** (the request: "Do not explicitly say # values for
   winning a bounty, overarching that you can 'win' bounties"). The captions "Bounties you can win.", "Win the bounty."
   and "Win bounties." stay; row 14 (Impractical Outcomes) stays FAIL for that reason.
3. **The film never says or implies it is AI-generated** (the request): confirmed frame by frame. Every caption is
   listed above; no frame carries "AI", "generated", "made with" or a model name. The film depicts "your agent" (an
   AI coding agent entering a bounty) as the product's feature, which is not a claim about how the film was made.

## Verdict

### A. The creative

| # | Clause (quoted) | Source URL | PASS/FAIL | Reason |
|---|---|---|---|---|
| 1 | "If you use advertising features, products, or services of the Services in any way ... you agree that your use of the advertising features ... as well as your advertisements are subject to the terms of our Master Services Agreement (https://ads.x.com/terms)." | https://x.com/en/tos (section 4) ; https://ads.x.com/terms | FAIL | The MSA is binding on every ad and I could not read it (ads.x.com/terms redirected to legal.x.com/ads-terms.html, which showed only a region picker). A policy I could not read is a review not done. Fix below. |
| 2 | "You represent and warrant that you have ... all rights, licenses, consents ... Content does not contain material subject to copyright or other proprietary rights" and X Rules "Copyright and Trademark: You may not violate others' intellectual property rights" | https://x.com/en/tos (section 3) ; https://help.x.com/en/rules-and-policies/x-rules | PASS | UI, ghost mark and wordmark are make.fun's own; music and SFX are synthesized in-house; GitHub's logo is hidden; rival handles are invented. Residual: font licences are not documented in the brief (advertiser's warranty, not an X test). |
| 3 | "Synthetic and Manipulated Media: You may not deceptively share synthetic or manipulated media that are likely to cause harm." / "media depicting a real person that has been fabricated or simulated" | https://help.x.com/en/rules-and-policies/x-rules ; https://help.x.com/en/rules-and-policies/authenticity | PASS | No real person is depicted or simulated, nothing concerns public issues, safety or serious harm. The staged leaderboard is addressed separately in row 11 under the Deceptive policy. |
| 4 | AI-generated media disclosure in ads (any clause requiring or forbidding it) | https://help.x.com/en/business-and-advertising/ads-policies and the sub-policies above | PASS | Searched all live policies read; no ad-specific AI label rule exists. The creative is code-rendered UI, not generative-AI imagery, and states nothing about how it was made. Re-check before upload in case the Ads policy update log (last entry September 2026) changes. |
| 5 | "Ads, including the ad creative, ad copy, ad images, ad videos, and ad call-to-action (CTA) should be consistent with the brand or product being promoted." | https://help.x.com/en/business-and-advertising/quality-policy | PASS | The ad shows the real make.fun product and its real bounty flow and ends on make.fun's own mark. |
| 6 | "Ads must use proper grammar and spelling. Ads should avoid punctuation mistakes, excessive use of capitalization, or symbols" | https://help.x.com/en/business-and-advertising/quality-policy | PASS | Captions are correctly spelled sentences; all-caps appears only in the small "STEP n OF 7" label. |
| 7 | "Ads must not include hashtags or urls in the ad text. Ads should not include more than one emoji." | https://help.x.com/en/business-and-advertising/quality-policy | FAIL | Post copy does not exist yet, so this clause is unreviewed. Also, URLs are visible inside the frames ("dev.make.fun/skill.md" in the agent prompt, "https://github.com/you/month-close" in the entry form); it is ambiguous whether "ad text" reaches text inside video pixels, and ambiguous is FAIL. |
| 8 | "Ads should avoid images, video or animations that are gimmicky, excessively cropped, or indecipherable." | https://help.x.com/en/business-and-advertising/quality-policy | FAIL | The 2 fps contact sheet shows frames where the outgoing and incoming captions are overlaid and garbled (for example "Bounties / you can / win." colliding with "Pick a / bounty.", and "Hand it to / your agent." colliding with "Step 1 of 7"), and the phone UI is cropped by the frame edge (second board card cut off, sheets cut at the bottom). The UI text inside the phone is also about 1/7 of the frame width and will be unreadable at feed size. The gravity-fall treatment can read as gimmicky. |
| 9 | "Ads should not contain disruptive content resulting in unexpected user experiences, aggressive flashing/effects or loud noises." | https://help.x.com/en/business-and-advertising/quality-policy | FAIL | Not proven clean. Whole-screen contents fall away and rain in on each of seven taps, there is a bounce on every landing, a confetti burst, and hard swaps between near-white website screens and a dark win sheet. I measured neither the SFX peak level (the -14 LUFS mix says nothing about peaks) nor the luminance flash rate. Unmeasured = FAIL. |
| 10 | "Use of clickbait tactics, where the primary purpose is to drive users to a landing page through exaggerated, sensationalized, inaccurate language or calls-to-action." | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | PASS | Captions are plain ("Pick a bounty.", "Win the bounty."); no exaggeration, no countdown pressure, no "free money" language. |
| 11 | "Use of misleading tactics or claims during the promotion of a product or service." | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | FAIL | The ad presents a fabricated outcome as if it were real: a real bounty title with a fictional @you, a fabricated score, fictional rivals, a staged jump to 1st place and "You won 1st place." Nothing on screen says it is a dramatization. A reviewer (or the Authenticity "out-of-context media" test) can read that as a misleading claim. (The update log also records a past prohibition of "Misleading synthetic or manipulated content".) |
| 12 | "Promotion of offers or deals that are not available or omitting vital information on pricing, payment terms, or expenses the customer will incur." | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | PASS | The bounty is real and open until 2026-12-14; make.fun's terms say "Entering is free: no purchase or payment is needed to enter or to win." The ad states no price. Condition: the flight must stop before 2026-12-14. |
| 13 | "Tricking users into sending money or sharing personal information without a tangible product or service." / "Offering cash gifts." / "get rich quick" ... "Altcoins" ... | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | PASS | Nothing in the frames asks for money or data, and prizes are for graded rank, not gifts. No coin, token or amount is shown. |
| 14 | "Ads must not contain content that promises or suggests unjustified opportunities or results. ... Promoting unrealistic claims, results within a specific period, or health or economic opportunities." | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | FAIL | "Bounties you can win." / "STEP 7 OF 7 Climb to first." / "Win the bounty." / "Win bounties." as a seven-step path to first place with a payout theme is an economic-opportunity claim with a specific outcome and no counterweight ("terms apply", "results vary", skill-graded and competitive). Also the removed prize figure leaves "win" undefined. |
| 15 | "Ads must not engage in cloaking tactics, otherwise restricting landing page access, or modifications to URL content following submission to circumvent the review process." | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | PASS | The creative is a frozen copy of the live production site; nothing is hidden by design from the destination. (Landing-page change risk is in row 29.) |
| 16 | "Mimicking X-like features where the functionality does not exist." / "Containing non-functional features or calls-to-action in the ad creative." | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | PASS | No X-like UI and no clickable-looking CTA button that goes nowhere; the sheets, receipt, ranking and win sheet are the site's real components (staged data, real features). |
| 17 | Derogatory; Inflammatory, Profane, or Offensive; Harmful Weight Loss or Body Image; Sensitive Event & Controversial Issues | https://help.x.com/en/business-and-advertising/unacceptable-content | PASS | No people, no speech, nothing offensive or event-related. |
| 18 | "Ads must not imply or suggest unauthorized connections to brands, products, services, or platforms without authorization." / "Unauthorized use of our proprietary terminology, product, feature names, branding, logos" | https://help.x.com/en/business-and-advertising/unacceptable-content | PASS | No X marks, "Share on X" removed, no X-like UI; GitHub's logo hidden. Residual, judged low: the plain words "GitHub" (in "A public GitHub repository ...") and the github.com URL remain in the form text as functional descriptions with no endorsement implied. |
| 19 | "X prohibits the promotion of gambling content, except for campaigns targeting specified countries where it is allowed with restrictions" ; scope includes "Games or apps played for money" and, in the update log, "Ads for games that include a monetary value as an entry method or have monetary value as part of the prize are permitted to target the United States, with restrictions." | https://help.x.com/en/business-and-advertising/gambling-content ; https://business.x.com/en/help/ads-policies/ads-policy-update-log | FAIL | A cash-prize competition ("win the bounty", "You won 1st place", ranking with "On track to win") is arguably a game with "monetary value ... as part of the prize". make.fun's terms call it free to enter and decided by skill, which argues it is outside gambling, but no X determination or pre-authorization is shown. Ambiguous restricted category without shown authorization = FAIL for the part that triggers it (the prize/win offer). |
| 20 | "Blockchain games refer to games involving NFT or cryptocurrency tokens where such can be won or earned. Advertising of Blockchain games is only permitted once the advertiser meets country-specific licensing requirements." / "This includes ... cryptocurrency products and services" | https://help.x.com/en/business-and-advertising/financial-services | FAIL | The prize being promoted is paid in USDC on Solana (make.fun terms: "Rewards are stated in US dollars and paid in USDC on Solana."). Removing every amount and token from the frames does not change what the ad promotes. No certification for crypto / blockchain-game advertising is shown. |
| 21 | "X prohibits knowingly marketing or advertising the following products and services to minors: ... Gambling products and services, including lotteries" | https://help.x.com/en/business-and-advertising/prohibited-content-for-minors | FAIL | Follows from rows 19-20: while the prize offer might be gambling, the campaign must exclude minors, and no age targeting is stated. (make.fun's own terms require entrants to be 18+.) |
| 22 | Paid Partnerships: "involvement of a third-party brand providing compensation or incentives to a user ... to promote their product" | https://help.x.com/en/rules-and-policies/paid-partnerships-policy | PASS | Not applicable: advertiser is make.fun itself, no creator is paid. If posted organically by an account run by the brand owner in the UK the page asks for a commercial-intent disclosure; as a promoted ad this does not apply. |
| 23 | Political Content: ads that "reference a candidate, political party, elected or appointed government official, election, referendum, ballot measure, legislation, regulation..." | https://help.x.com/en/business-and-advertising/political-content (Wayback capture 2026-10-27, not live) | PASS | Irrelevant: nothing in the creative refers to any of those. Reading caveat in the header. |
| 24 | "Applicable laws and regulations. Before starting any contests or sweepstakes please ensure that they comply with all applicable laws" and "Please don't set rules to encourage lots of duplicate updates (e.g., 'whoever Reposts this the most wins')" | https://help.x.com/en/rules-and-policies/x-contest-rules | PASS | The ad does not run a contest on X and asks for no repost, follow, hashtag or mention. Condition: the (unwritten) post copy must not add any such ask. |
| 25 | Illegal products and services (country list: infant formula, pork, national symbols, energy drinks, etc.) | https://help.x.com/en/business-and-advertising/illegal-products-and-services | PASS | None of the listed items or symbols appear. |

### B. The landing page (https://dev.make.fun/ and https://dev.make.fun/#all-bounties)

| # | Clause (quoted) | Source URL | PASS/FAIL | Reason |
|---|---|---|---|---|
| 26 | "The landing page's primary purpose cannot be advertising; it should be directly relevant to what is being advertised in the ad creative." | https://help.x.com/en/business-and-advertising/quality-policy | FAIL | The ad is about one bounty (Close a month of books...). The homepage hero is a different bounty ("Find the shortest delivery route", $200, status "Judging", "No action needed"), followed by 23 live bounties, a "Post a bounty" funnel and Discord. #all-bounties renders the same page. The advertised bounty is one card among many. |
| 27 | "The landing page must link to a working page and should be compliant with all ads policies." | https://help.x.com/en/business-and-advertising/quality-policy | PASS | The page loads and renders (HTTP 200, no redirect chain). Its compliance with the other policies is rated in rows 26 and 28-33. |
| 28 | "The landing page should not contain disruptive pop ups, or automatic downloads." | https://help.x.com/en/business-and-advertising/quality-policy | FAIL | The rendered page includes a "BETA / Hey, we're in beta! ... Let's make some fun" block and a "Join our Discord" prompt; I cannot tell from text whether the beta notice is a modal or banner. No automatic download seen. Ambiguous = FAIL; verify in a real browser. |
| 29 | "Ads must not engage in cloaking tactics, otherwise restricting landing page access, or modifications to URL content following submission to circumvent the review process." / "Containing excessive redirects on landing pages." | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | PASS | No cloaking, login wall, or redirects seen. Risk only: the homepage is live and changes every minute (countdowns, bounty states, featured card), so a reviewer's copy can differ from today's; pointing to a stable bounty URL removes that risk. |
| 30 | "Ads must not contain content that promises or suggests unjustified opportunities or results. ... Promoting unrealistic claims, results within a specific period, or health or economic opportunities." | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | FAIL | Page copy: "AI agents build software for cash rewards.", "Make money with AI agents", "How AI agents earn money", "claim the USDC reward if your entry places". Direct economic-opportunity claims, with eligibility (18+, free to enter, void where prohibited, sanctions screening, 7-day claim window) only on /terms. |
| 31 | "Promoting financial scams such as: 'get rich quick' ... penny stocks, NFTs, Altcoins ..." | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | FAIL | Homepage lists pump.fun memecoin bot bounties, tokenized Nasdaq stocks (xStocks), SOL/USDC liquidity bots, "Trading 7". They are described as simulations on /terms, but the homepage presents "Beat our trading bots on a Solana replay" with $ prizes. A reviewer can read this as altcoin/penny-stock-adjacent promotion. Ambiguous = FAIL. |
| 32 | "Advertising financial products, cryptocurrency, and NFTs on X is allowed but restricted by product type and the country or region you're targeting." / "A new certification request should be submitted for advertising different categories" | https://help.x.com/en/business-and-advertising/financial-services | FAIL | Page title "make.fun: AI agent bounties paid in USDC on Solana"; "paid by the house in USDC on Solana"; "Deposit a USDC reward in an on-chain escrow"; "Reward escrow"; wallets/keypairs. That is cryptocurrency / blockchain-games territory and no pre-authorization is shown. |
| 33 | "X prohibits the promotion of gambling content ..." ("Games or apps played for money"; update log: games "with monetary value as part of the prize") | https://help.x.com/en/business-and-advertising/gambling-content | FAIL | The page is a cash-prize leaderboard competition ("Rewards", "1st $50, 2nd $30", "Place / Reward"). Free to enter and skill-decided per /terms, but no X pre-authorization or written determination shown. |
| 34 | "Ads must not imply or suggest unauthorized connections to brands, products, services, or platforms without authorization." | https://help.x.com/en/business-and-advertising/unacceptable-content | FAIL | The homepage carries many third-party names as product claims: "build it with Claude Code, Codex or Cursor", Roblox, Shopify, Nasdaq, SPYx / QQQx / TSLAx / NVDAx, Coinbase cbBTC, Orca Whirlpool, pump.fun, claude-opus-5-5, marked, python-dateutil. Descriptive, but together they can imply affiliation or integration. |
| 35 | "Promotion of offers or deals that are not available or omitting vital information on pricing, payment terms, or expenses the customer will incur." | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | PASS | Rewards, currency and payer ("paid by the house in USDC on Solana") are stated; make.fun's terms state free entry, 18+, and payout screening. Advisory: put "Free to enter. 18+." on the landing page near the claims (it supports row 30's fix). |
| 36 | Unacceptable content: derogatory, inflammatory, profane, sensitive events | https://help.x.com/en/business-and-advertising/unacceptable-content | PASS | Nothing offensive on the pages rendered. |

Row count: creative 25 rows = 16 PASS (2, 3, 4, 5, 6, 10, 12, 13, 15, 16, 17, 18, 22, 23, 24, 25) and 9 FAIL (1, 7, 8, 9, 11, 14, 19, 20, 21). Landing page 11 rows = 4 PASS (27, 29, 35, 36) and 7 FAIL (26, 28, 30, 31, 32, 33, 34).


## Fixes

Creative:
- Row 1 (MSA unread): open https://legal.x.com/ads-terms.html in a normal browser, choose "United States of America and Canada" (or the targeted region) and read the Master Services Agreement; record the date. Also note the X Ads account must accept it before upload.
- Row 7 (ad text / URLs): write the post copy with no hashtags, no URL in the text (the link belongs in the card's website field), at most one emoji, correct grammar and capitalization, no "retweet to win" style asks. Have it reviewed against the quality policy before upload. Optionally blur or crop the visible URLs in the frames, or accept the risk.
- Row 8 (indecipherable / cropped / gimmicky): make the falling-out of the old caption finish before the new one rains in so no frame shows two captions overlaid (add 150-250 ms of empty ink between captions); keep each caption fully legible for at least 0.8 s; do not cut the phone UI mid-card (end each screen's crop on a card boundary); check a 360-px-wide playback and keep meaning in the caption, not the UI text.
- Row 9 (aggressive effects / noise): measure and record the SFX true peak (target no higher than -1 dBTP) and keep landing bounces and the confetti burst quiet and short; run a luminance-flash check (no more than 3 flashes per second); reduce the near-white to dark swap contrast on the win sheet if it exceeds that; log the numbers.
- Row 11 (staged outcome): add a persistent small super on the right panel for the whole ranking and win sequence: "Dramatization. Staged entry; example only." (about 36-42 px, at least 2 s, on screen at least from the receipt onward), and say "Example entry" in the post copy.
- Row 14 (economic-opportunity claim): soften the claim and add the counterweight: change the open to "Bounties open now" or "Enter bounties" and the close to "Enter the bounty.", drop "Climb to first" as a promise (for example "Climb the ranking."), and add an end-card line "Free to enter. 18+. Skill-graded; most entries do not place. Terms apply." (or place the same line in the post copy).
- Rows 19, 20, 21 (gambling / crypto / minors): before flighting, apply for X pre-authorization at https://ads.x.com/en/help/ads-pre-authorization (the index's "Click here" link) for Gambling and Games (prize games) and Financial Products and Services (cryptocurrency / blockchain games), or get X's account team to confirm in writing that a free-to-enter, skill-graded, crypto-paid prize competition is out of scope of both policies. Until authorized, do not upload. Once cleared, target only approved countries and set a minimum age of 18 (the make.fun terms already require 18+) so row 21 is also met.

Landing page:
- Row 26: send the ad to the advertised bounty's own page (the "Close a month of books into a ledger that reconciles" page, which the ad's flow already opens), not the homepage or #all-bounties.
- Row 28: load the destination in a real browser with a fresh profile and confirm no modal opens (the BETA notice and Discord prompt must be a quiet banner or absent); suppress both for ad traffic if they are modal.
- Row 30: on the destination, remove or soften "Make money with AI agents", "How AI agents earn money" and "cash rewards", and add "Free to enter. 18+. Graded by skill. Void where prohibited." next to the reward text.
- Row 31: avoid any destination showing memecoin / tokenized-stock / pump.fun bounties; the bounty page for the advertised bounty carries none.
- Rows 32, 33: same pre-authorization as rows 19-20 (or written scope determination); the destination page itself still says "USDC on Solana" in its rewards and is inside the restricted categories until cleared.
- Row 34: using the bounty page (row 26) removes the pile of third-party brand names; keep only names the advertised bounty genuinely needs (Beancount, Python).


## Bottom line

The creative is NOT clear to upload: nine creative rows fail (rows 1, 7, 8, 9, 11, 14, 19, 20, 21), of which the pre-authorization question (rows 19-21) blocks upload outright and the others are edits; on the landing page, first point the ad at the advertised bounty's own page, remove the beta pop-up / "make money" claims / unrelated trading and token bounties, and get the gambling and crypto pre-authorization (rows 26, 28, 30-34) before any flighting.


## Measurements on the final (`out/final.mp4`, 2026-11-09)

- Loudness: -14.0 LUFS integrated, true peak -1.36 dBTP after the mix (`scripts/mix.mjs`, two-pass loudnorm with a
  limiter at -3.47 dBFS); no voice; the loudest moments are the win's two landings and the lockup's mark.
- Flashing (`tools/flash.mjs`, frame-average luma, the WCAG general-flash test applied to the whole frame): 0 flashes
  (no pair of opposing 10%-of-range swings within 0.5 s), at most 0 per second; the largest single-frame step is
  14.7 of 255 (1.75 s, the dark win sheet falling out of the frame as the scrim lifts). The brightness changes are the win sheet arriving (a 0.3 s scrim)
  and the page falling away at the end, each one swing, never reversed within half a second.
- Money words (`tools/sweep.mjs 0.05`, every 0.05 s, every visible text node in the frame, `$`, USDC, Solana, SOL,
  reward, payout, paid, prize, earn, money, cash, escrow, wallet): 0 hits; its control run (Copied, Submitted, Climb,
  Rank, Win bounties) finds every one.
- AI disclosure: no frame says or implies how the film was made (standing decision 3).

## Author's response, on the final cut

The verdict above was given on the round-1 animatic. The final cut changed in ways that touch rows 8, 9 and 11; every
other row reads the same on the final. Status of every FAIL:

| Row | Status on the final | Note |
|---|---|---|
| 1. MSA unread | open, procedural | legal.x.com/ads-terms.html serves a region picker to a headless browser; the account holder must read and accept the Master Services Agreement for the target region in Ads Manager before upload. |
| 7. Hashtags or URLs in the ad text | open for the post copy; disputed for the frames | The post copy is not part of this deliverable: write it with no hashtag, no URL in the text (the link goes in the card's website field), at most one emoji, and no "repost to win" ask. The two URL-shaped strings in the frames are the product's own UI (the agent prompt "Read dev.make.fun/skill.md ..." and the repo link pasted into the form's field), which this clause's "ad text" does not name; if X reads it otherwise, both can be frosted like the prize figures. |
| 8. Gimmicky, excessively cropped, indecipherable | fixed (author), residual noted | The caption collisions the reviewer saw are gone: a caption leaves at least 0.34 s before the next lands, as one rigid body, so no frame shows two. The camera never crops a line of text across: it holds the page's full width (1.19-1.28x) and moves only vertically. Residual: the site's own microcopy (helper text, the sha, the claim code) is small at 360 px; each step's meaning is carried by its caption, which reads at phone size. |
| 9. Aggressive flashing or loud noises | fixed (measured) | 0 flashes, true peak -1.36 dBTP, -14 LUFS (Measurements above). |
| 11. Misleading tactics or claims (staged outcome) | open, by standing decision 1 | Stronger on the final: the film now opens on the staged "You won 1st place" (0-1.45 s) and closes its story on it (10.3-12.3 s). If the decision is revisited: a small persistent "Example entry. Results vary." legend, or opening on the board instead of the win. The response to X must say the session, entry, score, rivals and win are staged on the real frontend. |
| 14. Unjustified opportunities or results | open, by standing decision 2 | "Bounties you can win.", "Win the bounty." and "Win bounties." stay (the request). The counterweight belongs in the post copy: "Free to enter. 18+. Graded by skill." |
| 19-21. Gambling, cryptocurrency, minors | open, account level | Get X's pre-authorization (or a written scope determination that a free-to-enter, skill-graded competition paid in USDC is out of scope) for Gambling and for Financial Products and Services before any flight; once cleared, target approved countries only, 18+. Nothing in the creative names a currency, a token or an amount; the trigger is the product. |
| Landing page 26, 28, 30-34 | open, product side | Point the ad at the bounty's own page (`https://dev.make.fun/bounty/close-the-books-01`), not the homepage or `#all-bounties`; confirm the beta notice and the Discord prompt are not modals for ad traffic; soften "Make money with AI agents" and "cash rewards" there and add "Free to enter. 18+."; the bounty page carries none of the trading, memecoin or third-party-brand listings. |

Launch verdict: do not run the ad yet. The creative's own fixable rows (8, 9) are fixed on the final; it carries no
money figure or money word in any frame, no AI statement, no third-party logo and no flashing. What blocks the flight
is outside the film: the account-level pre-authorization (rows 19-21), the MSA (row 1), the landing page (rows 26-34)
and, by the advertiser's standing decisions, rows 11 and 14, which the response to X must address as written above.
