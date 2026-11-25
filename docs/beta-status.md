# Current productization / beta acceptance boundary

**This repository is complete only as a publication artifact, not as a certified consumer product release.** The public GitHub Atlas may be published independently from the customer beta. It is not proof of a Hostinger deployment, real customer wallet activation or integrated runtime.

## November 24, 2026 — integrated candidate update

- Bounded synthetic integration coverage: per-transfer Sepolia policy, covered browser allow/deny, recipient denial, emergency browser pause/recovery, read-only agent delegation, exact transaction hash lookup and account-owned pre-forward decisions. No new production release is established.
- Historical V3 identity reconciliation matched the complete 8,254-byte runtime from two provider responses and independently recomputed the constructor policy identity. Fresh economic readback remains unavailable under the required freshness control; protected amount remains uncertified. This is not independent finality or a security audit.
- Exact reviewed-policy mutation binding passed the integrated synthetic CI: stale confirmations, replacement proposals and early activation were rejected. Single-use durable admission across renewed browser capabilities passed synthetic concurrent and replay tests. Integrated synthetic CI now passes the opt-in conservative cap over unresolved covered ALLOW admissions, including distinct concurrent requests competing for remaining capacity, retention across rebinding and delayed increases. Timestamped owner readback and cap-change receipt fields in View Details passed integrated synthetic CI after a bounded React lint repair that prevents obsolete record/refresh responses from being displayed. No rolling reset, independently verified settlement, gas cap or global wallet protection is claimed.
- The customer target remains nine functional mechanisms, same-account acceptance, 115 human acceptance cases, safe authorized Sepolia operations and controlled release. Human acceptance is incomplete; current deployment and mainnet coverage are not certified.

See [ES controls](es/controls.md) / [EN controls](en/controls.md). Earlier evidence tables are historical baselines where superseded by this dated update. Private implementation and customer evidence remain private.

## What already exists as evidence

- Historical Chrome/MetaMask/Sepolia GP1A request-timing observations.
- Historical Sepolia-native-ETH KINE V3 governed-action physical experiments 3B-1 through 3B-4.
- Synthetic CI policy-change and policy lifecycle tests.
- User-interface/read-only scanners, account portfolio views and mechanism selector surfaces.
- The public-safe documentation, screenshots and evidence ledger in this repository.

## What must not be presented as delivered

- All nine consumer mechanisms performing real enforcement.
- A connected EOA guaranteed protected outside an approved wrapper.
- A complete deployed policy→extension→provider→durable execution receipt journey.
- Automatic Safety Authority powers for Guardian subscribers.
- Persistent on-chain transaction receipts when only policy-change or observation records exist.
- Mainnet or all-chain execution guarantees.
- KINE AI Intelligence as a released autonomous security agent.

## Integration acceptance chain

Customer session → owned wallet → chain/provider/origin binding → policy and hash → supported pre-forward request → deterministic KINE decision → explicit human/provider result → durable account-owned evidence → same truth in Account, Guardian, View Details and Receipts. Each transition needs end-to-end verification on the **same source SHA** and controlled customer/testnet context.

No universally current Hostinger deployment SHA is independently verified by this documentation package. Historic source/deploy SHAs may appear in linked evidence but must not be promoted as 'current' without a fresh deployment check.

