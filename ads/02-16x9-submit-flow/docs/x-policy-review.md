# X policy review: `out/final.mp4` (16:9, 18 s) and its landing page

Read live on 2026-11-08, in the session that built the ad (never from memory): X Terms of Service
(`https://x.com/en/tos`, effective October 9, 2026), X Ads Policies
(`https://help.x.com/en/business-and-advertising/ads-policies`) and every sub-policy the ad touches, linked per row.
The landing page `https://dev.make.fun/` was read the same day. Ambiguous counts as a fail.

Nothing has been uploaded to X. This is the gate an upload would have to pass.

## Verdict

| Clause | Source | Verdict | Reason |
|---|---|---|---|
| ToS, IP: "We reserve the right to remove Content that violates the User Agreement, including for example, copyright or trademark violations or other intellectual property misappropriation, impersonation, unlawful conduct, or harassment." | https://x.com/en/tos | PASS | Every UI pixel is make.fun's own production markup, stylesheet and OFL fonts. The board's meme GIFs (film stills of real actors) are replaced by the make.fun mark. GitHub's logo on the chooser card is hidden. The music and SFX are synthesized in code. No impersonation: the account is the generic placeholder @you and the rivals are fictional handles. |
| Quality, Ad consistency: "Ads, including the ad creative, ad copy, ad images, ad videos, and ad call-to-action (CTA) should be consistent with the brand or product being promoted." | https://help.x.com/en/business-and-advertising/quality-policy | PASS | Every frame is make.fun's own product and brand; it ends on the make.fun lockup. |
| Quality, Editorial: "Ads must use proper grammar and spelling … avoid punctuation mistakes, excessive use of capitalization, or symbols … must not include hashtags or urls in the ad text … not … more than one emoji." | same | PASS | Sentence-case headlines with correct grammar ("Bounties for your agent.", "Pick a bounty.", "Hand it to your agent.", "Paste your repo link.", "Then the commit.", "Get graded.", "Climb the leaderboard.", "Win bounties."), no hashtags, no emoji. The repo URL shown is the product's own input field, not ad text. The post copy written at upload must carry no URL or hashtag. |
| Quality, Media: "Ads should avoid images, video or animations that are gimmicky, excessively cropped, or indecipherable. Ads should not contain disruptive content resulting in unexpected user experiences, aggressive flashing/effects or loud noises." | same | PASS | Each step's key text is lifted out of the UI and shown large; the window keeps whole screens in frame. No flashes or strobes (the two window flips and the site's own confetti are smooth moves). Mixed to -14 LUFS integrated, true peak at or under -1 dBTP. |
| Quality, Landing pages: "The landing page should not contain disruptive pop ups, or automatic downloads." | same | **FAIL** | A first visit to `https://dev.make.fun/` opens a full-screen "Hey, we're in beta!" modal (seen in this session's capture of the live site at 1280 x 720). Ad traffic would land on a pop-up. |
| Quality, Landing pages: "The landing page must link to a working page and should be compliant with all ads policies." | same, and the financial and gambling rows below | **FAIL** | The landing page's title and lead are "AI agent bounties paid in USDC on Solana" and "AI agents build software for cash rewards", and its live list includes Solana token-bot, memecoin-bot, tokenized-stock-bot and stock-prediction bounties. Whether X treats these as crypto or financial products needing certification, or prediction contests as gambling, is ambiguous, and ambiguous counts as a fail. |
| Deceptive, Deceptive content: "clickbait tactics … misleading tactics or claims … offers or deals that are not available" | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | PASS | The headlines describe the real flow. The featured bounty ("Close a month of books into a ledger that reconciles") is live until 2026-12-14 on the landing page. The entry and the win are a demonstration of the real UI under the generic handle @you, with no claimed result and no figures. Note: the board shows the six listings the stage kept (the live site lists more); the count is a snapshot, not a claim. |
| Deceptive, Fraudulent schemes: "Offering cash gifts. Promoting financial scams such as: 'get rich quick' …" | same | PASS | No money appears: every prize figure is redacted to a neutral bar, the win panel's prize line and per-place amounts are removed, and no copy mentions cash or earnings. Winning is tied to a graded competition. |
| Deceptive, Impractical outcomes: "Promoting unrealistic claims, results within a specific period, or health or economic opportunities." | same | PASS | No promise that the viewer will win, no time frame, no figure. "Win bounties" names what the product is: graded contests. |
| Deceptive, Non-existent features: "Mimicking X-like features where the functionality does not exist … non-functional features or calls-to-action in the ad creative." | same | PASS | Every control shown exists on the site and does what it does in the film. The film's lifts and flips move real UI; they add no feature. The end card has no button shapes. |
| Unacceptable, Unauthorized references: "Ads must not imply or suggest unauthorized connections to brands, products, services, or platforms without authorization." | https://help.x.com/en/business-and-advertising/unacceptable-content | PASS | X's logo and the win panel's "Share on X" button are removed. GitHub's logo on the chooser card is hidden. GitHub appears only as the product's functional text ("A public GitHub repository") and a typed repo URL, with no logo and no partnership claim. |
| Gambling, "Games or apps played for money" | https://help.x.com/en/business-and-advertising/gambling-content | PASS (creative) | The bounty shown is a free-to-enter, skill-graded software task with no stake, odds or chance element. |
| Financial products and services: cryptocurrency and DeFi products are "permitted with restrictions" after certification | https://help.x.com/en/business-and-advertising/financial-services | PASS (creative) | The creative shows no crypto: board listings mentioning Solana, tokens or trading are filtered out by the stage, and any "USDC" or "Solana" text is redacted. |
| Political, healthcare, adult, alcohol, tobacco, weapons, drugs, minors | https://help.x.com/en/business-and-advertising/ads-policies | PASS | None touched. |

## What fixes each fail

Both fails are on the landing page, not the creative.

1. **Pop-up**: point the ad at a URL that opens straight onto the bounties for ad traffic with the beta modal
   suppressed (for example, honouring a `?ref=x-ad` that marks the welcome as seen). The production `make.fun` host
   would also be a better landing than the `dev.` host.
2. **Crypto and prediction content on the landing page**: either obtain X's Financial Services (cryptocurrency)
   certification and, if X asks, gambling pre-authorization for the advertiser account before launch, or land ad
   traffic on a page whose lead copy does not promote USDC/Solana payouts and that does not list the crypto,
   trading and prediction bounties.

A changed ad, or a changed landing page, is a new ad and gets this review again.
