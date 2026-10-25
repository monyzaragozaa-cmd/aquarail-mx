# AquaRail MX — Decisions Log

## Planning decision — 2026-10-24
- Keep LOSS VISIBILITY and USER-facing ticket viewer as main slice.
- Add simulated sensing, executable synthetic ML, and fictional approximate geodata as supporting demonstrations.
- Separate experimental signals from fictional human-reviewed repair records.
- Proposed five security controls require checking against the exact course SECURITY FLOOR rubric.
- Status at this initial planning checkpoint: planning only; implementation and review outcomes are recorded in the later entries below.
- Next action at that checkpoint: user review of the updated PACKET and coding-agent prompt before build.

## Phase 1 preparation — 2026-10-24
- Decision: Use the professor's five user-supplied SECURITY FLOOR controls; Google Auth and RLS are not applicable without personal-data storage.
- Decision: Implement a no-database, no-auth, no-API-key demo with four invented tickets, local sensor examples, fixed-seed synthetic ML and fictional approximate coordinates.
- Initially unverified: Browser behavior and Next.js production build; both were subsequently checked in the Week 11 pre-deployment review below.
- No GitHub push or Vercel deployment is claimed.

## Week 11 USER improvement and pre-deployment review — 2026-10-24
- Completed: Added resident-facing Spanish guidance under “Siguiente paso” for the `repaired` state, distinguishing a recorded repair from a verified outcome and explicitly avoiding a promise that household water has returned.
- Completed: Inspected the local `FUGA-DEMO-103` interface and recorded a clearly labeled synthetic role-play in `PERSONA_TEST.md`; no real participant feedback is claimed.
- Limitation: Persona Laura is from Iztapalapa, while the fictional ticket `FUGA-DEMO-103` is labeled Tláhuac. The mismatch is documented as a possible source of confusion/trust concern, not as observed feedback.
- Limitation: No ticket-specific before/after screenshots or real usability-test results are present. The local render was visually inspected; that is not a completed persona test.
- Verification: `npm test` passed (5 tests); `npm run typecheck` passed; `npm run build` completed successfully and generated the static `/` route.
- Review: Tests assert four fictional tickets across the four evidence stages, require fictional human events and unknown water-service state, reject malformed/unknown ticket IDs, and ensure sensor/ML values cannot manufacture repair verification. UI copy explicitly says sensor/ML do not confirm repairs and the model does not order repairs. No reproduced application bug was found; no bug fix beyond the previously completed UI guidance was made during this review.
- SECURITY FLOOR review: No `.env*` files or credential/persistence indicators were found in application source or data. Google Auth and RLS are conditional and not applicable because the prototype has no database and stores no personal data. Ticket input validation is implemented and covered by tests. All demo tickets, readings, model inputs and approximate geodata remain fictional. This was a workspace review, not a secret scan of remote Git history.
- Deployment: Pending. No commit, push, or Vercel deployment was performed. Proceed only after the user reviews this pre-deployment report and explicitly authorizes deployment.
