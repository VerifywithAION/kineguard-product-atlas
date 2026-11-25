# The nine controls

## Integration update — November 24, 2026

KINEGuard 1.0 aims to make all nine controls usable through **My Account → Portfolio → View Details**, with KINE OS evaluating requests before covered execution. This table describes candidate evidence, not current availability on kineguard.com.

| Control | Verified progress and scope |
|---|---|
| Spending Limits | CI: persistent Sepolia per-transfer limit, immediate tightening, delayed increase and pre-provider block. Exact reviewed-state validation and single-use durable admission: CI PASS. Opt-in conservative cumulative admission cap: CI PASS. Counted amount, remaining admission capacity and cap-change receipt readback: CI PASS after repair. Rolling window and independent settlement remain pending. |
| Protected Funds | Historical native-ETH V3 contract identity matched byte for byte; current economic readback not certified. Observed EOA balance is not governed funds. Voluntary test funding of the associated V3 contract through the browser policy and explicit MetaMask approval: composition CI PASS with V3 fixture responses and synthetic provider; no protected-funds or withdrawal claim. Two-RPC immediate owner return simulation with exact contract action ID reconstruction: synthetic CI PASS. Contract return admission with a one-use intent, internal economic amount and separate consent passed synthetic HTTP admission and missing-intent extension rejection; composed positive UI/MV3/server test: synthetic CI PASS. Disabled by default, no physical withdrawal certified. |
| Browser Protection | Historical physical Chrome/MetaMask/Sepolia proof and integrated CI of bounded forwarding; reviewed argument isolation: CI PASS. Physical candidate acceptance pending. |
| Emergency Controls | CI for covered browser pause and recovery; historical V3 pending-action veto. No universal freeze. |
| Recipient Rules | CI for recipient denial on covered native Sepolia transfers; no global rule. |
| App Approvals | Inspection of known token/spender pairs; authenticated exact-pair Sepolia lookup pinned to a finalized block: synthetic CI PASS. Does not verify token standard or spender safety. Effective revocation not certified. |
| Agent Access | CI for origin restrictions and scoped read delegation; owner-selected signed budget of 1–10 reads and lifetime of 1–30 minutes: synthetic CI PASS. No delegated monetary authority. |
| Transaction History | CI for exact Sepolia hash and receipt lookup via one RPC. Candidate association between reported hash and durable decision compares sender, recipient, amount and native calldata: CI PASS. Additional two-RPC agreement, block membership and fresh shared finalized anchor check: CI PASS. Additional explicit reviewed nonce comparison: CI PASS for match and mismatch. No causal proof, complete indexing or independent finality. |
| Security Decisions | CI for persistent pre-provider receipts and account-scoped readback. Provider-reported result hash capture: CI PASS. Optional explicit request nonce persistence: CI PASS; remains an unverified observation, not proof of signing, broadcast or on-chain finality. |

**Illustrative example:** a 0.001 ETH limit could reject a covered 0.002 ETH request before MetaMask. This is not a new transaction. A configuration changed in another tab must be reviewed again before confirming a change; software does not acquire signing authority.

**V3 evidence:** recovery of the Solidity 0.8.20 artifact, reproduction of the compilation template, two historical RPC responses and immutable reconstruction matching all 8,254 bytes; policy identity independently recomputed. The examined contract constrains native ETH through immediate/delayed execution, window exposure, reservations and pending-action veto. Its parameters are immutable; it offers no global freeze or ERC-20/NFT coverage. Fresh economic readback remains blocked by insufficient freshness. This is not an audit or independent finality proof.

[Beta status](../beta-status.md) · [Historical proofs](historical-proofs.md)

## 1. Spending Limits

Per-action/window limit and HARDEN/WEAKEN changes; saving is not executing.

Flow: select wallet/record, verify source, read state, explore control, compare available decision/receipt and record limitations.

## 2. Protected Funds

Separate funds in a governed route from observed EOA balances.

Flow: select wallet/record, verify source, read state, explore control, compare available decision/receipt and record limitations.

## 3. Browser Protection

Inspect supported pre-provider requests; GP1A does not cover every EOA action.

Flow: select wallet/record, verify source, read state, explore control, compare available decision/receipt and record limitations.

## 4. Emergency Controls

Distinguish cancellation, alerts and Safety Authority veto, not universal freeze.

Flow: select wallet/record, verify source, read state, explore control, compare available decision/receipt and record limitations.

## 5. Recipient Rules

Recipient rules in supported scopes, not global control claims.

Flow: select wallet/record, verify source, read state, explore control, compare available decision/receipt and record limitations.

## 6. App Approvals

Read-only token/spender/allowance scanner, no automatic revocation.

Flow: select wallet/record, verify source, read state, explore control, compare available decision/receipt and record limitations.

## 7. Agent Access

Identity, proposal, budgets and permissions, no implicit signing.

Flow: select wallet/record, verify source, read state, explore control, compare available decision/receipt and record limitations.

## 8. Transaction History

Observations and records are not the entire chain history.

Flow: select wallet/record, verify source, read state, explore control, compare available decision/receipt and record limitations.

## 9. Security Decisions

Reasons and receipts bound to exact action, without assuming finality.

Flow: select wallet/record, verify source, read state, explore control, compare available decision/receipt and record limitations.

![Wallet Controls](../../assets/screenshots/local-controlled/customer-spending-limits.png)

[Architecture](architecture.md)

V3 return hash lookup now includes a candidate association with exact call fields and the admission receipt (CI pending); the requested internal amount is not verified contract outflow. No settlement or reservation release.
