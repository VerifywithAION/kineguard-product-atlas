# Safety Authority, veto, and replay resistance

The independent Safety Authority is a separate review boundary in the tested governed-action flow. In the historical V3 sequence, the authority vetoed the exact pending action before execution. That is distinct from browser Cancel, which prevents a provider request from opening or forwarding.

Safe implementations bind a pending action to its identity, policy revision, context, and maturity window. Replays, stale revisions, premature execution, expiry, or a mismatched action must fail rather than silently resolve against a newer state.

Evidence is `TESTNET VERIFIED` only for the documented native ETH Sepolia experiment and its exact harness. It is not a universal veto claim.

## Separate intervention domains

- **Browser policy DENY:** no forwarding in the supported wrapper.
- **Human Cancel:** request is voluntarily withheld pre-provider.
- **V3 Safety Authority veto:** an independently authorized account role targets an already pending governed operation on-chain.
- **Guardian:** customer supervision/notification experience; a paid tier or displayed Guardian label never creates the above on-chain role.

The veto target must be **exact**; a different action ID, stale policy revision, expired review period or reused nonce should not be reinterpreted as the originally approved action. The past V3 physical tests covered native ETH on Sepolia and do not certify arbitrary asset, chain or recovery flows.

![Veto boundary illustration](../../assets/diagrams/veto-architecture.svg)
