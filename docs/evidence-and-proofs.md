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
