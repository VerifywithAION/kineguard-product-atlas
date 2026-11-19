# App Approvals

> **Public evidence class: UI / READ-ONLY.** A visible control or illustrative UI cannot certify an operating protection mechanism.

## Mechanism and customer meaning

Inspect spender, token, chain, approval allowances and provenance when available. Distinguish potentially dangerous approvals from an actual call to change/revoke an allowance.

## Evidence actually available

Scanner/approval-inspection surface is reported as read-only.

## Limits and release gate

No revoke claim without authenticated wallet authorization, real broadcast and confirmed allowance update. External EOA permissions can survive browser alerts.

## Forensic acceptance questions

- Is the action scoped to the **same account, wallet, chain, provider and policy revision**?
- Does the visible result distinguish observation, policy change, blocked provider handoff and chain execution?
- Does an expired request or a mismatched owner fail closed?
- Is the result supported by a reproducible runtime proof, rather than an interface label?

**Read more:** [architecture](../docs/architecture.md) · [evidence and proofs](../docs/evidence-and-proofs.md) · [capability matrix](../docs/capability-matrix.md) · [main README](../README.md).
