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

## Integration progress — November 24, 2026

Integrated synthetic CI now confirms exact reviewed-state binding for policy edits and pending changes, in addition to bounded per-transfer browser decisions and durable account-owned receipts. Single-use durable admission and the opt-in conservative cumulative admission cap passed integrated synthetic tests. This strengthens cumulative accounting without treating a pre-forward decision as a completed transfer. Rolling-period limits, independent settlement and physical acceptance remain unfinished; this is not a production deployment claim. See [beta status](../docs/beta-status.md).

## Conservative cumulative admission — November 24, 2026

Single-use admission passed integrated synthetic tests. The new candidate adds an opt-in cap to the saved wallet policy, evaluates the exact accumulated unresolved covered ALLOW amount plus the new request and stores the decision atomically. A lower cap can strengthen policy immediately; an increase follows the existing security delay. Previous admissions count even when a browser reports cancellation or error, until independently reconciled. This is not actual spent value, gas accounting, a rolling-window reset, an on-chain balance or universal EOA protection. Integrated synthetic CI passed concurrent distinct admission, retained history and delayed cap increase cases; no deployment announcement.

## Owner economic readback — November 24, 2026

The subsequent candidate exposes a timestamped count of covered unresolved admissions and remaining admission capacity in View Details, with active, prior and requested cumulative cap values in policy-change receipts. No zero balance is inferred from unavailable data. The values do not represent confirmed spending, gas expenditure or a protected on-chain balance; the readback releases no reservations. Initial CI stopped at a React lint error before functional tests. The receipt loading flow was repaired to reject obsolete record/refresh results; validation remains pending. Historical receipts that predate the cap retain their original evidence boundary.
