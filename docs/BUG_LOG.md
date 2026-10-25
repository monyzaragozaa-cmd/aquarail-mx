# AquaRail MX Exploratory Bug Log

**Review date:** 2026-10-24  
**Scope:** Pre-deployment exploratory checks of the local AquaRail MX interface. No commits, pushes, or deployments were made.

## Outcome

No reproducible application bug was found in the requested scenarios. No application code was changed, and no bug was invented. This log records checks and observed outcomes rather than reporting a defect.

## Exploratory Checks

| Area | Reproduction / action | Expected behavior | Actual result |
|---|---|---|---|
| Empty ticket input | Clear the ticket field and submit with “Consultar”. | Show a safe Spanish validation error; do not display a ticket. | Passed: “Escribe un número de reporte.” |
| Invalid ticket input | Submit `<script>alert(1)</script>`. | Reject unsupported characters without interpreting input as markup. | Passed: safe validation message; no ticket selected. |
| Unknown ticket | Submit `FUGA-DEMO-999`. | Show a not-found message and keep the record unavailable. | Passed: “No encontramos ese reporte de demostración. Prueba FUGA-DEMO-101.” |
| Case and whitespace normalization | Submit `  fuga-demo-103  `. | Trim and normalize a valid fictional ID. | Passed: selected `FUGA-DEMO-103`, status “Reparación registrada · sin verificar”. |
| Form keyboard submission | Enter `FUGA-DEMO-104` and press Enter in the input. | Submit the form and show the matching ticket. | Passed: “Resultado de reparación verificado”. |
| Switching tickets/statuses | Select examples `101`, `102`, `104`, and `103` in sequence. | Update displayed status/history and only show repair-pending guidance for the repaired ticket. | Passed: statuses changed to suspected, confirmed, verified, repaired respectively. Guidance count was zero for `101`, `102`, and `104`; one for `103`. |
| Repaired vs. outcome verified | Compare `FUGA-DEMO-103` and `FUGA-DEMO-104`. | Keep “Reparación registrada · sin verificar” distinct from “Resultado de reparación verificado”. | Passed: separate labels and corresponding fictional human-event histories were displayed. |
| Mobile layout at 390 px | Set viewport to 390 × 844 and inspect document/body widths. | No horizontal overflow. | Passed: viewport, document, and body widths all 390 px. |
| Mobile layout at 320 px | Set viewport to 320 × 740 and inspect document/body, search, guidance and paragraph dimensions. | No horizontal overflow or clipped guidance text. | Passed: document/body widths 320 px; search and guidance content stayed within their 258 px containers. |
| Keyboard navigation | Focus ticket input and press Tab twice; focus the technical-details toggle and press Enter. | Move through controls in order; toggle remains keyboard operable and updates expanded state. | Passed: focus moved to “Consultar”, then `FUGA-DEMO-101`; Enter changed `aria-expanded` from `true` to `false`. |
| IoT/ML separation | Open technical details for ticket `103`, then switch to ticket `104` while details are expanded. | Label readings/score as simulated or synthetic; do not create or alter human status/events or operational decisions. | Passed: displayed readings changed with the ticket; copy says an anomaly does not physically confirm a leak, ML is illustrative for human review, and it does not order repairs. Human event histories remained separately labeled. |

## Code and Test Review

- `lookupTicket` validates the input as a bounded allowlist of letters, numbers, and hyphens, trims whitespace, and normalizes case.
- `verifyTicket` requires a fictional record, an appropriate fictional human event for its status, an unknown water-service state, and a valid timestamp. It does not consult sensor or ML fields.
- Existing tests cover the four fictional status stages, malformed/unknown inputs, sensor/ML non-confirmation, and synthetic IoT/geodata/model constraints.
- The UI explicitly labels sensor and model outputs as simulated/synthetic and says they do not confirm repairs or order repairs.

## Fixes

None. No reproducible application bug was found, so no code fix or bug-specific retest was necessary. The requested project test, typecheck, and production build are run after this log update; their actual results are recorded below.

## Post-Log Verification

- `npm test`: passed; 5 tests, 0 failures.
- `npm run typecheck`: passed; `tsc --noEmit` reported no errors.
- `npm run build`: passed; Next.js compiled, checked types, generated 4 static pages, and prerendered `/`.
