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

The isolated populated PostgreSQL 16 upgrade rehearsal passed all five delta migrations 028–032, preserving existing customer rows, legacy defaults and constraints. This does not establish production backup/restore or authorize deployment. The next product candidate adds authenticated aggregate customer-governance counts and direct operator navigation to the existing Admin overview. Counts are derived from a database statement, not fixtures or browser storage; source failure is explicit. No customer identity or raw records are returned by the new endpoint, and a customer session is not an administrator session. Initial candidate CI stopped at a UI-test locator timeout after the authenticated endpoint checks. The test was repaired to compare all eight displayed values against the server response; exact-head retest and hosted human acceptance pending. No new schema or production changes.
