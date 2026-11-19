# Recursive and hybrid governance

Recursive governance describes policy changes that themselves require governed review. The useful distinction is immediate HARDEN versus delayed WEAKEN: protection can be strengthened quickly, while a weakening proposal enters a pending window where maturity, cancellation, expiry, and independent veto remain meaningful.

The public atlas documents the state machine and historical evidence without presenting a selector as a live policy authority. A browser warning, a customer policy receipt, and a smart-account execution receipt are different evidence classes and must not be merged.

See [Spending Limits](../../mechanisms/01-spending-limits.md), [Emergency Controls](../../mechanisms/04-emergency-controls.md), and [Recipient Rules](../../mechanisms/05-recipient-rules.md).

## Governance must govern its own updates

A policy relaxation is dangerous if signing an update can instantly nullify a previous safety bound. The recursive principle is that rule changes inherit their own security process. **HARDEN** strengthens a limit; **WEAKEN** loosens it and should remain non-effective while its delay/review window is pending, under the documented authority and test scope.

Example (illustrative): current maximum 5,000 units; request to increase to 50,000. The existing 5,000 rule remains binding until a verified maturity/revision transition; a pending weakening is not a new active limit just because UI displays it. The customer can inspect and cancel under the authorized process. The exact delay duration is policy/configuration-dependent; do not invent a universal number.

![Policy timeline](../../assets/diagrams/governance-timing.svg)
