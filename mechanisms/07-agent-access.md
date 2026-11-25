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


## Account-owned native agent proposal preview — November 25, 2026

The repaired signed-decision contract passed the local Hardhat EVM stage of CI 45674576412; the complete integrated run was still in progress when checked. A new source candidate connects Agent Access in View Details to an authenticated saved-policy evaluation of a proposed Sepolia native escrow budget, per-action maximum, recipient and lifetime for an owned agent record. The check includes saved spending limits, existing conservative admission capacity, recipient denial, browser-origin denial and emergency pause. A favorable evaluation is explicitly NOT AUTHORIZED: it does not register a contract, verify cryptographic agent identity, sign, reserve capacity, persist a decision receipt or forward a transaction. The full funding amount is checked against the saved per-action limit. The next execution-authority gate still needs independently qualified grant identity, current policy revalidation, durable admission and signer custody. [Candidate commit bd15789](https://github.com/VerifywithAION/aion-guard-ui/commit/bd1578940ac27fcd1d03dbaca61a0da428a81e9b); [CI 45675346255](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45675346255) in progress at publication. New HTTP/UI behavior is not yet runtime certified. No production release.


## Signed-decision qualification and dual key-control association — November 25, 2026

The repaired signed-decision contract at [55e2227](https://github.com/VerifywithAION/aion-guard-ui/commit/55e22278ee33c98c410b19dae4d7434162949f9d) passed [CI 45674576412](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45674576412): 16/16 local EVM tests and 284/284 combined integrated checks. Exact logs verified; repeated summaries do not add independent tests. This is not deployed authority. The budget-preview candidate CI 45675346255 remains in progress at this checkpoint. A new source candidate [3346389](https://github.com/VerifywithAION/aion-guard-ui/commit/3346389b15193c42d06274564646abda5e47d0b9) adds an account-owned durable, limited-purpose association between a saved agent record and a distinct EOA key, verified by the owner and agent signing the same scoped challenge. Challenge completion is bound to the authenticated session, origin, record versions and current policy; challenges expire after five minutes and verified associations after 30 minutes. Revocation and supersession are supported. This proves control of keys at verification time, not the agent software's identity, a contract, a funded grant, or monetary authority. No private keys requested; no signature granting spending, reservation, admission or transaction forwarding. Migration 034 is a candidate additive schema, not applied to production. [CI 45676448439](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45676448439) is in progress; the new HTTP/DB/UI behavior is not yet certified. Grant registration, live contract identity, current-policy admission and signer custody remain open.


## Agent budget qualification and registered-contract observation candidate — November 25, 2026

The account-owned budget proposal at [bd15789](https://github.com/VerifywithAION/aion-guard-ui/commit/bd1578940ac27fcd1d03dbaca61a0da428a81e9b) passed [CI 45675346255](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45675346255), including AGENT_NATIVE_POLICY_PROPOSAL_PREVIEW runtime PASS, 16/16 local EVM and 284/284 integrated checks. No spending authorization follows. The dual-key association candidate CI 45676448439 has passed E2E-05 as a stage; full run was still pending at this checkpoint. New internal read-only qualifier [cc70c8a](https://github.com/VerifywithAION/aion-guard-ui/commit/cc70c8ac4019b39da589c45f08ebc59689cb20e2) compares a separately trusted registry entry against two distinct configured RPC hostnames at the same fresh finalized block: exact runtime hash, roles, policy hash, grant budget, per-action limit, expiry, spent/remaining, balance, revocation and active-state consistency. Canonical block-hash selectors and final anchor recheck are required; no fallback to latest. The 21 planned synthetic RPC cases include adversarial mismatches and revoked-state readback. [CI 45677522665](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45677522665) pending. This module is not an account API, does not establish registry provenance, does not establish independent finality or current execution eligibility, does not sign or authorize spending. A qualified real runtime/registration, account binding, actual policy admission, receipt and signer custody remain open. No deployment or funds moved.


**CI closure (same day):** [45676448439](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45676448439) on `3346389` completed SUCCESS. Final logs confirm `AGENT_KEY_DUAL_PROOF_ASSOCIATION` and `AGENT_NATIVE_POLICY_PROPOSAL_PREVIEW` RUNTIME_PASS, 16 local EVM tests and 284/284 combined integrated checks. Key control is verified within the synthetic account/session challenge flow, not software identity, actual funded contract authority or production acceptance. Migration 034 remains unqualified for populated production upgrades. The registered-observation successor is still pending.


## Contract observation qualification and compiled-runtime provenance candidate — November 25, 2026

[CI 45677522665](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45677522665) at `cc70c8a` completed SUCCESS: direct logs confirm 22/22 registered-grant observation synthetic RPC cases (corrected from the preliminary count of 21), 16/16 local EVM tests, both account-owned proposal and dual-key association runtime PASS, and 284/284 integrated checks. These are distinct scoped results, not live qualification. New [08a57db](https://github.com/VerifywithAION/aion-guard-ui/commit/08a57db78cda5e9b97bd77625d212820a6539321) adds an internal compiler-artifact provenance and runtime reconstruction candidate tied to frozen source, Solidity 0.8.20 and optimizer settings, artifact/build-info linkage and nine named immutable constructor values. The new local EVM test compares reconstructed complete runtime bytes and hashes against two separately instantiated synthetic grants, with source, artifact linkage, compiler setting and immutable mutation negative controls. [CI 45679619115](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45679619115) is in progress; no new runtime-provenance PASS is certified. This is a trusted-build laboratory tool, not authenticated external artifact intake, live deployment attestation, registry provisioning or client API. No production contract, funds, authorization, or deployment. Account binding, qualified operator registry, durable admission and signer custody remain open.
