# Spending Limits

> **Public evidence class: LAB / CI VERIFIED.** A visible control or illustrative UI cannot certify an operating protection mechanism.

## Mechanism and customer meaning

User-edited maxSingleAction and any rolling-window limits must belong to the exact wallet/chain/account/policy revision. Tightening and loosening take different paths. Readback after refresh is necessary but does not prove enforcement.

## Evidence actually available

E2E-04 synthetic save/harden/pending/cancel (14 runtime PASS, five product gaps, one blocked); R1A/R1B account-owned POLICY_CHANGE receipts synthetic CI PASS.

## Limits and release gate

Current beta still needs exact wallet policy → extension pre-forward decision → provider result → durable linked receipt, same revision and identity. No universal EOA veto.

## Forensic acceptance questions

- Is the action scoped to the **same account, wallet, chain, provider and policy revision**?
- Does the visible result distinguish observation, policy change, blocked provider handoff and chain execution?
- Does an expired request or a mismatched owner fail closed?
- Is the result supported by a reproducible runtime proof, rather than an interface label?

**Read more:** [architecture](../docs/architecture.md) · [evidence and proofs](../docs/evidence-and-proofs.md) · [capability matrix](../docs/capability-matrix.md) · [main README](../README.md).
