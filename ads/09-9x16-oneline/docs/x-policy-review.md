# X policy review: ad 09, the 9:16 "one line" film, and its landing page

Read live on 2026-11-09 in this session, with `mcp__scraper__scrape` (the scraper's browser; plain `fetch` is walled
on help.x.com and x.com/tos). The texts are kept in the chat's scratch folder (`.tmp/ad09-policy/`, not committed).
Judged harshly: an ambiguous row is a fail; a restricted category without shown pre-authorization is a fail. The film
rows were judged on the content spec and the round-2 animatic, and re-checked on the final render (`out/final.mp4`,
2026-11-09): the two rows marked "re-check on final" are settled below.

Nothing is uploaded to X by this work. This file is the review the user's rule asks for before any upload.

## What was read

| Page | URL | Status |
|---|---|---|
| Terms of Service, "Effective: October 9, 2026" | https://x.com/en/tos | fresh render, 63,066 chars |
| Ads Policies index | https://help.x.com/en/business-and-advertising/ads-policies | fresh |
| Quality | https://help.x.com/en/business-and-advertising/quality-policy | fresh |
| Deceptive and Fraudulent Content | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | fresh |
| Unacceptable Content | https://help.x.com/en/business-and-advertising/unacceptable-content | fresh |
| Financial Products and Services | https://help.x.com/en/business-and-advertising/financial-services | fresh (a first call came from the scraper's cache; a second render was identical) |
| Gambling content | https://help.x.com/en/business-and-advertising/gambling-content | fresh, every country row present |
| Prohibited Content for Minors | https://help.x.com/en/business-and-advertising/prohibited-content-for-minors | fresh |
| Authenticity (synthetic and manipulated media, organic) | https://help.x.com/en/rules-and-policies/authenticity | fresh |
| Landing page | https://dev.make.fun/#all-bounties | fresh render, DOM checked for an open dialog |

Since ad 06's review (2026-11-08): every clause it quoted is still verbatim in today's text (checked by exact match);
the ToS is still "Effective: October 9, 2026"; the Ads index lists the same policies; no ads policy mentions
AI-generated or synthetic media (searched for "synthetic", "AI-generated", "artificial intelligence", "generative").

