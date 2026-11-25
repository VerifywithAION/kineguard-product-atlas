# Agent Access

> **Public evidence class: LAB / CI VERIFIED (read scope and original local contract revision).** A visible control or illustrative UI cannot certify an operating protection mechanism.

## Mechanism and customer meaning

Agent identity, owner wallet, allowed action/asset/recipient, budget, validity window, authority and evidence should be viewed together. BYOK provides model access, not private-key signing.

## Evidence actually available

Agent Arena, source-level surfaces and roadmap; historical governed-agent concepts separate from consumer-beta deployment.

## Limits and release gate

No implied universal on-chain delegation or autonomous spending authority. A dashboard agent card is not a credential grant.

## Forensic acceptance questions

- Is the action scoped to the **same account, wallet, chain, provider and policy revision**?
- Does the visible result distinguish observation, policy change, blocked provider handoff and chain execution?
- Does an expired request or a mismatched owner fail closed?
- Is the result supported by a reproducible runtime proof, rather than an interface label?

**Read more:** [architecture](../docs/architecture.md) · [evidence and proofs](../docs/evidence-and-proofs.md) · [capability matrix](../docs/capability-matrix.md) · [main README](../README.md).

## Owner-selected read budget and lifetime

The next candidate binds an explicit read count (1–10) and duration (1–30 minutes) to the wallet-signed challenge and durable server grant. Exhaustion, revocation, expiry and changes to wallet/agent/policy scope affect eligibility. The owner sees the saved budget, usage and status. Existing grants retain their previous bounds. The bearer token authorizes metadata reads only, not signing, spending, transactions or verified agent identity. Integrated synthetic CI passed configurable budget, concurrent exhaustion, tampered signature, owner UI and revocation cases; no autonomous monetary delegation claim.


## Bounded native monetary grant contract candidate

The new undeployed contract isolates explicitly funded native ETH principal from existing EOA and V3 funds. Immutable owner, distinct guardian and agent, fixed recipient, nonrenewable budget (maximum 0.001 ETH), per-action cap and expiry (maximum 30 minutes). Owner or guardian may permanently revoke; only owner may recover after expiry or revocation. No arbitrary calldata, renewal or upgrade. The policy hash is a label until account and policy integration is verified. Original bounded contract passed 12/12 local EVM tests after the assertion-matcher correction; integrated regression reported 284/284. A successor candidate requires an independently signed exact per-operation decision with a short lifetime and a decision hash in its execution evidence. The successor CI failed at Solidity compilation (stack too deep); no new EVM tests ran. Policy-service integration and signer custody remain unqualified. No deployment, funding, live authority or customer integration. Existing read grants do not grant spending authority.


## Signed-decision candidate repair — November 25, 2026

The Solidity compilation failure prompted a narrow refactor of the private candidate: digest construction and signature validation are isolated from the execution function, with the same public interface, checks and test suite. No compiler settings or test assertions changed. [Repair commit 55e2227](https://github.com/VerifywithAION/aion-guard-ui/commit/55e22278ee33c98c410b19dae4d7434162949f9d); [CI 45674576412](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45674576412) in progress at publication. This is a source repair, not a new EVM PASS. The earlier 12/12 and 284/284 evidence remains scoped to the last qualified snapshot. No deployment, signing service, production authority or actual spending is certified.