Source: [Master Protocol](https://app.notion.com/p/41bd5f4fa5e3814e948bf911dddef7ef) · [Beta continuity](https://app.notion.com/p/416d5f4fa5e38137bf66d62e0019d92d).

### Request-to-transaction candidate association

The subsequent candidate persists a syntactically valid provider-result transaction hash on the exact capability-bound disposition report and compares it with a single-RPC native transaction lookup. A unique saved ALLOW with matching sender, recipient, amount and empty calldata produces a candidate association only. Missing, ambiguous or mismatching reports do not establish an association. Integrated synthetic CI passed the candidate association and wrong amount/calldata rejection cases. No causal execution, independently verified finality, reservation release or production deployment is claimed.

### Two-provider transaction observation

The next candidate adds two distinct configured RPC endpoints for a matched native-transfer candidate. It checks transaction/receipt fields, nonce and transaction index, block membership, and identical fresh finalized anchors before and after readback. If the stronger observation cannot be established, the basic single-RPC observation remains explicitly unqualified. Integrated synthetic CI passed the positive agreement and all nine negative cases. Agreement between providers is not independently verified cryptographic finality, causal execution proof or settlement authority. No reservation is released.

### Reviewed transaction integrity

The next candidate isolates native transaction arguments before asynchronous policy review, so caller mutation of the original object does not change the forwarded arguments. An explicitly supplied valid nonce is included in the durable decision and compared with the observed transaction. Missing nonce remains explicitly unbound; mismatching or competing explicit nonce evidence does not qualify a candidate association. No nonce is automatically assigned, no signing authority or settlement is granted. Integrated synthetic CI passed caller argument isolation, explicit nonce persistence/matching, mismatch and malformed nonce rejection. Competing nonce detection still lacks its own dedicated runtime test.

### Exact-pair App Approvals inspection

The next candidate allows a signed-in customer to inspect an exact token contract and spender for the saved Sepolia wallet, outside the known-pair registry. The server checks chain and fresh finalized block, observes nonempty contract code and reads allowance(owner,spender) using the exact canonical block hash. Zero, nonzero and maximum uint256 returns are distinguished from unavailable evidence. Code hash and observation time are shown; token-standard conformance and spender safety remain unverified. No signing or revocation; no complete discovery or independent finality claim. Integrated synthetic CI passed the exact-pair readback and negative controls.

### Configurable Agent Access read authority

The next candidate lets the wallet owner choose a budget of 1–10 policy metadata reads and a lifetime of 1–30 minutes, within the existing maximum scope. The exact values are included in the EIP-191 challenge, persisted and enforced by the server; activation cannot override signed values. Owner readback distinguishes active, revoked, expired, exhausted and scope/policy-changed credentials. Integrated synthetic CI passed signed configurable budget, concurrent exhaustion, owner UI configuration and revocation. Bearer possession is not proof of agent identity; no monetary, signing or execution authority. No ERC-20 revocation claim: trusted contract identity and a qualified write route remain gaps.

### Associated V3 native test funding

The next candidate composes the existing customer native-transfer acceptance control with the V3 observation and signed read association. The exact owner, registered contract and observed policy must match a freshly revalidated read association; the owner separately chooses a bounded Sepolia amount (maximum 0.001 ETH), consents and requests the native transfer through the existing wrapped MetaMask provider and saved browser policy. No nonempty calldata or new execution grant. Funding can leave funds locked; no protected amount, withdrawal path or chain completion is certified. Integrated CI passed the UI composition case, which uses fixture V3 observation/association responses and the existing synthetic browser-policy runtime, not a real V3 transaction.

### Immediate V3 owner return simulation

The next candidate implements an authenticated read-only check of the frozen V3 executeImmediate(owner, amount) call. A current owner-signed read association, matching contract observation and exact canonical finalized anchor are required. The amount is limited by the observed balance, immediate and single-action thresholds, cumulative exposure and a 0.001 SepoliaETH test ceiling. The server reconstructs the expected action ID from the frozen contract commitment, nonce and block timestamp, and requires both configured RPC eth_call results to match. Code identity and anchor continuity are rechecked. Integrated synthetic RPC and customer UI CI passed. This simulates a call at an observed block; it neither submits a transaction nor grants spending authority, proves current protected funds or guarantees future execution. Existing contract-call restrictions remain unchanged.

### Exact V3 owner return admission

The next candidate introduces a default-disabled execution route for the registered V3 contract on Sepolia. A separately consented, current simulation can prepare a short-lived one-use intent bound to the exact session, browser capability, saved policy, owner read association and quarantined custody evidence. Only the fixed executeImmediate(owner, amount) call with zero external transaction value is eligible. The browser evaluator decodes the internal amount, applies saved single-action and cumulative admission bounds, recipient and pause rules, and atomically consumes the intent with its durable decision. The receipt distinguishes contract call target and actual beneficiary, and simulated action ID from any mined action. A separate wallet approval is required. Initial candidate CI stopped at TypeScript compilation. A repair validates database timestamps and typed receipt context and corrects candidate migration constraints; exact-head retest passed: 145/145 checks in the synthetic custody/observation/admission suite and the actual extension's missing-intent negative test passed. A new composed test uses the actual customer UI, extension, authenticated server and durable receipt with synthetic RPCs and wallet provider; checks cancel, exact single forwarding after durable admission and consumed-intent replay. Its exact-head CI passed, with 157/157 checks in the combined custody/observation/admission suite. No positive physical end-to-end transaction. Current customer observation may report a balance below the historical minimum without certifying protected funds. No physical withdrawal, causal settlement or production enablement is claimed.

### V3 return transaction readback

The next candidate connects the reported provider hash to a unique saved ALLOW receipt containing the exact V3 call target, zero outer value, canonical calldata and requested internal amount. The configured two-RPC comparison reuses the same exact calldata, receipt and block checks. The customer can follow the return transaction link to see the requested internal amount and candidate receipt association, distinctly from the observed outer value and reported mined status. Mismatch and ambiguity fail closed for the association; no mined action ID, contract outflow, causal execution, independent finality or settlement is inferred by the call-field association alone. Integrated synthetic CI passed (173/173 combined suite).

### V3 execution-event observation

The next candidate additionally checks the exact ImmediateTransferExecuted event in a reported successful transaction, at the mined block, against the frozen registered contract code hash and observed policy identity. Both configured RPCs must agree on the matching event and independently reconstructed action identifier from the actual contract nonce, beneficiary, amount and block timestamp. Invalid or missing event evidence does not establish outflow. A successful observation reports the event-based amount separately from the request and outer transaction value. No causal admission proof, independently verified cryptographic finality, protected-funds certification or reservation release. Integrated synthetic CI PASS (194/194 combined suite); no live execution claimed.

### Release upgrade compatibility and owner operations

The isolated populated PostgreSQL 16 upgrade rehearsal passed all five delta migrations 028–032, preserving existing customer rows, legacy defaults and constraints. This does not establish production backup/restore or authorize deployment. The next product candidate adds authenticated aggregate customer-governance counts and direct operator navigation to the existing Admin overview. Counts are derived from a database statement, not fixtures or browser storage; source failure is explicit. No customer identity or raw records are returned by the new endpoint, and a customer session is not an administrator session. Initial candidate CI stopped at a UI-test locator timeout after the authenticated endpoint checks. The test was repaired to compare all eight displayed values against the server response; the exact-head retest passed (221/221 combined suite, including all eight displayed metrics, authentication boundaries, refresh failure and recovery). Hosted human acceptance remains pending. No new schema or production changes.

The hosting provider reports the approved candidate served in its preview. Access and database isolation have not been independently established, and no hosted acceptance, physical transaction or release approval is claimed. ERC-20 revocation and monetary agent delegation remain unavailable without qualified execution authority.

### App Approvals: WETH source reproduction

The candidate Sepolia WETH public source was recovered and independently recompiled with Solidity 0.7.5. The executable runtime matches both explorer records (1,733 of 1,786 bytes; the Solidity metadata suffix differs). The acquisition and reproduction runs did not establish a current fresh canonical block and code agreement between two configured public RPCs. This is partial identity evidence, not exact full compiler-runtime reproduction, current deployed-code qualification, a new execution permission, or a completed revocation. No product execution code changed and no transaction was submitted.

### Exact WETH revocation request candidate

An additive candidate connects App Approvals to the existing KINE OS browser admission and receipt path. Only the fixed Sepolia WETH candidate and exact zero-approval calldata may enter this route. Explicit consent, a fresh two-RPC full runtime/allowance/simulation agreement, scoped current browser capability, one-use short-lived intent and durable receipt are required. Existing pause, origin and recipient restrictions remain restrictive; positive approvals remain denied. Native value is zero, gas is excluded and existing reservations are not released. Enabled only in disposable synthetic CI configuration; live qualification remains blocked. Migration 033 adds intent and receipt context, not a deployed contract. Initial CI compiled successfully and applied the migration fixture, but stopped at its outdated migration-count assertion (30 files, expected 29), before functional tests. The assertion was corrected to 30; exact-head integrated CI passed (245/245 combined suite, including actual customer UI/MV3/server/database with synthetic RPC/provider). Populated upgrade coverage of this new delta and hosted acceptance remain pending. No actual revoke or zero allowance is claimed.

### WETH revocation transaction evidence

The next candidate links App Approvals to Transaction History and compares exact reported hash, call fields and unique saved ALLOW receipt. Both configured RPCs must agree on the registered full runtime and unique matching zero-approval event at the mined block. The same fresh shared finalized anchor separately checks exact owner/token/spender current allowance with runtime checked again. A later approval can restore allowance; zero current allowance alone does not prove a particular execution. Missing or conflicting evidence is unavailable, not zero. Integrated synthetic CI PASS (284/284 combined suite); no live revocation, causal admission proof, independent cryptographic finality or settlement claimed.


## Bounded native monetary grant contract candidate

The new undeployed contract isolates explicitly funded native ETH principal from existing EOA and V3 funds. Immutable owner, distinct guardian and agent, fixed recipient, nonrenewable budget (maximum 0.001 ETH), per-action cap and expiry (maximum 30 minutes). Owner or guardian may permanently revoke; only owner may recover after expiry or revocation. No arbitrary calldata, renewal or upgrade. The policy hash is a label until account and policy integration is verified. Original local EVM revision passed 12/12 and 284/284 combined integrated checks. The successor signed-decision candidate failed Solidity compilation; its runtime and downstream regression did not execute. No deployment, funding, live authority or customer integration. Existing read grants do not grant spending authority.

[November 25 consolidated integration checkpoint](integration-evidence-2026-11-25.md).


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
