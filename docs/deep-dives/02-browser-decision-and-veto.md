# Browser pre-forward decision and veto

## Threat model

A malicious or confusing request may reach a wallet provider before a person understands it. A browser layer must bind the request to its provider, origin, chain, wallet, session, policy revision, and request identity.

## Historical flow

The GP1A historical browser acceptance covered a bounded Chrome/MetaMask/Sepolia wrapper. T1 held a safe request until Continue; T2 Cancel prevented MetaMask opening; T3 unknown calldata produced WARN and Cancel prevented forwarding; T4 suspicious approval produced BLOCK and MetaMask did not open. These are browser observations, not on-chain receipts.

## Boundary

The result is `TESTNET VERIFIED` for that historical scope only. It does not certify the current Hostinger deployment, universal EOA protection, or every RPC method. See [Security Decisions](../../mechanisms/09-security-decisions.md).

## Timing and handoff theorem

The temporal property is **before provider forwarding**: a provider-facing request must not be sent while KINE holds it, and an exact Cancel/DENY must result in zero forwarding for that wrapped request. A Continue can release the exact held request once; it does not authorize future requests or all calldata.

GP1A T1 safe zero-value request → Continue → MetaMask opened (no transaction confirmation); T2 held → Cancel → MetaMask did not open; T3 unknown calldata → WARN → Cancel → no MetaMask; T4 suspicious approval → BLOCK → no MetaMask. These are four specific test conditions, not claims of coverage for every dApp action.

A supported adapter must enforce request identity and provider/current wallet/chain/origin/session binding. An outdated policy hash, wrong owner, stale request, changed tab context or evaluator failure must not silently allow forwarding. A UX alert that appears **after** MetaMask opens is not a pre-forward veto.

![Three interventions](../../assets/diagrams/veto-architecture.svg)
