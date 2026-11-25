# GitHub Atlas release candidate — 2026-11-19

This is a public **documentation and evidence showcase**, not a second KINEGuard website and not a production application release.

## What was assembled

- Existing R1/R2/R3 content retained in its public-safe scope; nine controls and bilingual KINE AI roadmap remain accessible.
- README rebuilt as a self-contained GitHub presentation, with real screenshots embedded.
- Seven deep dives enhanced, nine mechanism pages expanded, additional account architecture, exposure model, evidence ledger, Token Economy, cryptographic research and beta-status documentation added.
- Six native-editable SVG diagrams generated to **explain** mechanisms, not to impersonate runtime screenshots.
- Uploaded screenshot bytes verified and their SHA-256 values recorded; misleading `kine-ai-markdown-gap.png` moved to diagnostics; superseded `.bak` omitted.
- Original static preview retained solely for provenance, never a requirement to read the repo.

## Evidence and release boundaries

Historical GP1A and V3 are testnet-scope cases, synthetic workflows remain CI-only, several controls are read-only or design gaps, and KINE AI remains roadmap. Hostinger Current is **not** inferred from a static archive. No private implementation, hidden credentials or customer records are intentionally included.

## Pending after GitHub publication

- Independent public GitHub URL check and image display/anchor check.
- Owner inspection of final on-GitHub visual presentation.
- Any additional KINEGuard *product* screenshots would require their own authorized, sanitized evidence; the uploaded ZIP only supplies Atlas preview screens.

## Documentation update — 2026-11-24

Bilingual controls, README navigation, beta status and evidence ledger updated with bounded integration progress. No application release, new deployment, mainnet assurance or customer acceptance is announced. The existing checksum manifest describes its historical publication snapshot and is not a current verification of this updated tree. Raw private evidence remains excluded.

## Documentation update — 2026-11-25

Updated the mechanism matrix, evidence ledger and bilingual agent permissions to reflect synthetic WETH revocation/readback evidence and the incomplete local-EVM agent grant qualification. No new customer-facing release, physical revocation, deployment or monetary delegation is claimed.

The original bounded agent contract subsequently passed 12/12 local EVM tests and 284/284 integrated checks. The next candidate adds an independently signed per-operation governance decision; its new CI and live signer/policy integration are not certified. No customer-facing release or live authority is announced.

## Documentation reconciliation — 2026-11-25

Reviewed 100 returned private PR #18 commit entries and exact CI logs. All nine mechanism pages, Admin evidence, catalog, bilingual controls and navigation, and claim boundaries reconciled. Last qualified: 12/12 local EVM and 284/284 integrated synthetic checks; successor signed-decision candidate compilation FAIL. No new deployment or live execution certification. [Checkpoint](docs/integration-evidence-2026-11-25.md).


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
