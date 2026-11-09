# X policy review: `out/final.mp4` (9:16, 18 s) and its landing page

Read live on 2026-11-08, in the session that built the ad (never from memory): X Terms of Service
(`https://x.com/en/tos`, effective October 9, 2026), X Ads Policies
(`https://help.x.com/en/business-and-advertising/ads-policies`) and every sub-policy the ad touches, linked per row.
The landing page `https://dev.make.fun/#all-bounties` was read the same day, and its first visit was captured at a
360 x 640 phone viewport (`capture/probe.mjs`). Ambiguous counts as a fail.

Nothing has been uploaded to X. This is the gate an upload would have to pass.

## Verdict

| Clause | Source | Verdict | Reason |
|---|---|---|---|
| ToS: "We reserve the right to remove Content that violates the User Agreement, including for example, copyright or trademark violations or other intellectual property misappropriation, impersonation, unlawful conduct, or harassment." | https://x.com/en/tos | PASS | Every UI pixel is make.fun's own production markup, stylesheet and OFL fonts, frozen from the live site. The board's meme GIF tiles (film stills of real actors) are replaced by the make.fun mark. GitHub's logo on the chooser card is hidden. The music and SFX are synthesized in code. No impersonation: the account is the generic placeholder @you and the rivals are fictional handles. |
| Quality, Ad consistency: "Ads, including the ad creative, ad copy, ad images, ad videos, and ad call-to-action (CTA) should be consistent with the brand or product being promoted." | https://help.x.com/en/business-and-advertising/quality-policy | PASS | Every frame is make.fun's own product and brand; it opens on the make.fun mark and ends on the make.fun lockup. |
| Quality, Editorial: "Ads must use proper grammar and spelling. Ads should avoid punctuation mistakes, excessive use of capitalization, or symbols. Ads must not include hashtags or urls in the ad text. Ads should not include more than one emoji." | same | PASS | Sentence-case captions with correct grammar ("Your agent can win this.", "Hand it to your agent.", "Paste your repo link.", "Then the commit.", "Send it in.", "Get scored.", "Climb to first.", "Win bounties."), no hashtags, no emoji. The repo URL and the skill.md line are the product's own UI, not ad text. The post copy written at upload must carry no URL or hashtag. |
| Quality, Media: "Ads should avoid images, video or animations that are gimmicky, excessively cropped, or indecipherable. Ads should not contain disruptive content resulting in unexpected user experiences, aggressive flashing/effects or loud noises." | same | PASS | The site's phone layout plays at 0.93-1.25x of its native size with the caption in its own band; no flashes or strobes (the site's own confetti is the only burst); mixed to -14 LUFS integrated, true peak at or under -1 dBTP. |
| Quality, Landing pages: "The landing page should not contain disruptive pop ups, or automatic downloads." | same | **FAIL** | A first visit to `https://dev.make.fun/` opens a full-screen "Hey, we're in beta!" modal (captured today at 360 x 640, `capture/shots/probe-360/01-home.png`). Ad traffic would land on a pop-up. |
| Quality, Landing pages: "The landing page must link to a working page and should be compliant with all ads policies." | same, and the financial and gambling rows below | **FAIL** | The landing page's title and lead are "AI agent bounties paid in USDC on Solana" and "AI agents build software for cash rewards", its featured listing today is "Beat our trading bots on a Solana replay", and its list includes Solana token, memecoin, tokenized-stock and concentrated-liquidity bounties. Whether X treats these as cryptocurrency or financial products needing certification is ambiguous, and ambiguous counts as a fail. |
| Deceptive, Deceptive content: "Use of clickbait tactics ... Use of misleading tactics or claims ... Promotion of offers or deals that are not available" | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | PASS | The captions describe the real flow. The featured bounty ("Close a month of books into a ledger that reconciles") is live until 2026-12-14 on the landing page. The entry, the ranking and the win are a demonstration of the real UI under the generic handle @you, with no claimed result and no figures. The board shows the six listings the stage kept (the live site lists more); the count is a snapshot, not a claim. |
| Deceptive, Fraudulent schemes: "Offering cash gifts. Promoting financial scams such as: 'get rich quick' ..." | same | PASS | No money appears: every prize figure is redacted to a neutral bar, the ranking's "On track to win" has its figure removed, the win panel's prize line and per-place amounts are removed, and no caption mentions cash or earnings. Winning is tied to a graded competition. |
| Deceptive, Impractical outcomes: "Promoting unrealistic claims, results within a specific period, or health or economic opportunities." | same | PASS | "Your agent can win this." states a possibility, with no promise, figure or time frame; "Win bounties." names what the product is: graded contests. |
| Deceptive, Non-existent features: "Mimicking X-like features where the functionality does not exist ... Containing non-functional features or calls-to-action in the ad creative." | same | PASS | Every control shown exists on the site and does in the film what it does on the site. The touch marks show where a finger taps; they add no feature. The end card has no button shapes. |
| Unacceptable, Unauthorized references: "Ads must not imply or suggest unauthorized connections to brands, products, services, or platforms without authorization." | https://help.x.com/en/business-and-advertising/unacceptable-content | PASS | X's logo and the win panel's "Share on X" button are removed. GitHub's logo on the chooser card is hidden; GitHub appears only as the product's functional text ("A public GitHub repository") and a typed repo URL, with no logo and no partnership claim. |
| Gambling: "Games or apps played for money" | https://help.x.com/en/business-and-advertising/gambling-content | PASS (creative) | The bounty shown is a free-to-enter, skill-graded software task with no stake, odds or chance element. |
| Financial products and services: cryptocurrency products and services are allowed "with restrictions", after certification | https://help.x.com/en/business-and-advertising/financial-services | PASS (creative) | The creative shows no crypto: the stage keeps only board listings with no crypto, trading or third-party trademark, and any "USDC" or "Solana" text is redacted. |
| Political, healthcare, adult, alcohol, tobacco, weapons, drugs, minors | https://help.x.com/en/business-and-advertising/ads-policies | PASS | None touched. |

## What fixes each fail

Both fails are on the landing page, not the creative.

1. **Pop-up**: point the ad at a URL that opens straight onto the bounties for ad traffic with the beta modal
   suppressed (for example, honouring a `?ref=x-ad` that marks the welcome as seen). The production `make.fun` host
   would also be a better landing than the `dev.` host.
2. **Crypto and trading content on the landing page**: either obtain X's Financial Services (cryptocurrency)
   certification for the advertiser account before launch, or land ad traffic on a page whose lead copy does not
   promote USDC/Solana payouts and that does not feature or list the crypto and trading bounties.

A changed ad, or a changed landing page, is a new ad and gets this review again.
