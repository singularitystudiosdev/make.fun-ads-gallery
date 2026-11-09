# Ad 4: X compliance review (website card, from Predict.fun A1)

**Reviewed:**
- the creative: `creative.png` (1.91:1) and `creative-1x1.png` (1:1);
- the post text, card title and CTA in `copy.md`;
- the landing URL https://make.fun/.

X's Terms of Service, its Ads Policies and every sub-policy below were read live on 2026-11-08 MST (2026-11-09 UTC). The full text of each is saved in `pipeline/convert/predict-fun-kit/policy/`, with the verbatim clauses collected in `x-policy-digest.md`.

**Rule:** an ambiguous row counts as a fail.

**Changes made during review:**
- The brand name came out of the post text and the card title, because X auto-links "make.fun" as a web address.
- The search ad's adjectives became checkable facts.

## Verdict table

| # | Clause | Source | Verdict | Reason |
|---|---|---|---|---|
| 1 | ToS: “You represent and warrant that you have, or have obtained, all rights, licenses, consents, permissions, power and/or authority necessary to grant the rights granted herein for any Content…” and the Content “does not contain material subject to copyright or other proprietary rights, unless you have obtained the necessary permissions” | https://x.com/en/tos | PASS | Every element is make.fun's own: press-kit lockup used as supplied, make.fun's own status card captured from its live product, Inter and JetBrains Mono (SIL Open Font License). No third-party image, mark or text. |
| 2 | ToS: “Nothing in the Terms gives you a right to use the X name or Twitter name or any of the X or Twitter trademarks, logos…” | https://x.com/en/tos | PASS | No X or Twitter name, logo or UI in the image or copy. |
| 3 | Quality, Ad Consistency: “Ads, including the ad creative, ad copy, ad images, ad videos, and ad call-to-action (CTA) should be consistent with the brand or product being promoted.” | https://help.x.com/en/business-and-advertising/quality-policy | PASS | Image, post text, card title and landing URL all describe make.fun's bounty board. |
| 4 | Quality, Editorial: “Ads must use proper grammar and spelling.” · “Ads should avoid punctuation mistakes, excessive use of capitalization, or symbols” | https://help.x.com/en/business-and-advertising/quality-policy | PASS | Post text is three complete sentences in sentence case: “Each entry is a repo plus the AI transcripts that wrote it, graded in a sandbox the same way, twice. Entry is free, and places go by skill alone. Submit solutions, win bounties.” The only capitals are sentence starts and “AI”. No symbols. |
| 5 | Quality, Editorial: “Ads must not include hashtags or urls in the ad text.” · “Ads should not include more than one emoji.” | https://help.x.com/en/business-and-advertising/quality-policy | PASS | No hashtag, URL or emoji. The brand name, which X would auto-link as a domain, is kept out of the post text and the card title. The link lives only in the website card. |
| 6 | Quality, Media: “Ads should avoid images, video or animations that are gimmicky, excessively cropped, or indecipherable.” | https://help.x.com/en/business-and-advertising/quality-policy | PASS | One headline, one definition, two proof lines and one product card, all set large: the headline is about 22 px tall at feed width. The 1:1 file bleeds the magenta block off the bottom-right corner on purpose; no text is cropped. |
| 7 | Quality, Media: “Ads should not contain disruptive content resulting in unexpected user experiences, aggressive flashing/effects or loud noises.” | https://help.x.com/en/business-and-advertising/quality-policy | PASS | Static image, no sound. |
| 8 | Quality, Landing Pages: “should be directly relevant to what is being advertised” · “should be compliant with all ads policies” · “should not contain disruptive pop ups” | https://help.x.com/en/business-and-advertising/quality-policy | PASS for the creative; the landing page is gated by Precondition 2 | The landing page is make.fun's bounty board, which is directly relevant. Its USDC amounts and its trading and forecast bounties are what Precondition 2 clears. |
| 9 | Deceptive: “Use of clickbait tactics, where the primary purpose is to drive users to a landing page through exaggerated, sensationalized, inaccurate language or calls-to-action.” | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | PASS | Descriptive, not sensational. No “next-gen”, “best”, “#1” or urgency. CTA is X's “Learn more”. |
| 10 | Deceptive: “Use of misleading tactics or claims during the promotion of a product or service.” | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | PASS | Each claim matches make.fun's own pages (2026-11-08): repo plus transcript (/how-it-works “Send a public repo at one commit and the transcript of the session that built it”); “graded in a sandbox the same way, twice” (“The grader runs every entry the same way, twice, in a sandbox”); free to enter (“no purchase or payment is needed to enter or to win”); skill only (/guide/ai-agent-bounties “skill only, nothing by chance”). The status card is the product's real card, with no amount, place or date. |
| 11 | Deceptive: “Promotion of offers or deals that are not available or omitting vital information on pricing, payment terms, or expenses the customer will incur.” | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | PASS | No bounty is named, so nothing in the ad can expire. Entry is free, so there are no fees to omit. |
| 12 | Fraudulent Schemes: “Offering cash gifts.” · “Promoting financial scams such as: “get rich quick”…” | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | PASS | No cash, money, prize, reward, payout, earnings, crypto or amount anywhere. What you win is only “bounties”. |
| 13 | Impractical Outcomes: “Ads must not contain content that promises or suggests unjustified opportunities or results.” · “Promoting unrealistic claims, results within a specific period, or health or economic opportunities.” | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | PASS | No income claim, period or guarantee. Winning is tied to merit in the same image: “Places go by score, nothing by chance.” “Submit solutions, win bounties.” names the mechanism, not a promised result. |
| 14 | Circumventing Systems: “Ads must not engage in cloaking tactics… or modifications to URL content following submission” | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | PASS | One public landing URL with no redirect chain. Precondition 2 requires any dedicated page to stay as reviewed. |
| 15 | Non-existent Features: “Mimicking X-like features where the functionality does not exist.” · “Containing non-functional features or calls-to-action in the ad creative.” | https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content | PASS | No X-like UI and no button. The status card holds only status labels and check marks, nothing clickable-looking. The search-result format was not copied, so nothing imitates another platform's UI either. |
| 16 | Unacceptable: “Offensive, abusive, demeaning…” · “Content that promotes violence” · “Vulgar and profane content…” · “Shocking or distasteful content” · “Dangerous content…” | https://help.x.com/en/business-and-advertising/unacceptable-content | PASS | None. |
| 17 | Unacceptable, Sensitive Event: “Ads must not profit or exploit a sensitive event, topics, or controversial issues…” | https://help.x.com/en/business-and-advertising/unacceptable-content | PASS | No event or issue referenced. |
| 18 | Unacceptable, Unauthorized References: “Ads must not imply or suggest unauthorized connections to brands, products, services, or platforms without authorization.” | https://help.x.com/en/business-and-advertising/unacceptable-content | PASS | Only make.fun appears. No Predict.fun, BNB Chain, Google, Claude Code, Codex, Cursor or other mark. “AI agents” is generic. |
| 19 | Prohibited Content for Minors: “X prohibits knowingly marketing or advertising… to minors: … Gambling products and services” | https://help.x.com/en/business-and-advertising/prohibited-content-for-minors | PASS, with 18+ targeting (Precondition 4) | The creative has no gambling content. It is age-gated because the advertiser pays prizes in crypto. |
| 20 | Gambling: “Sites or services providing tips, odds, handicapping, sports picks, forecasts…” · “Games or apps played for money*” | https://help.x.com/en/business-and-advertising/gambling-content | PASS for the creative; advertiser gated by Preconditions 1, 2 and 4 | No odds, bet, pick, predict, forecast or market language, and the ad says “skill only”. The landing page's two forecast bounties are cleared by Precondition 2. The “played for money” reading of crypto-paid bounties is cleared by Preconditions 1 and 4. |
| 21 | Gambling, Canada: “Games are free to play but result in the payment of money or a prize of value.” “Prior authorization from X is required.” · India: “Ads promoting online money games are prohibited across India…” | https://help.x.com/en/business-and-advertising/gambling-content | PASS with Canada and India excluded (Precondition 4) | Free entry plus a prize of value matches the Canada wording, so Canada is excluded unless X authorizes it. India is excluded outright. |
| 22 | Financial: “cryptocurrency products and services” · “Currency exchange, trading, and related services” · “investment opportunities, and offers to increase wealth” | https://help.x.com/en/business-and-advertising/financial-services | PASS for the creative; advertiser gated by Precondition 1 | No USDC, Solana, crypto, wallet, trading, investing or money. The payout currency appears only on the landing page, which is covered by Precondition 1. |
| 23 | Financial, Blockchain Games: “games involving NFT or cryptocurrency tokens where such can be won or earned.” “Advertisers need to obtain a prior authorization from X by getting certified.” | https://help.x.com/en/business-and-advertising/financial-services | PASS for the creative; advertiser gated by Precondition 1 | The ad does not promote a token or a game. The advertiser still needs certification because its bounties pay a crypto token. |
| 24 | Political Content: ads that “reference a candidate, political party, elected or appointed government official, election, referendum…” | https://help.x.com/en/business-and-advertising/political-content | PASS | None. The source's politics never carried over: it was a text ad with no political content. |
| 25 | Illegal products and services: “X prohibits the advertising or promotion of products, services, or activities considered illegal in a given jurisdiction.” | https://help.x.com/en/business-and-advertising/illegal-products-and-services | PASS, gated by Precondition 5 | Free-entry skill competitions. Legal sign-off per targeted market is Precondition 5. |
| 26 | Guidelines for Promotions: “Before starting any contests or sweepstakes please ensure that they comply with all applicable laws and regulations.” | https://help.x.com/en/rules-and-policies/x-contest-rules | PASS, gated by Precondition 5 | Each bounty page publishes its rules. The ad asks for no reposts, follows or hashtags. |
| 27 | Trademark: “Using another’s trademark in a way that may mislead or confuse people about your affiliation may be a violation of our trademark policy.” | https://help.x.com/en/rules-and-policies/x-trademark-policy | PASS | No third-party mark. Nothing of Predict.fun's (name, logo, purple, wording) is reused. |
| 28 | Copyright: X acts on “unauthorized use of a copyrighted video or image uploaded through our media hosting services” | https://help.x.com/en/rules-and-policies/copyright-policy | PASS | Original layout. The only image is make.fun's own product UI. |
| 29 | Authenticity, Synthetic and Manipulated Media: “media depicting a real person that has been fabricated or simulated, especially through use of algorithms or broader artificial intelligence.” | https://help.x.com/en/rules-and-policies/authenticity | PASS | No person and no generated imagery. The product card is shown as it is. |
| 30 | Paid Partnerships: compensation “to a user, such as an influencer or content creator, to promote their product or service” | https://help.x.com/en/rules-and-policies/paid-partnerships-policy | PASS (runs as make.fun's own ad; Precondition 6) | First-party ad, with no creator and no endorsement. |
| 31 | Creative specs: “PNG and JPEG are recommended”, “File size: Max 5MB”, “1.91:1 - 2064 × 1080 pixels”, “1:1 – 1080 × 1080 pixels”; card title “70 characters… limiting the description to 50 characters should ensure that truncation won’t occur” | https://business.x.com/en/help/campaign-setup/creative-ad-specifications | PASS | creative.png is a 2064 × 1080 PNG of 236 KB. creative-1x1.png is a 1080 × 1080 PNG. The card title has 30 characters. The post has 177 characters (limit 280). |

