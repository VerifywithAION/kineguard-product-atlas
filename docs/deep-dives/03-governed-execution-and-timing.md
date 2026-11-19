# Governed execution and timing

## Threat model

An owner key should not automatically defeat a policy delay or an independent safety review. A proposed change must be distinguishable from the current effective policy.

## Flow

`CURRENT POLICY → PROPOSED CHANGE → CLASSIFICATION → SECURITY DELAY → MATURITY → REVIEW / VETO → EXECUTION OR CANCELLATION → POLICY REVISION`.

KINE V3 historical Sepolia evidence recorded a small permitted transfer, a large action held pending, early execution denial, Safety Authority veto of the exact pending action, and a mature legitimate action executing under tested rules. Tightening and weakening are not equivalent: immediate hardening can improve protection, while weakening requires a delay and remains cancellable before maturity.

## Boundary

This is historical testnet evidence, not a current deployment claim. Exact maturity, expiry, replay, and supported asset scope must remain tied to the named experiment.

## Exact transition semantics

Historical V3 3B-1 permitted a small action, 3B-2 made a larger action pending and resisted premature execution by the owner, 3B-3 had a distinct Safety Authority veto that exact pending action, and 3B-4 recorded mature legitimate execution. A signature alone did not suffice *inside this contract-governed scope*.

Timing questions include when a proposal becomes effective, whether the previous stricter policy remains in force while a relaxation is pending, whether a pending action can be canceled, how the maturity condition is bound to its ID and revision, and how a stale/replayed action is rejected. These are state-machine obligations, not universal production claims.

![Governance timeline](../../assets/diagrams/governance-timing.svg)
