# Experimental proofs and evidence classes

This page distinguishes **what happened**, **where**, **what was observed**, and **what does not follow**. Historical closure is not current deployment acceptance.

## GP1A — browser pre-forward timing (historical human acceptance)

| Case | Stimulus | Result | What it proves in scope |
|---|---|---|---|
| T1 | Safe zero-value method held; operator selected Continue | MetaMask opened | Supported held request could be forwarded after explicit consent; no on-chain confirmation |
| T2 | Held request; operator selected Cancel | MetaMask did not open | Human cancellation prevented provider handoff |
| T3 | Unknown calldata; WARN then Cancel | MetaMask did not open | Unknown-action warning and canceled handoff |
| T4 | Suspicious approval | BLOCK; MetaMask did not open | A bounded dangerous request was stopped before provider |

Environment: Chrome, MetaMask, Sepolia, a specific supported browser-wrapper path. Results are from historic user acceptance and are not automatically reproducible on a newer extension or Hostinger deployment. An account with an EOA can bypass this adapter via unwrapped routes.

## V3 — contract-governed account physical history

| Case | Operation | Preserved result | What remains unproven |
|---|---|---|---|
| 3B-1 | Small permitted value transfer | Governed transfer allowed | Arbitrary tokens/call data or mainnet |
| 3B-2 | Large transfer under constrained policy | Pending state; owner could not force early execution | Global loss bound or every smart-account configuration |
| 3B-3 | Independent Safety Authority targeted exact pending operation | Targeted veto accepted | Browser-level request interception |
| 3B-4 | Legitimate action after maturity | Executed under tested delay/commitment | Multi-wallet deployment, agent production |

Environment: native ETH Sepolia, named experimental setup. Preserve the past proof; **do not rebroadcast the historic actions or move funds merely to create screenshots**.

## CI and branch-level evidence

- [E2E-03A: synthetic API/PostgreSQL workflow](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/42853929823) — reported PASS in disposable environment.
- [E2E-03B: synthetic Chromium/EIP-1193](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/42855849579) — reported PASS; not human MetaMask.
- [E2E-04](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/43077949963) — reported workflow SUCCESS with **14 runtime passes, 5 product gaps and 1 blocked**; not full beta PASS.
- [R0 mechanism-truth wording](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/43623270344) — reported PASS for truthful labels; not nine functional protections.
- [R1A/R1B policy-change receipts](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/43625228645) — reported PASS for synthetic account-scoped policy change receipts; **not** transaction execution or finality.

CI links can require repository access. A report of a workflow PASS is not a statement about deployed coverage; no claim here has been promoted to LIVE VERIFIED.

## Four distinct evidence types

1. **BROWSER_OBSERVATION:** what a supported browser adapter saw or held.
2. **POLICY_CHANGE:** authenticated, account-owned policy edit/revision receipt.
3. **EXECUTION_DECISION / PROVIDER_FORWARD:** canonical request/decision/hand-off lineage, only if exact request and result are joined.
4. **ON_CHAIN_EXECUTION:** chain-specific transaction and independently checked state/finality.

No unqualified use of the term *receipt* should conflate these. Session-local events and observation-only activity are not durable on-chain execution records. The reported integration blocker is completing an exact account/policy/request/provider/result join and human-accepted deployed experience.

## Evidentiary anchors

