# AquaRail MX — Precise Coding Agent Implementation Prompt

You are working in VS Code on a **new, free Next.js/TypeScript** prototype named AquaRail MX for Business Bending Week 11. **First read `docs/PACKET.md` completely** and treat its DRAGON STACK ADDENDUM sections 19–31 as the controlling specification if older sections conflict. Read `docs/DECISIONS.md` and the image at `public/images/aquarail-mx-mockup.png`. The image is conceptual; reproduce only a usable Spanish mobile interface, not the full infographic.

## Boundaries
- Role: USER. Main experience: a resident looks up a **fictional** leak ticket and understands four distinct statuses, human verification, timestamps, next action, generic responsible role, and that repair does not guarantee restored water service.
- Use three real implementation capabilities: (1) simulated sensor readings, (2) an executable locally fitted ML model on fixed-seed synthetic examples, and (3) invented approximate neighborhood geodata.
- Do not use paid APIs, external maps requiring keys, real household addresses, municipal integrations, dispatch, automatic prioritization/rationing, login, personal profiles, or invented official records.
- Never use IoT or ML to set a repair status; status derives solely from explicitly fictional human-event records. ML estimates are advisory demonstrations for human review, **not** queue rankings or municipal predictions. Community vulnerability may be shown as neighborhood-level illustrative context for a human reviewer, not a household attribute or automated allocation feature.
- Every detail page displays **DATOS SIMULADOS — NO ES INFORMACIÓN OFICIAL** and **Reparación no significa que el servicio de agua ya se restableció**.
- Follow the five official SECURITY FLOOR requirements in PACKET §24. Supabase Google Auth and RLS are conditional and not applicable because no personal data is stored.

## Execution sequence — stop at each gate and report evidence
1. Inspect the repository and existing files before changing anything. Confirm no existing code is overwritten. Create a Next.js TypeScript project only if needed. Show planned file tree.
2. Build JSON/TypeScript data contracts for four demo tickets `FUGA-DEMO-101` through `104`, fictional dated human-event histories, 3+ simulated pressure/flow readings per ticket, and invented approximate neighborhood coordinates. Distinguish evidence source types and keep `waterServiceState` separate and `unknown` by default. Validate schema and timestamps.
3. Implement a real repeatable ML fitting step in Node with >=40 seeded synthetic training rows and >=10 synthetic holdout rows; use a small free JS regression library or documented actual regression fitting code. Save model coefficients/version, run inference on synthetic operational features, evaluate synthetic MAE, and label all estimates experimental. Do not use real demographics, personal data, or household locations as features. No hard-coded ML score lookup as a substitute for fitting.
4. Build a responsive, accessible Spanish ticket search and status viewer; include current status, evidence badge, timestamp, next action, generic responsible role, timeline, separate water-service warning, and helpful invalid-ID state. Add optional collapsible sections for sensor/ML context and approximate fictional map. Provide a copy/print-friendly summary. No external network required for demo data.
5. Add clearly labeled **local-only sandbox** correction demonstration with before/after audit history and reset. It must not look like a municipal edit tool; do not expose privileged official operations.
6. Run schema, ticket lookup, evidence-boundary, ML-fit, malformed-input, accessibility, build and browser smoke tests. Find and fix **at least one actual reproducible bug**, preserve failing and passing evidence, and write a regression test. Never invent results.
7. Capture actual prototype screenshots and conduct a clearly labeled **synthetic** Iztapalapa USER persona walkthrough. Log confusion verbatim, implement at least one improvement and retest. Never invent screenshots, feedback or results before the test.
8. Plan **five meaningful commits** matching PACKET §25. Create **two Vercel deployments** at the gates in PACKET §26 only when those steps are reached, recording actual URLs and smoke tests. If blocked by authentication or service limits, stop and report the blocker; never claim success.
9. At each Session Close, update `docs/DECISIONS.md`, record a concrete next action, run applicable tests, commit and push, and verify the remote. Do not assume a push worked.

## Suggested files (adjust only with explanation)
- `docs/PACKET.md` (already approved planning source)
- `docs/DECISIONS.md`, `docs/NEXT_ACTION.md`, `docs/TEST_LOG.md`, `docs/BUG_LOG.md`, `docs/PERSONA_TEST.md`, `docs/DEPLOYMENTS.md`
- `public/images/aquarail-mx-mockup.png` (retain)
- `data/tickets.json`, `data/sensor-readings.json`, `data/neighborhoods.json`, `data/ml-training-synthetic.json` (or generated deterministically)
- `scripts/train-model.ts` or `.mjs`, `data/model-metadata.json`
- `src/app/page.tsx`, `src/app/globals.css`, `src/app/layout.tsx`
- `src/components/TicketSearch.tsx`, `TicketStatus.tsx`, `EventTimeline.tsx`, `SimulationDetails.tsx`, `FictionalLocation.tsx`
- `src/lib/types.ts`, `ticket-lookup.ts`, `status-rules.ts`, `ml-inference.ts`, `demo-corrections.ts`
- `tests/*.test.ts` and optional browser tests/screenshots
- `package.json`, lockfile, `.gitignore`, `README.md`

## Acceptance and reporting
Implement every acceptance criterion A1–A15 in PACKET §23. After each phase report: files changed, commands actually executed, test results, unresolved risks, and **one next action**. Do not mark any checklist complete without evidence. Preserve existing team Blueprint decisions and keep USER experience primary. **Do not start coding until the user explicitly approves the Packet and instructs you to build.**