## The user's brief rules

| Rule | Verdict | Evidence |
|---|---|---|
| What you win is only ever “bounties” | PASS | The only win wording is “Submit solutions, win bounties.” (post). A scan of the image text, post and card title found none of: cash, money, prize, reward, payout, paid, earn, USDC, crypto, Solana, wallet, profit. |
| No amount or number attached to winning | PASS | No “$” and no figure anywhere. The status card carries no amount. |
| Never say or imply the ad was made with AI | PASS | Nothing describes how the ad was made. “AI agents” and “AI transcripts” describe the product. |
| No income or get-rich claims, guarantees, gambling, betting or trading language | PASS | None. “Skill only”, “places go by skill alone” and “Places go by score” argue against chance. |
| No source-brand trademark, logo, people or footage | PASS | Only the text-ad structure carries over. No predict.fun name, globe favicon, blue search styling or wording. |

## Preconditions before upload

These are advertiser-level conditions. No change to the creative can clear them, so they must be cleared before any campaign goes live. Nothing in this folder may be uploaded, posted or scheduled until items 1–4 are cleared. Clauses were read live on 2026-11-08 MST (2026-11-09 UTC), and the landing page was read the same evening.

1. **Crypto payouts need X pre-authorization.**
   - What make.fun pays: bounties in USDC on Solana. Sources: the make.fun home title “make.fun: AI agent bounties paid in USDC on Solana”, /how-it-works (“Top-ranked entrants claim USDC on Solana to their own wallet”) and /guide/ai-agent-bounties.
   - X's Financial services policy covers “cryptocurrency products and services”.
   - Its Blockchain Games clause covers “games involving NFT or cryptocurrency tokens where such can be won or earned”: “Advertisers need to obtain a prior authorization from X by getting certified.” The US row reads “Blockchain games based on skill are permitted”.
   - X does not say whether a free-to-enter, skill-graded software competition paying a stablecoin is a blockchain game, so treat it as one.
   - Action: get certified at `https://ads.x.com/en/help/ads-pre-authorization` and get written clearance from the X account team.
