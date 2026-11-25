# Security Decisions

> **Public evidence class: LAB / CI VERIFIED — BOUNDED.** A visible control or illustrative UI cannot certify an operating protection mechanism.

## Mechanism and customer meaning

Connect exact request ID, owner, wallet, provider, chain, origin, decoded method, policy revision/hash, deterministic verdict, human choice, provider handoff and a typed receipt.

## Evidence actually available

Historical browser decisions + synthetic R1A/R1B policy-change receipts; E2E05 runtime integration was not fully certified.

## Limits and release gate

Do not represent policy edits as denials, decision receipts as mined transactions, or sessionStorage-only traces as durable evidence.

## Forensic acceptance questions

- Is the action scoped to the **same account, wallet, chain, provider and policy revision**?
- Does the visible result distinguish observation, policy change, blocked provider handoff and chain execution?
- Does an expired request or a mismatched owner fail closed?
- Is the result supported by a reproducible runtime proof, rather than an interface label?

**Read more:** [architecture](../docs/architecture.md) · [evidence and proofs](../docs/evidence-and-proofs.md) · [capability matrix](../docs/capability-matrix.md) · [main README](../README.md).

## Provider-result hash evidence

Integrated synthetic CI verifies owner-scoped durable decisions and conservative admission readback. A subsequent candidate adds the provider-reported transaction hash to the exact capability-bound result report and displays it as unverified evidence. The matching single-RPC observation may support a candidate association, not proof that KINE caused execution. Integrated synthetic CI passed. Existing policy and pre-forward receipt boundaries remain unchanged. Two-provider transaction observation passed integrated synthetic CI; this cannot upgrade an unverified provider report into causal proof or release economic capacity.

The subsequent candidate preserves an optional explicitly requested nonce in the pre-forward receipt and labels it as a reviewed request field, not a verified chain nonce. Integrated synthetic CI passed explicit nonce persistence and readback. Existing historical receipts remain unchanged.

## V3 owner return decision context

The next candidate preserves the exact contract call target, economic beneficiary, zero external value, internal amount and simulation context on the durable pre-forward receipt. The short-lived one-use intent is consumed with the admission. A simulation identifier is not a mined action ID; the receipt still does not verify signing, forwarding, chain completion or protected funds. CI pending.

The V3 owner-return durable context passed synthetic HTTP readback checks. A composed UI/MV3 test now checks durable admission before the synthetic provider is called; CI pending. No mined action or chain completion inferred.