[Sepolia Key Is Not Enough Evidence](https://app.notion.com/p/2bc692056e8f44ed9ab5dea58240e677) · [Master Customer Protocol](https://app.notion.com/p/41bd5f4fa5e3814e948bf911dddef7ef) · [Detailed claim-to-evidence table](../evidence/claim-to-evidence.md).

## Integrated candidate — 2026-11-25

- Exact WETH revoke admission and separate Approval event/current allowance readback passed synthetic integration. The associated CI emitted `KINE_WETH_EXACT_REVOKE_COMPOSED=PASS` and `KINE_WETH_REVOKE_READBACK=PASS`; integrated checks reported 284/284. No physical revocation or causal proof is claimed.
- Bounded native agent grant: 11 local EVM tests passed; one failed on a deprecated assertion matcher. The matcher-only correction subsequently passed 12/12 local EVM tests and 284/284 integrated checks. A successor candidate requiring an exact short-lived signed decision per operation failed Solidity compilation (stack too deep); no new EVM tests ran. The earlier PASS does not certify this revision. No contract deployment, customer integration, or live monetary authority is certified.
- Existing read-only agent grants are not signing or spending permissions. Human Acceptance and production qualification remain pending.

[Consolidated evidence checkpoint](integration-evidence-2026-11-25.md): exact successful and failed CI, nine mechanisms and Admin.


November 25 repair: the signed-decision candidate compilation refactor is under [CI 45674576412](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45674576412); no new EVM or integrated PASS is certified yet. See the consolidated evidence checkpoint and Agent Access mechanism page. No release.


## Account-owned native agent proposal preview — November 25, 2026

The repaired signed-decision contract passed the local Hardhat EVM stage of CI 45674576412; the complete integrated run was still in progress when checked. A new source candidate connects Agent Access in View Details to an authenticated saved-policy evaluation of a proposed Sepolia native escrow budget, per-action maximum, recipient and lifetime for an owned agent record. The check includes saved spending limits, existing conservative admission capacity, recipient denial, browser-origin denial and emergency pause. A favorable evaluation is explicitly NOT AUTHORIZED: it does not register a contract, verify cryptographic agent identity, sign, reserve capacity, persist a decision receipt or forward a transaction. The full funding amount is checked against the saved per-action limit. The next execution-authority gate still needs independently qualified grant identity, current policy revalidation, durable admission and signer custody. [Candidate commit bd15789](https://github.com/VerifywithAION/aion-guard-ui/commit/bd1578940ac27fcd1d03dbaca61a0da428a81e9b); [CI 45675346255](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45675346255) in progress at publication. New HTTP/UI behavior is not yet runtime certified. No production release.


## Signed-decision qualification and dual key-control association — November 25, 2026

The repaired signed-decision contract at [55e2227](https://github.com/VerifywithAION/aion-guard-ui/commit/55e22278ee33c98c410b19dae4d7434162949f9d) passed [CI 45674576412](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45674576412): 16/16 local EVM tests and 284/284 combined integrated checks. Exact logs verified; repeated summaries do not add independent tests. This is not deployed authority. The budget-preview candidate CI 45675346255 remains in progress at this checkpoint. A new source candidate [3346389](https://github.com/VerifywithAION/aion-guard-ui/commit/3346389b15193c42d06274564646abda5e47d0b9) adds an account-owned durable, limited-purpose association between a saved agent record and a distinct EOA key, verified by the owner and agent signing the same scoped challenge. Challenge completion is bound to the authenticated session, origin, record versions and current policy; challenges expire after five minutes and verified associations after 30 minutes. Revocation and supersession are supported. This proves control of keys at verification time, not the agent software's identity, a contract, a funded grant, or monetary authority. No private keys requested; no signature granting spending, reservation, admission or transaction forwarding. Migration 034 is a candidate additive schema, not applied to production. [CI 45676448439](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45676448439) is in progress; the new HTTP/DB/UI behavior is not yet certified. Grant registration, live contract identity, current-policy admission and signer custody remain open.


## Agent budget qualification and registered-contract observation candidate — November 25, 2026

The account-owned budget proposal at [bd15789](https://github.com/VerifywithAION/aion-guard-ui/commit/bd1578940ac27fcd1d03dbaca61a0da428a81e9b) passed [CI 45675346255](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45675346255), including AGENT_NATIVE_POLICY_PROPOSAL_PREVIEW runtime PASS, 16/16 local EVM and 284/284 integrated checks. No spending authorization follows. The dual-key association candidate CI 45676448439 has passed E2E-05 as a stage; full run was still pending at this checkpoint. New internal read-only qualifier [cc70c8a](https://github.com/VerifywithAION/aion-guard-ui/commit/cc70c8ac4019b39da589c45f08ebc59689cb20e2) compares a separately trusted registry entry against two distinct configured RPC hostnames at the same fresh finalized block: exact runtime hash, roles, policy hash, grant budget, per-action limit, expiry, spent/remaining, balance, revocation and active-state consistency. Canonical block-hash selectors and final anchor recheck are required; no fallback to latest. The 21 planned synthetic RPC cases include adversarial mismatches and revoked-state readback. [CI 45677522665](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45677522665) pending. This module is not an account API, does not establish registry provenance, does not establish independent finality or current execution eligibility, does not sign or authorize spending. A qualified real runtime/registration, account binding, actual policy admission, receipt and signer custody remain open. No deployment or funds moved.


**CI closure (same day):** [45676448439](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45676448439) on `3346389` completed SUCCESS. Final logs confirm `AGENT_KEY_DUAL_PROOF_ASSOCIATION` and `AGENT_NATIVE_POLICY_PROPOSAL_PREVIEW` RUNTIME_PASS, 16 local EVM tests and 284/284 combined integrated checks. Key control is verified within the synthetic account/session challenge flow, not software identity, actual funded contract authority or production acceptance. Migration 034 remains unqualified for populated production upgrades. The registered-observation successor is still pending.


## Contract observation qualification and compiled-runtime provenance candidate — November 25, 2026

[CI 45677522665](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45677522665) at `cc70c8a` completed SUCCESS: direct logs confirm 22/22 registered-grant observation synthetic RPC cases (corrected from the preliminary count of 21), 16/16 local EVM tests, both account-owned proposal and dual-key association runtime PASS, and 284/284 integrated checks. These are distinct scoped results, not live qualification. New [08a57db](https://github.com/VerifywithAION/aion-guard-ui/commit/08a57db78cda5e9b97bd77625d212820a6539321) adds an internal compiler-artifact provenance and runtime reconstruction candidate tied to frozen source, Solidity 0.8.20 and optimizer settings, artifact/build-info linkage and nine named immutable constructor values. The new local EVM test compares reconstructed complete runtime bytes and hashes against two separately instantiated synthetic grants, with source, artifact linkage, compiler setting and immutable mutation negative controls. [CI 45679619115](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45679619115) is in progress; no new runtime-provenance PASS is certified. This is a trusted-build laboratory tool, not authenticated external artifact intake, live deployment attestation, registry provisioning or client API. No production contract, funds, authorization, or deployment. Account binding, qualified operator registry, durable admission and signer custody remain open.


## Compiled-runtime qualification and account-bound observation candidate — November 25, 2026

[CI 45679619115](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45679619115) at `08a57db` completed SUCCESS: exact logs confirm 18/18 runtime-provenance controls inside the 17/17 local EVM tests, 22/22 synthetic RPC controls, both account-owned proposal and dual-key association RUNTIME_PASS, and 284/284 integrated checks. No live deployment. New [9acce1a](https://github.com/VerifywithAION/aion-guard-ui/commit/9acce1ad459a5e041c0298b9fa49382de6b04b9e) integrates a CI-only account-owned observation route and View Details panel with a sealed fixture generated from an actual local EVM grant and its reconstructed runtime, authenticated session, exact account/wallet/agent records, saved policy hash/revision, fresh dual-key proof and dual synthetic RPC comparison. The follow-up [aa2a836](https://github.com/VerifywithAION/aion-guard-ui/commit/aa2a83652e9349b259c0a2a6b9f4db82dc465cf4) isolates fixture clock from earlier EVM time-travel tests. [CI 45681534607](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45681534607) is in progress; the new account observation is not yet qualified. Outside the explicitly gated laboratory environment the route reports no qualified live registry. The lab adapters are synthetic, not independent network nodes or Sepolia deployment evidence. No production authorization, signing, reservation, transaction or deployment. Real operator registration, current-policy admission, durable decision receipt and signing custody remain open.


## Account-bound grant observation qualification and durable laboratory decision candidate — November 25, 2026

[CI 45681449800](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45681449800) at `9acce1a` failed E2E-05 at account grant readback (HTTP 503 instead of 200). The clock-isolated successor [CI 45681534607](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45681534607) at `aa2a836` completed SUCCESS: exact logs confirm AGENT_REGISTERED_GRANT_ACCOUNT_OBSERVATION RUNTIME_PASS, 18/18 provenance controls within 17/17 local EVM tests, 22/22 synthetic RPC controls and 284/284 integrated checks. This qualifies the account/session/key-proof-bound laboratory observation route and View Details, not a live registry. New [869b325](https://github.com/VerifywithAION/aion-guard-ui/commit/869b325c1e960768c55dfacbe8243a27bb062344) introduces an additive laboratory-only decision schema and account API/UI: an exact agent-signed EIP-191 request is verified against current account association, registered observation and policy, then an atomic wallet-locked decision receipt records BLOCK or LAB_RESERVED_NOT_AUTHORIZED. Synthetic reservations are conservatively counted against observed grant remaining budget; no automatic release, no live capacity, no executable authorization. A configured shared browser cap fails closed until cross-path accounting is integrated. The candidate tests exact amount tampering, replay, concurrent budget exhaustion, owner-scoped receipt listing, UI denial and revocation. [CI 45682962700](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45682962700) pending at publication. The request expiry is a bounded signed deadline, not independently stored server-issued challenge state. Migration 035 is unqualified for populated upgrades; the existing laboratory fixture remains synthetic. Real registration, current-chain admission, shared cap, custody and signing, event readback and human acceptance remain open.
