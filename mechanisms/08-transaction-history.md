# Transaction History

> **Public evidence class: UI / READ-ONLY.** A visible control or illustrative UI cannot certify an operating protection mechanism.

## Mechanism and customer meaning

Report source of each event: browser observation, account-owned record, provider response or verified chain transaction. Filter by account/record/wallet/chain and never mix tenants.

## Evidence actually available

Customer Activity observation-only read model; historic KINE receipts and CI receipt work are different evidence sources.

## Limits and release gate

A policy-change entry is not an on-chain transfer; an observation is not finality. Current unified durable transaction timeline not certified.

## Forensic acceptance questions

- Is the action scoped to the **same account, wallet, chain, provider and policy revision**?
- Does the visible result distinguish observation, policy change, blocked provider handoff and chain execution?
- Does an expired request or a mismatched owner fail closed?
- Is the result supported by a reproducible runtime proof, rather than an interface label?

**Read more:** [architecture](../docs/architecture.md) · [evidence and proofs](../docs/evidence-and-proofs.md) · [capability matrix](../docs/capability-matrix.md) · [main README](../README.md).

## Exact hash lookup and candidate association

Single-RPC exact transaction lookup is verified in synthetic integrated CI. A subsequent candidate records the provider-reported hash on the originating disposition report and compares it against the saved wallet's native transaction fields. A unique matching receipt is presented as a candidate association only; missing or ambiguous evidence cannot establish causal execution. Integrated synthetic CI passed the candidate association. No complete indexing, finality or reservation release is claimed.

## Two-provider readback

The next candidate checks the same native transaction and receipt through two distinct configured RPC endpoints, including nonce, transaction index, inclusion in the reported block and a shared finalized anchor no older than 15 minutes. Anchor agreement is rechecked at completion. A disagreement or unavailable endpoint leaves the original basic observation unqualified. Integrated synthetic CI passed the positive agreement and nine negative cases; no cryptographic finality, causal attribution or automatic settlement is claimed.

Explicit reviewed nonce comparison passed integrated synthetic match/mismatch tests. An absent nonce remains unbound; a mismatch or competing admission with the same explicit nonce prevents the candidate association. This is not causal proof.

## Exact V3 return association

The next candidate compares an observed zero-value V3 transaction's target and exact calldata against a unique saved ALLOW receipt and its extension-reported hash. The same two-RPC comparison is reused. The displayed internal amount is the requested return, not a verified contract outflow or mined action ID. Synthetic CI PASS; no causal execution or reservation release.

## V3 execution-event evidence

The candidate checks the exact registered code and policy at the transaction block, decodes the unique immediate execution event, and reconstructs its action identifier from the mined contract nonce and timestamp. Both configured RPCs must report the same matching event. Missing, duplicated, removed or inconsistent event evidence leaves outflow unestablished. CI pending; not a proof of independent finality or settlement.
