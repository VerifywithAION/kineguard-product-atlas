# Protected Funds

> **Public evidence class: UI / READ-ONLY.** A visible control or illustrative UI cannot certify an operating protection mechanism.

## Mechanism and customer meaning

Show observed wallet balances separately from assets held inside a governed smart account. Mark protection as OBSERVED, PRE-EXECUTION COVERED or KINE GOVERNED only for matched assets and proofs.

## Evidence actually available

Wallet-posture and account display source review; historical V3 native ETH governed-account proof is an independent scoped experiment.

## Historical V3 identity — November 24, 2026

The original compilation template was reproduced with Solidity 0.8.20. Two RPC responses for the same historical Sepolia block matched all 8,254 bytes of reconstructed runtime, including ten immutable variables. The policy identity was independently recomputed.

This establishes historical code correspondence, not a currently protected balance or independent cryptographic finality. Fresh economic readback was blocked by the age of the common block. No new funds were moved. V3 veto applies to pending actions within that governed account, not every operation of an EOA.

## Limits and release gate

No automatic protection of external EOA assets, token approvals, other chains or unverified contracts. Do not convert "Unavailable" into a protective claim.

## Forensic acceptance questions

- Is the action scoped to the **same account, wallet, chain, provider and policy revision**?
- Does the visible result distinguish observation, policy change, blocked provider handoff and chain execution?
- Does an expired request or a mismatched owner fail closed?
- Is the result supported by a reproducible runtime proof, rather than an interface label?

**Read more:** [architecture](../docs/architecture.md) · [evidence and proofs](../docs/evidence-and-proofs.md) · [capability matrix](../docs/capability-matrix.md) · [main README](../README.md).

## Associated V3 native test funding

The candidate offers a deliberate native Sepolia funding request to the exact observed V3 contract, gated in the customer UI by fresh revalidation of the matching owner read association, explicit amount-specific consent, live saved policy, extension binding and the selected MetaMask owner account. The existing native browser policy retains the admission decision. A read acknowledgement is not a spending grant. Test amount capped at 0.001 SepoliaETH; no automatic signing, arbitrary destination, withdrawal or nonempty calldata. Funds may remain locked. CI passed the UI composition test using V3 response fixtures and a synthetic wallet provider, not physical funding. No protected amount or current on-chain qualification is claimed.

## Immediate owner return simulation

The next candidate checks a fixed return to the observed owner EOA through the frozen V3 executeImmediate function, using a current signed read association and two configured RPCs at the exact canonical finalized block. Amount, balance and exposure bounds are checked, and both simulated action IDs must equal the reconstructed contract commitment result. The exact code and anchor are rechecked; mismatches fail closed. Integrated synthetic CI passed. This is a read-only simulation, not an integrated withdrawal or a promise of execution at a later block. Do not fund based on simulation alone.

## Exact owner return request

The next candidate adds an explicitly consented, one-use return intent for the same simulated amount and anchor, short-lived and bound to current owner read association, custody, browser capability and saved policy. The eligible call is only the exact nonpayable executeImmediate(owner, amount) on the registered V3 contract. KINE evaluates the actual internal native outflow rather than the zero external value; the wallet and contract retain execution authority. A current customer observation below the historical balance minimum is marked as such rather than treated as current protected funds. The write-request route is disabled by default and synthetic HTTP admission and missing-intent extension rejection passed CI. The composed positive UI/MV3/server test with synthetic RPC/provider passed CI (157/157 combined suite). Physical forwarding, mined execution, independent settlement and human acceptance remain unverified. No new smart contract or funding is required to validate the code path.

The next candidate links the reported return hash to exact call fields in Transaction History; synthetic CI PASS. The new candidate adds matching V3 execution-event observation, CI pending. No physical withdrawal or settlement certified.
