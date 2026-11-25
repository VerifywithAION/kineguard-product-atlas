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

## Exact-pair inspection

The next candidate adds an authenticated exact token/spender lookup for the saved Sepolia wallet, independent of the known registry. A read-only call uses a pinned canonical finalized block hash and displays raw allowance units, code hash, block and observation time. A zero return applies only to that pair and observed block; missing code, malformed return or RPC failure are unavailable, not zero. Registry risk labels are heuristics, not verified threat intelligence. Integrated synthetic CI passed positive, zero, max and failure cases. No contract standard verification, complete discovery, signature, revocation or independent finality is claimed.

## Candidate revocation identity evidence

The existing Sepolia WETH registry candidate has public source reproduced with Solidity 0.7.5. Both explorer runtime records match each other; their executable section matches the independent compilation, with different Solidity metadata. Fresh two-RPC canonical-block code agreement is not established. Revocation remains unavailable: no selector-only exception, no signature, no transmission, and no zero-allowance claim from this evidence.