2. **Make the landing page pass on its own, or use a dedicated one.**
   - Quality: “The landing page must link to a working page and should be compliant with all ads policies.”
   - As read on 2026-11-08, https://make.fun/ has these problems:
     - It says “AI agents build software for cash rewards.”, “Earn USDC by winning coding bounties with your AI agent” and “Make money with AI agents”, and it lists every bounty as “$NNN reward, paid in USDC”.
     - It lists two trading bounties (“Beat our trading bots on a Solana replay”, “Race a BTC trading bot live for 4 hours”). These fall under Financial: “Currency exchange, trading, and related services”.
     - It lists two forecast bounties (“Predict tomorrow's top 10 trending Roblox games”, “Predict the next 5 trading days' moves of 9 Nasdaq stocks”). These fall under Gambling: “forecasts”, and they also name third-party marks.
   - Action: while ads run, either remove these from the page the ads link to, point the ads at a dedicated page that holds no amounts and no trading or forecast bounties, or get the page approved under item 1. A dedicated page must stay unchanged after review.
   - Pop-ups: a fresh headless desktop visit at 2026-11-09 02:55 UTC showed no dialog. Check the mobile first visit before launch.
3. **Only live offers.**
   - This ad names no bounty, so nothing in it expires.
   - The post text and image make no time-bound claim.
4. **Targeting.**
   - Set an 18+ age gate.
   - Exclude Canada unless X pre-authorizes it (“Games are free to play but result in the payment of money or a prize of value… Prior authorization from X is required”).
   - Exclude India (“online money games are prohibited across India”, skill-based included).
   - Exclude Belgium, Greece, Qatar, Russia, Singapore, Slovenia and Ukraine (not available for crypto advertising), and any market where item 1's certification is not granted.
5. **Promotions law.** Legal should confirm that free-entry skill contests paying a stablecoin comply in every targeted market (Guidelines for Promotions: “ensure that they comply with all applicable laws and regulations”).
6. **Run it as make.fun's own ad.** If a creator posts it for pay, the Paid Partnerships policy and its disclosure apply.
7. **Account eligibility and ads review.** make.fun's X ads account must pass X's account eligibility check and the X Ads review.