Not read: the Master Services Agreement the ToS points ads to (https://ads.x.com/terms); the Paid Partnerships and
other product policies (checked by title: this is a brand-owned ad); X's creative specifications.

## The film

What it shows: the live make.fun phone frontend, frozen per state, with one magenta line drawn over it; captions in an
ink band: "Bounties you can win.", "Pick a bounty.", "Hand it to your agent.", "Submit an entry.", "Paste the link and
the commit.", "Send it in.", "Aim for first."; the end card "make.fun" and "Win bounties." No dollar figure, currency,
token, wallet, payout or prize line reaches a frame (`tools/sweep.mjs`: no visible money or payout word in any frame
of the film, at 0.05 s steps on the final's source). The session (@you), the rivals, the score and the win are staged.

| Clause | Source | Verdict | Reason and fix |
|---|---|---|---|
| ToS: "We reserve the right to remove Content that violates the User Agreement, including for example, copyright or trademark violations or other intellectual property misappropriation, impersonation, unlawful conduct, or harassment." | https://x.com/en/tos | PASS | Every UI pixel is make.fun's own frontend and mark; GitHub's logo is hidden on the chooser card; the music and SFX are synthesized in code; the handles @you, @quiet-lynx, @ledger-pete, @byte-heron, @nova-tern are fictional. Pre-flight: confirm none is a real X account. |
| ToS: "You represent and warrant that you have, or have obtained, all rights, licenses, consents, permissions, power and/or authority necessary to grant the rights granted herein for any Content that you input, submit, create, post, generate, or display on or through the Services." | https://x.com/en/tos | PASS | No third-party asset; the fonts are the site's own (SIL OFL). The repository URL, sha and claim code are demo values. |
| ToS: "You are responsible for your use of the Services, including any features that perform autonomous actions, and for any Content ..." | https://x.com/en/tos | PASS (note) | The film shows a person handing a task to their agent on make.fun, not an agent acting on X. Keep any X-side automation out of the campaign. |
| Quality, Ad Consistency: "Ads, including the ad creative, ad copy, ad images, ad videos, and ad call-to-action (CTA) should be consistent with the brand or product being promoted." | https://help.x.com/en/business-and-advertising/quality-policy | PASS | The product's own UI in its own type and colours; the line is the brand's magenta. Caveat: the film tells a no-money story while the landing page leads with USDC (landing rows). |
| Quality, Editorial: "Ads must use proper grammar and spelling." / "Ads should avoid punctuation mistakes, excessive use of capitalization, or symbols" | https://help.x.com/en/business-and-advertising/quality-policy | PASS | Eight short sentences in sentence case, each ending in a full stop. |
| Quality, Editorial: "Ads must not include hashtags or urls in the ad text." | https://help.x.com/en/business-and-advertising/quality-policy | PASS | No caption carries a URL or hashtag. URLs appear only inside the real UI at the UI's own size: the bounty's prompt box ("Read dev.make.fun/skill.md and enter ...") and the form's repository field, which the line's sweep fills with the site's own value. Earlier cuts carried the repository link on a floating chip and a moving copy of the prompt box; both were removed, so no URL is lifted out of the product as overlay text. Keep the post copy free of URLs and hashtags. |
| Quality, Editorial: "Ads should not include more than one emoji." | https://help.x.com/en/business-and-advertising/quality-policy | PASS | No emoji. The ghost is the brand's mark. |
| Quality, Media: "Ads should avoid images, video or animations that are gimmicky, excessively cropped, or indecipherable." | https://help.x.com/en/business-and-advertising/quality-policy | PASS (checked on the final) | One motion device throughout (the line), every caption whole on screen from its first frame (words rise into a mask, no caption is ever cut by the frame), the product shown at 1.0-1.3x so its type reads. The band covers only the site's header strip. |
| Quality, Media: "Ads should not contain disruptive content resulting in unexpected user experiences, aggressive flashing/effects or loud noises." | https://help.x.com/en/business-and-advertising/quality-policy | PASS (checked on the final) | No full-frame flashes; the one confetti burst is the site's own; the final measures -14.05 LUFS integrated, true peak -1.57 dBTP. |
| Deceptive, Deceptive Content: "Use of misleading tactics or claims during the promotion of a product or service." / "Promotion of offers or deals that are not available or omitting vital information on pricing, payment terms, or expenses the customer will incur." | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | **FAIL (kept, by the user's standing decision)** | The film opens and closes on the site's "You won 1st place" for a staged @you with fictional rivals and score, with no on-screen "demo" line. A harsh reviewer can read the win as a delivered result. The user decided on 2026-11-09 for this series (ad 06's decision tray: "No label") that the staged win carries no label; this ad follows it. If X's review raises it, the fix is a small persistent line ("Demo. Results are staged.") and the contest terms (entries are scored; not every entry places) in the post copy. |
| Deceptive, Impractical Outcomes: "Ads must not contain content that promises or suggests unjustified opportunities or results." / "Promoting unrealistic claims, results within a specific period, or health or economic opportunities." | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | PASS (risk) | "Bounties you can win." states the mechanism; "Aim for first." is an aim, not a promise; no figure, earnings or timeframe is stated. The 15 s path from a board to a staged first place is the same risk as the row above and is covered by the same fix if raised. |
| Deceptive, Fraudulent Schemes: "Ads must not promote content that is associated with fraudulent or scam-like behavior." / "Offering cash gifts." | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | PASS (creative) | No money in any frame; no gift offered. The landing page is a separate fail (below). |
| Deceptive, Circumventing Systems: "Ads must not engage in cloaking tactics, otherwise restricting landing page access, or modifications to URL content following submission to circumvent the review process." | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | PASS (condition) | The creative shows the same site that is served. Do not change the landing route's content after approval. |
| Deceptive, Non-existent Features: "Mimicking X-like features where the functionality does not exist." / "Containing non-functional features or calls-to-action in the ad creative." | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | PASS | No X-like UI. Every control the line presses is the site's real control (the card, Copy for your agent, Submit an entry, Submit it yourself, Submit entry, the Leaderboard tab); the receipt is dragged away the way a phone sheet is swiped down. |
| Authenticity, Synthetic and Manipulated Media: "Manipulated: Media that is shared as authentic but is significantly and deceptively altered, manipulated, or fabricated in a way that fundamentally changes its meaning and can result in widespread confusion on public issues, impact public safety, or cause serious harm" | https://help.x.com/en/rules-and-policies/authenticity | PASS (note) | An organic-content rule; its harm tests (public issues, safety, serious harm) are not met by a product demo with no real person in it. The staged session is the Deceptive row's matter. |
| Unacceptable Content, Derogatory / Inflammatory / Sensitive Event | https://help.x.com/en/business-and-advertising/unacceptable-content | PASS | No people, protected group, profanity or sensitive event. |
| Unacceptable Content, Unauthorized References: "Ads must not imply or suggest unauthorized connections to brands, products, services, or platforms without authorization." | https://help.x.com/en/business-and-advertising/unacceptable-content | PASS | No X name, logo or "Share on X" (removed from the win panel); GitHub's logo hidden; the bounty "Beat AlgoTune's best gzip speedup" names a public benchmark as its subject, with no logo or claimed partnership. |
| Financial: "Advertising financial products, cryptocurrency, and NFTs on X is allowed but restricted by product type and the country or region you're targeting." | https://help.x.com/en/business-and-advertising/financial-services | PASS (creative) | No money structure is left in the frames: every amount, the dock's money line, the ranking's "Reward" header, "top 10 paid", the win panel's prize line, per-place amounts and View payout are removed; the board keeps its coding bounties only. The product's category is the landing page's row. |
| Gambling: "Games or apps played for money*" | https://help.x.com/en/business-and-advertising/gambling-content | PASS (creative) | A skill-graded software task with a score and a ranking; no stake, odds or chance; no money. |
| Prohibited Content for Minors | https://help.x.com/en/business-and-advertising/prohibited-content-for-minors | PASS (targeting note) | Nothing restricted in the film. Because the landing page promotes money-paid contests, set the campaign's minimum age to 18 or above. |
| AI-generated or synthetic-media ad disclosure | the Ads index and every sub-policy above | PASS (no rule found) | No ads policy requires or mentions it today. The film is a code-rendered animation of the real frontend; it carries no AI-generated statement, as briefed. |

## The landing page (https://dev.make.fun/#all-bounties, read today)

Observed live: title "make.fun: AI agent bounties paid in USDC on Solana"; H1 "AI agents build software for cash
rewards."; "Pick a bounty, build it with Claude Code, Codex or Cursor, and claim the USDC reward if your entry
places."; "Make money with AI agents"; "It signs in with its own Solana keypair ..."; "Deposit a USDC reward in an
on-chain escrow ..."; cards priced "$200" to "$1,325"; 24 live bounties with Trading 8, Forecasting 2, Growth 5,
including "Beat our trading bots on a Solana replay", "Predict the next 5 trading days' moves of 9 Nasdaq stocks",
"Highest net PnL from a pump.fun memecoin bot", "Highest hedged return from a SOL/USDC concentrated-liquidity manager",
"Highest net return from a tokenized US stock bot", "Race a BTC trading bot live for 4 hours"; footer "make.fun is a
competition platform where people and their AI agents earn USDC by winning coding bounties."; a first visit opens
`dialog[data-testid=beta-welcome]` ("Hey, we're in beta!").

| Clause | Source | Verdict | Reason and fix |
|---|---|---|---|
| Quality, Landing Pages: "The landing page should not contain disruptive pop ups, or automatic downloads." | https://help.x.com/en/business-and-advertising/quality-policy | **FAIL** | The beta dialog opens on first load and blocks the page. **Fix:** a campaign route that never mounts it, tested on a fresh profile. |
| Quality, Landing Pages: "The landing page must link to a working page and should be compliant with all ads policies." | https://help.x.com/en/business-and-advertising/quality-policy | **FAIL** | Works, but fails the rows here. Passes when they do. |
| Quality, Landing Pages: "The landing page's primary purpose cannot be advertising; it should be directly relevant to what is being advertised in the ad creative." | https://help.x.com/en/business-and-advertising/quality-policy | FAIL (relevance) | The film shows one coding bounty; `#all-bounties` is a board of 24 led by trading and forecasting contests. **Fix:** deep-link to the bounty the film shows, "Close a month of books into a ledger that reconciles" (`/bounty/close-the-books-01`, open until 2026-12-14). |
| Financial, scope and certification: "X allows the promotion of financial products and services with restrictions. This includes financial entities, products and services, cryptocurrency products and services, non-fungible tokens (NFTs) and related products." / "obtain a prior authorization from X by getting certified." | https://help.x.com/en/business-and-advertising/financial-services | **FAIL** | A USDC-on-Solana contest platform with on-chain escrow and token-trading bounties; no X financial certification is shown. **Fix:** certification for cryptocurrency products and services before launch. |
| Financial, Blockchain Games: "Blockchain games refer to games involving NFT or cryptocurrency tokens where such can be won or earned." / "Advertising of Blockchain games is only permitted once the advertiser meets country-specific licensing requirements." | https://help.x.com/en/business-and-advertising/financial-services | **FAIL** | USDC that "can be won" fits the definition on a plain reading; no licensing or authorization shown. **Fix:** the same certification, naming this category. |
| Financial: "Investment advice, investment, asset or fund management, investment opportunities, and offers to increase wealth" / "Currency exchange, trading, and related services" | https://help.x.com/en/business-and-advertising/financial-services | **FAIL** | "Make money with AI agents", "cash rewards" and the trading bounties. **Fix:** a campaign route with only the coding bounty and no earnings language, plus certification. |
| Deceptive, Impractical Outcomes (as above) | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | **FAIL** | "Make money with AI agents" and "earn USDC" are an economic-opportunity claim. **Fix:** the campaign route says what the contest is, with no earnings promise. |
| Gambling: "Sites or services providing tips, odds, handicapping, sports picks, forecasts, or poker odds calculators" | https://help.x.com/en/business-and-advertising/gambling-content | FAIL (ambiguous) | Money-prize prediction contests on the board. **Fix:** none on the campaign route. |

## What fixes each fail (priority order)

1. **Landing page, financial and blockchain-games rows (the blocker):** X financial certification for cryptocurrency
   products and services, or do not run the ad. A campaign route clears the page's content, not the category.
2. **Landing page, pop-up, relevance, trading and forecasting:** a campaign route with no beta dialog, deep-linked to
   `/bounty/close-the-books-01`, with no trading or forecasting listings and no earnings copy.
3. **Film, the staged win with no label:** kept by the user's decision; if X raises it, add "Demo. Results are
   staged." and the contest terms in the post copy.

## Pre-flight notes (not fails)

- The post copy (not part of this work) needs no hashtags, no URL in the text, at most one emoji, correct grammar.
- The rival handles are fictional; confirm none is a real X account.
- The board in the film is the staged one (the four coding bounties the stage keeps); the live board lists more. The
  film's bounty and prompt text are live today, and the bounty is open until 2026-12-14.
