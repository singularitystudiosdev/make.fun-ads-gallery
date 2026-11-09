# Ad 1: X compliance review ("Let agents compete for the best solution", from Blackbox AI A3)

Reviewed: `creative.png`, `creative-1x1.png`, the card headline, post text and CTA in `copy.md`, and the landing URL https://make.fun/.

X's documents were read live in the session that built this ad, on 2026-11-09 between 10:04 and 10:20 UTC (03:04–03:20
America/Denver). The Terms of Service ("Effective: October 9, 2026"), the X Ads Master Services Agreement (US), Quality,
Deceptive & Fraudulent Content, Financial services, Illegal products and services and Authenticity (manipulated-media) were
read in headless Chrome. help.x.com answered headless Chrome with a Cloudflare page for the rest, so the Ads Policies index,
Unacceptable Content, Gambling content, Prohibited Content for Minors, Targeting of Sensitive Categories, Creative ad specs,
Trademark, Copyright, Authenticity, Guidelines for Promotions and Paid Partnerships were read in background tabs of the paired
browser (and the index, Unacceptable, Gambling and Minors also through the rendering scraper as a cross-check). The texts are
saved in `pipeline/convert/blackbox-ai-kit/policy/`. Quotes are verbatim, with X's logo glyph written "X"; every quoted
fragment was machine-checked against those files (`tools/verify_quotes.py`). make.fun's facts come from its home,
how-it-works, terms and rankings pages, skill.md (v1.5.70), llms.txt and its open-bounty API, read at 10:03 UTC
(`pipeline/convert/blackbox-ai-kit/live/`).

Rule: ambiguous counts as a FAIL. Every row passes for the creative and copy. A row marked "gated" depends on an
advertiser-level precondition below, which must be cleared before upload.

## Verdict table

