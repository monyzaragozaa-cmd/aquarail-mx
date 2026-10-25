# AquaRail MX Week 11: Synthetic Persona Evaluation

## Persona and Task Scenario

**Synthetic persona: Laura**

- Age: 48
- Home: Iztapalapa, Mexico City
- Technical familiarity: Limited
- Goal: Understand whether a reported leak in her neighborhood has been repaired and why water service has not returned to her home.

**Scenario:** Laura opens the AquaRail MX prototype and looks up the fictional ticket `FUGA-DEMO-103`. She sees that a repair was recorded, but the result is not yet verified. She wants to know what that status means for her and whether she needs to perform any technical check.

This persona and scenario are synthetic. They do not represent collected participant data.

## Screenshot Evidence Checklist

The repository was checked for ticket-specific before/after screenshots. No screenshots of `FUGA-DEMO-103` were found. The existing `public/images/aquarail-mx-mockup.png` is a general concept mockup, not a before or after screenshot of this ticket.

- [ ] Before screenshot: `before-fuga-demo-103.png` — placeholder only; not currently present in the repository.
- [ ] After screenshot: `after-fuga-demo-103.png` — placeholder only; not currently present in the repository.
- [ ] Capture both states with `FUGA-DEMO-103` selected and retain the same viewport dimensions for comparison.

## Initial UI Observations

**Evidence status:** A ticket-specific before screenshot is not available, so screenshot-based observations of the initial UI cannot be confirmed here. In the initial ticket view, the next-step text is “Verificar resultado de la reparación.” That phrase names an administrative or technical action but does not, by itself, tell a resident what the status means for them or whether they should do anything.

The requested point of investigation is whether Laura could interpret this wording as an instruction to personally verify the repair, or infer that the repair means water service has returned. These are hypotheses to check in a later role-play, not observed user reactions.

## Hypothesized Confusion

“Verificar resultado de la reparación” does not clearly explain what the resident should do. A resident may be unsure whether verification is their responsibility and whether a recorded repair means water service has resumed. The prototype's ticket data continues to show the household service state as unknown.

## Implemented Fix

For tickets with status `repaired`, the interface now places two plain-language explanations directly beneath “Siguiente paso”:

**¿Qué significa para ti?**  
La reparación ya fue registrada, pero todavía falta comprobar que funcionó. Esto no significa que el agua haya regresado a tu casa.

**¿Qué puedes hacer?**  
Si todavía no tienes agua, consulta los canales oficiales de atención de tu zona. No necesitas realizar ninguna verificación técnica.

The explanation is conditional on the existing `repaired` status. It does not change ticket evidence, mark a repair as verified, or imply that water service has returned.

## Post-Fix Visual Verification

The local interface was opened and the fictional example `FUGA-DEMO-103` was selected. The rendered page showed “Reparación registrada · sin verificar,” followed by both “¿Qué significa para ti?” and “¿Qué puedes hacer?” with the text above. This confirms the post-fix text is visible for this ticket in the current local interface.

This is a direct visual/render check, not a saved screenshot artifact. No before/after screenshots are currently included in the repository.

## Synthetic User Role-Play

**Status: SYNTHETIC ROLE-PLAY, NOT PARTICIPANT DATA.** The following first-person answers are a hypothetical simulation in Laura's voice based only on the interface inspected above. No real person was interviewed, and these responses must not be reported as user research findings.

1. **What does “Reparación registrada · sin verificar” mean?**

   **Laura (simulated):** “Que anotaron que hicieron la reparación, pero todavía no han comprobado si quedó bien.”

2. **Has the repair been confirmed as successful?**

   **Laura (simulated):** “No. Dice que todavía está sin verificar, así que no se sabe si funcionó.”

3. **Does this mean water service has returned?**

   **Laura (simulated):** “No necesariamente. Aquí dice que no significa que el agua ya haya regresado y que el estado del servicio en las casas es desconocido.”

4. **Who is responsible for the next step?**

   **Laura (simulated):** “Parece que sigue el equipo de verificación; no dice que yo tenga que revisar la reparación.”

5. **What would you do if you still had no water?**

   **Laura (simulated):** “Consultaría los canales oficiales de atención de mi zona. No intentaría hacer una revisión técnica.”

### Synthetic Comprehension Evaluation

- **Comprehension:** In this scripted simulation, Laura distinguishes a recorded repair from a confirmed successful outcome and does not assume that water service has returned. This is a prediction based on the explicit text, not a measured comprehension result.
- **Confusion:** “Verificar resultado de la reparación” remains administrative-sounding. The following explanation clarifies that the resident need not perform a technical check. The page labels the ticket neighborhood as “Tláhuac (zona ficticia),” while Laura's persona is from Iztapalapa; this mismatch could raise a question about whether the example applies to her area.
- **Navigation:** The status, next-step role, and resident guidance appear together in the report section, so the simulated participant can find the information without opening technical details. This is an inspection-based assessment, not observed navigation behavior.
- **Trust:** The simulation notice and fictional-record labels make the demo nature explicit. Since this is fictional data, the status cannot establish the real repair or water-service condition in Laura's neighborhood; she would need official channels for current local information.

**Actual participant responses:** Not collected. Leave this section as a clearly labeled synthetic role-play; do not substitute these simulated answers for future participant responses.

## Limitations

- No real participant feedback has been collected; Laura is a synthetic persona.
- A screenshot review, even when screenshots are available, is not a completed persona usability test.
- Ticket-specific before/after screenshots were not present in the repository at the time of this document's creation.
- The post-fix check confirms that the guidance renders for `FUGA-DEMO-103` in the local interface. It does not establish comprehension, usability, or a real-world service outcome.
- All ticket data and locations in the prototype are fictional; the interface does not verify municipal records or household water service.
