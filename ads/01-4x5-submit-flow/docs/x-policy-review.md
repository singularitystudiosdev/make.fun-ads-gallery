# X policy review: `out/final.mp4` (4:5, 19 s) and its landing page

Read live on 2026-11-08, in the session that built the ad (never from memory): X Terms of Service
(`https://x.com/en/tos`, effective 2026-10-09), X Ads Policies (`https://help.x.com/en/business-and-advertising/ads-policies`)
and every sub-policy the ad touches, linked per row. Ambiguous counts as a fail.

Nothing has been uploaded to X. This is the gate an upload would have to pass.

## Verdict

| Clause | Source | Verdict | Reason |
|---|---|---|---|
| ToS: IP. "We reserve the right to remove Content that violates the User Agreement, including for example, copyright or trademark violations" | https://x.com/en/tos | PASS | The board's meme GIFs (film stills of real actors) are replaced by the make.fun mark. Every other pixel is make.fun's own UI and its OFL fonts. The score and SFX are synthesized in code. |
| Quality: Ad consistency | https://help.x.com/en/business-and-advertising/quality-policy | PASS | Every frame is make.fun's own product and brand. |
| Quality: Editorial (grammar, capitalization, symbols, no hashtags or URLs in ad text) | same | PASS | Short sentence-case headlines ("Win bounties.", "Pick a bounty.", "Hand it to your agent.", "Paste your commit.", "Get graded in a sandbox.", "Climb the leaderboard.", "Win the bounty."), correct grammar, no hashtags, no URLs, no emoji. The post copy written at upload must also carry no URL or hashtag. |
| Quality: Media ("aggressive flashing/effects or loud noises") | same | PASS | No flashes or strobes. The mix is -14 LUFS integrated with true peak at or under -1 dBTP. |
| Quality: Landing pages. "The landing page should not contain disruptive pop ups" | same | **FAIL** | A first visit to `https://dev.make.fun/#all-bounties` opens a full-screen "Hey, we're in beta!" modal (seen in this session's first capture). Ad traffic would land on a pop-up. |
| Deceptive: Deceptive content (clickbait, misleading claims, unavailable offers) | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | PASS | The headlines describe the real flow. The featured bounty ("Close a month of books…") is live until 2026-12-14. The account and its win are a demo of the real UI under the generic handle @you, with no claimed result and no figures. |
| Deceptive: Fraudulent schemes ("get rich quick", cash gifts) | same | PASS | No income claim, no amounts (every prize figure is redacted to a neutral bar, the win panel's prize line removed), no "make money" copy. Winning is tied to a graded competition. |
| Deceptive: Impractical outcomes ("unrealistic claims, results within a specific period … economic opportunities") | same | PASS | No promise that the viewer will win, no time frame, no figure. "Win bounties" names what the product is. |
| Deceptive: Non-existent features, non-functional CTAs | same | PASS | Every control shown exists on the site and behaves as shown. The end card has no button shapes. |
| Unacceptable: Unauthorized references ("imply or suggest unauthorized connections to brands, products, services, or platforms") | https://help.x.com/en/business-and-advertising/unacceptable-content | PASS | X's logo and its "Share on X" button stay out of frame. The chooser card with GitHub's logo is not shown. GitHub appears only as the product's own functional text ("A public GitHub repository") and a typed repo URL, with no logo and no partnership claim. |
| Gambling and games ("Games or apps played for money") | https://help.x.com/en/business-and-advertising/gambling-content | PASS | These are skill-based software bounties, free to enter, with no stake, no odds and no chance element. Nothing in the creative presents a game. |
| Financial services: cryptocurrency products and services (pre-authorization) | https://help.x.com/en/business-and-advertising/financial-services | PASS (creative) | The creative shows no crypto. Board listings mentioning Solana, tokens or trading are filtered out, and any "USDC"/"Solana" text is redacted. |
| Financial services, landing page: "The landing page … should be compliant with all ads policies" (Quality) | same, and quality-policy | **FAIL** | The landing page's title and lead are "AI agent bounties paid in USDC on Solana", and signed-in visitors are asked to "Link a wallet". Whether X treats crypto payouts as a "cryptocurrency product or service" needing certification is ambiguous, and ambiguous counts as a fail. |
| Political, healthcare, adult, alcohol, tobacco, weapons, drugs, minors | ads-policies index | PASS | None touched. |

## What fixes each fail
1. **Pop-up**: point the ad at a URL that opens straight onto the bounties for ad traffic, with the beta modal
   suppressed (for example, honouring a `?ref=x-ad` that marks the welcome as seen). The production `make.fun`
   host would also be a better landing than the `dev.` host.
2. **Crypto on the landing page**: either obtain X's Financial Services (cryptocurrency) certification for the
   advertiser account before launch, or land ad traffic on a page whose lead copy does not promote USDC/Solana
   payouts.

A changed ad, or a changed landing page, is a new ad and gets this review again.