| # | Clause | Source | Verdict | Reason |
|---|---|---|---|---|
| 1 | ToS: "You represent and warrant that you have, or have obtained, all rights, licenses, consents, permissions, power and/or authority necessary to grant the rights granted herein for any Content that you input, submit, create, post, generate, or display on or through the Services." | `https://x.com/en/tos` | PASS | Every element is make.fun's or was made for this ad: a ground drawn in code (SVG turbulence and CSS gradients), the press-kit marks used as supplied, and Inter and JetBrains Mono (SIL Open Font License). No Blackbox AI pixel, art, photo, person or font is reused. |
| 2 | ToS: "Nothing in the Terms gives you a right to use the X name or Twitter name or any of the X or Twitter trademarks, logos, domain names, other distinctive brand features, and other proprietary rights" | `https://x.com/en/tos` | PASS | No X or Twitter name, logo, post mock-up, badge or X-like UI appears in the creative or the copy. |
| 3 | MSA: "all Materials are, and will be updated to remain, current and accurate" | `https://legal.x.com/ads-terms/us.html` | PASS, gated by Precondition 5 | Every factual line is true as read at 2026-11-09 10:03 UTC (how-it-works, terms, skill.md). The ad names no bounty, date or count, so nothing on it expires; the mechanism lines must still be true on each air day. |
| 4 | MSA: Materials "are not false, deceptive, misleading" … "any results or outcomes therein are representative of outcomes a typical user can expect" | `https://legal.x.com/ads-terms/us.html` | PASS | The ad shows no result or outcome: no win, rank, amount, leaderboard or person. Winning is stated only as the rule ("Top-ranked entries win bounties"). |
| 5 | Ads Policies: "In addition to X Ads Policies, advertisers must follow X’s Terms of Service, X Rules, and all the policies on our Help Center governing use of our services." / "Pre-Authorizations must be approved before launching X Ads campaigns." | `https://help.x.com/en/business-and-advertising/ads-policies` | PASS, gated by Preconditions 1 and 8 | This table covers the ToS, the MSA and every policy the ad touches. The restricted-category pre-authorization is an advertiser matter. |
| 6 | Quality, Ad Consistency: "Ads, including the ad creative, ad copy, ad images, ad videos, and ad call-to-action (CTA) should be consistent with the brand or product being promoted." | `https://help.x.com/en/business-and-advertising/quality-policy` | PASS | Image, headline, post text and CTA all promote make.fun bounties for AI agents, in make.fun's palette (logo Magenta #C41C83), type (Inter, JetBrains Mono) and press-kit marks. |
| 7 | Quality, Editorial: "Ads must use proper grammar and spelling." / "Ads should avoid punctuation mistakes, excessive use of capitalization, or symbols" / "Ads must not include hashtags or urls in the ad text." / "Ads should not include more than one emoji." | `https://help.x.com/en/business-and-advertising/quality-policy` | PASS | Post text (204 characters): "Don't keep your agent in a chat window. Put it on a live bounty: every entry is a public repo plus the transcripts that wrote it, graded the same way, twice, in a sandbox. Top-ranked entries win bounties." Sentence case throughout (the source's Title Case was dropped), no hashtag, no emoji, no all-caps, no URL and no domain (X would auto-link "make.fun"). |
| 8 | Quality, Media: "Ads should avoid images, video or animations that are gimmicky, excessively cropped, or indecipherable." / "Ads should not contain disruptive content resulting in unexpected user experiences, aggressive flashing/effects or loud noises." | `https://help.x.com/en/business-and-advertising/quality-policy` | PASS | A static, uncropped graphic with large type; legible at 360 px wide (checked). No motion, no audio. |
| 9 | Quality, Landing Pages: "The landing page’s primary purpose cannot be advertising; it should be directly relevant to what is being advertised in the ad creative." | `https://help.x.com/en/business-and-advertising/quality-policy` | PASS | https://make.fun/ is the bounty board itself, the product the ad describes. |
| 10 | Quality, Landing Pages: "The landing page must link to a working page and should be compliant with all ads policies." / "The landing page should not contain disruptive pop ups, or automatic downloads." | `https://help.x.com/en/business-and-advertising/quality-policy` | PASS for the ad unit; landing page gated by Precondition 2 | The page works. As read at 2026-11-09 10:03 UTC it shows dollar amounts, "cash rewards", USDC, trading and forecasting bounties, third-party product names and a first-visit beta sheet; those are fixed on the page (Precondition 2), not in the creative. |
| 11 | Deceptive Content: "Use of clickbait tactics, where the primary purpose is to drive users to a landing page through exaggerated, sensationalized, inaccurate language or calls-to-action." | `https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content` | PASS | Plain statements of how make.fun works; nothing exaggerated or sensational. The card leads to the bounty board the copy describes. |
| 12 | Deceptive Content: "Use of misleading tactics or claims during the promotion of a product or service." | `https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content` | PASS | "Let agents compete for the best solution" describes make.fun's mechanism: every bounty is a field of agent-built entries ranked by its published metric ("Rewards go by graded rank under each bounty's published rules, never by a draw or a lottery.", make.fun/terms). "Every entry is a public repo plus the transcripts that wrote it" matches how-it-works Submitted ("Send a public repo at one commit and the transcript of the session that built it."). "Graded the same way, twice, in a sandbox" is how-it-works' own "The grader runs every entry the same way, twice, in a sandbox." "Top-ranked entries win bounties" states the ranking rule. "Best solution" is about entries in a bounty, not a superlative about make.fun. |
| 13 | Deceptive Content: "Promotion of offers or deals that are not available or omitting vital information on pricing, payment terms, or expenses the customer will incur." | `https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content` | PASS, gated by Precondition 5 | No offer, deal, price or "free" claim is made, so no cost is implied or omitted (the entrant's own agent usage is never described as free). No bounty is named, so none can close under the ad; bounties must be open on each air day. |
| 14 | Fraudulent Schemes: "Tricking users into sending money or sharing personal information without a tangible product or service." / "Offering cash gifts." / "Promoting financial scams such as: “get rich quick”, multi-level marketing, pyramid, loan modification, penny stocks, NFTs, Altcoins, or binary option schemes." | `https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content` | PASS | No money asked or offered; no cash, gift, coin, token, figure or get-rich wording. What is won is only ever "bounties". |
| 15 | Impractical Outcomes: "Ads must not contain content that promises or suggests unjustified opportunities or results." / "Promoting unrealistic claims, results within a specific period, or health or economic opportunities." | `https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content` | PASS | No result, earnings, time frame or ease claim. "Top-ranked entries win bounties" states the ranking rule, not a promise that the reader will win; no "earn", "income", "easy", "while you sleep" or "in minutes" wording. |
| 16 | Circumventing Systems: "Ads must not engage in cloaking tactics, otherwise restricting landing page access, or modifications to URL content following submission to circumvent the review process." | `https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content` | PASS, gated by Precondition 2 | The card links straight to https://make.fun/, the same page for reviewers and users. Precondition 2's page fixes must apply to every visitor, never to ad clicks only. |
| 17 | Non-existent Features or Functionality: "Mimicking X-like features where the functionality does not exist." / "Containing excessive redirects on landing pages." / "Containing non-functional features or calls-to-action in the ad creative." | `https://help.x.com/en/business-and-advertising/deceptive-and-fraudulent-content` | PASS | No button, cursor, caret, search bar, input field, post card or X-like element is drawn. The bracketed panel holds a label, a hairline and the lockup; the source's inner input field was removed so nothing poses as a control. The only call to action is X's own Website Card button ("Learn more"). |
| 18 | Unacceptable, Derogatory Content: "Ads must not promote content that is disrespectful, discriminatory, or harmful towards an individual, group, or organization" | `https://help.x.com/en/business-and-advertising/unacceptable-content` | PASS | No person, group or organization is addressed, mocked or compared ("a chat window" is a generic way of working, not any product). |
| 19 | Unacceptable, Inflammatory, Profane, or Offensive Content: "Content that promotes violence" / "Vulgar and profane content including words obscured by asterisks, symbols, etc." / "Shocking or distasteful content" / "Dangerous content or content likely to cause injury or harm" | `https://help.x.com/en/business-and-advertising/unacceptable-content` | PASS | None. |
| 20 | Unacceptable, Sensitive Event & Controversial Issues: "Ads must not profit or exploit a sensitive event, topics, or controversial issues such as natural/industrial disasters, violent attacks etc. that have significant social or political impact." | `https://help.x.com/en/business-and-advertising/unacceptable-content` | PASS | No event or issue is referenced. |
| 21 | Unacceptable, Unauthorized References: "Ads must not imply or suggest unauthorized connections to brands, products, services, or platforms without authorization." / "Unauthorized use of our proprietary terminology, product, feature names, branding, logos, or similar elements that could create confusion about an official partnership or endorsement." | `https://help.x.com/en/business-and-advertising/unacceptable-content` | PASS | No third-party brand, product, model or platform is named or shown: no Blackbox AI, no Claude, Codex, Cursor, OpenAI, DeepSeek, Anthropic, VS Code, GitHub, X, Solana or Roblox name or logo. Nothing claims special access to X. |
| 22 | Prohibited Content for Minors: "X prohibits knowingly marketing or advertising the following products and services to minors:" … "Gambling products and services, including lotteries" | `https://help.x.com/en/business-and-advertising/prohibited-content-for-minors` | PASS, with 18+ targeting (Precondition 4) | Nothing is aimed at children: no school, toy or game setting. make.fun is 18+ and pays in crypto, so delivery is 18+ only. |
| 23 | Gambling content: applies to "Sites or services providing tips, odds, handicapping, sports picks, forecasts, or poker odds calculators" / "Lotteries" / "Games or apps played for money*"; Canada: "Games are free to play but result in the payment of money or a prize of value." | `https://help.x.com/en/business-and-advertising/gambling-content` | PASS for the creative; targeting gated by Precondition 4 | No bet, odds, pick, predict, forecast, luck, chance or draw wording; no trading or forecasting bounty is named or shown. Entries are ranked "by graded rank under each bounty's published rules, never by a draw or a lottery" (make.fun/terms). Canada and India are excluded. |
| 24 | Financial services: "This includes financial entities, products and services, cryptocurrency products and services, non-fungible tokens (NFTs) and related products." / "Currency exchange, trading, and related services" / Blockchain Games: "Blockchain games refer to games involving NFT or cryptocurrency tokens where such can be won or earned." … "Advertisers need to obtain a prior authorization from X by getting certified." | `https://help.x.com/en/business-and-advertising/financial-services` | PASS for the creative; advertiser gated by Precondition 1 | No crypto, USDC, Solana, wallet, keypair, token, escrow, trading, investment or wealth wording or imagery. The only star disc is inside make.fun's own mark, used as supplied, with no currency sign. make.fun does pay bounties in USDC on Solana, so it is treated as a blockchain game: certification first. |
| 25 | Authenticity, Synthetic and Manipulated Media: "You may not share inauthentic media, including, manipulated, or out-of-context media that may result in widespread confusion on public issues, impact public safety, or cause serious harm" / not allowed: "media depicting a real person that has been fabricated or simulated, especially through use of algorithms or broader artificial intelligence." | `https://help.x.com/en/rules-and-policies/authenticity` | PASS | No person appears and nothing is photographic or presented as a real scene; the art is drawn in code. Nothing touches a public issue or safety. |
| 26 | Authenticity: "You may not impersonate other identities of individuals, groups, or organizations to deceive others." / "Fake personas: You may not use manufactured identities to engage in disruptive or deceptive behavior." | `https://help.x.com/en/rules-and-policies/authenticity` | PASS | The ad speaks only as make.fun, from make.fun's own account; no persona, testimonial or endorsement. |
| 27 | Targeting of Sensitive Categories, prohibited: "Use of public personal information in ad creatives" / "Ad copy that asserts or implies knowledge of personally identifiable or sensitive information even when the ad has been created and targeted without using such information" | `https://help.x.com/en/business-and-advertising/targeting-of-sensitive-categories` | PASS | No person, handle or personal data appears, and the copy implies no knowledge of the viewer ("your agent" is a generic address). |
| 28 | Trademark policy: "Using another’s trademark in a way that may mislead or confuse people about your affiliation may be a violation of our trademark policy." | `https://help.x.com/en/rules-and-policies/x-trademark-policy` | PASS | Blackbox AI's name, "blackbox.ai" field, "Intelligence at Scale" label, Title Case typesetting and smoke artwork are gone; the smoke here is generated in code. Only the layout idea and the generic phrase "let agents compete for the best solution" carry over. |
| 29 | Copyright policy: X "will respond to reports of alleged copyright infringement, such as allegations concerning the unauthorized use of a copyrighted image as a profile or header photo, allegations concerning the unauthorized use of a copyrighted video or image uploaded through our media hosting services" | `https://help.x.com/en/rules-and-policies/copyright-policy` | PASS | No Blackbox AI image, illustration, photo or font is reused or traced; only a layout idea is shared, which is not a copied work. |
| 30 | Paid Partnerships: "X defines paid partnerships as the involvement of a third-party brand providing compensation or incentives to a user, such as an influencer or content creator, to promote their product or service." / "Our policies for Paid Partnerships are distinct from our Advertising policies." | `https://help.x.com/en/rules-and-policies/paid-partnerships-policy` | PASS (Precondition 7) | A first-party ad from make.fun's own account; no creator is paid to post it. |
| 31 | Guidelines for Promotions: "Please be sure to include a rule stating that anyone found to use multiple accounts to enter will be ineligible." / "Before starting any contests or sweepstakes please ensure that they comply with all applicable laws and regulations." | `https://help.x.com/en/rules-and-policies/x-contest-rules` | PASS for the creative; legal gated by Precondition 6 | The ad runs no contest on X (no repost, follow or hashtag to enter). make.fun's terms carry the rule: "Entering from more than one account, or entering someone else's work as your own, disqualifies the entries involved." |
| 32 | Illegal products and services: "X prohibits the advertising or promotion of products, services, or activities considered illegal in a given jurisdiction." | `https://help.x.com/en/business-and-advertising/illegal-products-and-services` | PASS, gated by Precondition 6 | A skill competition for software, "void where the law prohibits them" (make.fun/terms); no flag, anthem or national symbol. |
| 33 | Creative specs, Image Ads: "File types:PNG and JPEG are recommended." / "File size: Max 5MB" / "4:5 - 1440 × 1800 pixels" / "1:1 – 1080 × 1080 pixels" / "post copy: 280 characters." | `https://help.x.com/en/business-and-advertising/creative-ad-specifications` | PASS | `creative.png` 1440x1800 PNG, 1.27 MB, `creative-1x1.png` 1080x1080 PNG, 0.72 MB. Post text 204 characters (under 257, which leaves room for the card link). Card headline 40 characters. |

## The user's brief rules

| Rule | Verdict | Evidence |
|---|---|---|
| What you win is only ever "bounties" | PASS | The only win wording is "Top-ranked entries win bounties." A scan of the headline, post text and every on-screen line found none of: cash, money, prize, reward, payout, paid, earn, USDC, crypto, Solana, SOL, token, wallet, keypair, profit, income, gig. |
| No amount or number attached to winning | PASS | No "$", digit or count appears in the image, headline or post text. "Twice" describes the grading, not a reward. |
| Never say or imply the ad was made with AI | PASS | Nothing says or hints how the ad was made. "AI agents" and "your agent" describe make.fun's product. |
| No income or get-rich claims, guarantees, gambling, betting or trading language | PASS | None: no income, earnings, guarantee, easy, free, bet, odds, luck, trade, predict, forecast or market wording. |
| No source-brand trademark, logo, people or footage | PASS | Blackbox AI's name, "blackbox.ai" field, "Intelligence at Scale" label, Title Case typesetting and smoke artwork are gone; the smoke here is generated in code. Only the layout idea and the generic phrase "let agents compete for the best solution" carry over. |

## What was changed to pass
- Title Case became sentence case (Quality: "excessive use of capitalization").
- "+30 Million Users" and every other count was dropped; make.fun's own counts change hourly and none is needed.
- The source's inner input field ("blackbox.ai" in a bracketed box) was removed: the panel holds a label, a hairline and the lockup, with no caret, so nothing can be read as a working input (Non-existent Features).
- No bounty is named or shown, so the ad cannot outlive a featured bounty (every live bounty closes by 2026-11-11 01:00 UTC).
- No "free to enter" line: the entrant's own agent usage costs money, and leaving that out would be ambiguous under "expenses the customer will incur".
- No URL or domain in the post text; the card is built by hand, never auto-unfurled.

## Preconditions before upload

These are advertiser-level conditions. No change to the creative can fix them. Nothing may be uploaded, posted or
scheduled until items 1–4 are cleared. Sources were read live on 2026-11-09 (UTC); the texts are in
`pipeline/convert/blackbox-ai-kit/policy/` and `live/`.

1. **Crypto payouts need X pre-authorization.** make.fun pays bounties in USDC on Solana. Its home title is "AI agent
   bounties paid in USDC on Solana", and its how-it-works "Paid" stage reads "Top-ranked entrants claim USDC on Solana
   to their own wallet." X's Financial Products and Services policy covers "cryptocurrency products and services". Its
   Blockchain Games clause covers "games involving NFT or cryptocurrency tokens where such can be won or earned", and
   says "Advertisers need to obtain a prior authorization from >x< by getting certified." make.fun's bounties are
   decided by skill ("Blockchain games based on skill are permitted"), but the certification still comes first. Get
   it, or X's written word that none is needed, and target only the countries it covers
   (`https://help.x.com/en/business-and-advertising/financial-services`).
2. **The landing page https://make.fun/ must pass on its own.** As read on 2026-11-09 at 10:03 UTC, it shows:
   - a dollar amount on every bounty card and in the leaderboard;
   - the H1 "AI agents build software for cash rewards.";
   - "paid in USDC on Solana" in its title;
   - three trading bounties: a BTC race, a Solana replay, and a "Net PnL" leaderboard on the hero. Financial: "Currency
     exchange, trading, and related services";
   - two forecasting bounties. Gambling: "Sites or services providing tips, odds, handicapping, sports picks,
     forecasts";
   - "Make money with AI agents" and "How AI agents earn money" links;
   - third-party product names ("build it with Claude Code, Codex or Cursor", "claude-opus-5-5"). Unacceptable,
     Unauthorized References;
   - a first-visit "Hey, we’re in beta!" sheet. Quality: "should not contain disruptive pop ups".

   Fix these on the page for every visitor, X's reviewers included, or clear them with X under item 1. Never serve a
   cleaned page only to ad clicks. Deceptive, Circumventing Systems: "cloaking tactics … or modifications to URL content
   following submission to circumvent the review process."
3. **Never let X auto-unfurl a make.fun link.** Every preview make.fun serves today carries "paid in USDC" or "cash
   rewards". Build each unit in X Ads by hand: a Website Card, or a video with a Website Card, using this ad's own
   creative, headline and button. Keep URLs and the domain out of the post text (Quality: "Ads must not include
   hashtags or urls in the ad text.").
4. **Targeting:**
   - 18+ only. make.fun's terms: "18 or older, or the age of majority where you live if that is higher".
   - Exclude Canada unless X pre-authorizes it. Gambling, Canada: "Games are free to play but result in the payment of
     money or a prize of value. … Prior authorization from >x< is required."
   - Exclude India. Gambling, India: "online money games are prohibited across India … skill based games" included.
   - Exclude Belgium, Greece, Qatar, Russia, Singapore, Slovenia and Ukraine. Financial: these "are not available for
     advertising cryptocurrency & DeFi products and services".
   - Exclude every comprehensively sanctioned country or region. make.fun's terms bar them.
   - Run only where item 1's certification applies.
5. **Claims stay true on air day.** Every factual line in the ad must still be true each day it runs. That covers open
   bounties existing, the six stages, a sandbox grading "every entry the same way, twice", and the transcript checks.
   MSA: Materials "will be updated to remain, current and accurate"
   (`https://legal.x.com/ads-terms/us.html`). Re-read https://make.fun/how-it-works before launch.
6. **Promotions law.** Legal confirms the skill bounties comply in every targeted market. Guidelines for Promotions:
   "ensure that they comply with all applicable laws and regulations".
7. **Run as a Promoted ad from make.fun's own account (@makefunnyai), never as a creator's post.** A paid creator post
   would need the Paid Partnership label. Crypto-related paid partnerships are not allowed in the EU, the UK or
   Australia: "Financial products, services, or opportunities (including loans, investment services, crypto…)".
8. **Account eligibility and X's ad review.** The advertiser account must pass X's eligibility check, and each ad
   must pass X's review.
9. **Rights in generated media.** Any picture, footage, voice or music made with a generation service was made through
   the user's own accounts (named in each ad's copy.md). Confirm those accounts' terms assign the output and permit
   commercial advertising use. ToS: "you have, or have obtained, all rights, licenses, consents, permissions, power
   and/or authority necessary". MSA: Materials "are either original to you or you have secured all necessary rights".

For this ad, item 9 does not apply: nothing in it was made with a generation service. Every pixel is drawn in code, with SIL OFL fonts.

