# Emergency Controls

> **Public evidence class: DESIGN / PRODUCT GAP.** A visible control or illustrative UI cannot certify an operating protection mechanism.

## Mechanism and customer meaning

An independently governed account may define pause, cancellation or Safety Authority intervention where contract and current authority support it. The UI must expose only capabilities actually provisioned for this object.

## Evidence actually available

Historical V3 3B-3 exact Safety Authority veto is distinct from an Emergency Controls button in customer UI.

## Limits and release gate

Current public evidence does not establish an operational per-customer emergency freeze, universal clawback or arbitrary EOA control.

## Forensic acceptance questions

- Is the action scoped to the **same account, wallet, chain, provider and policy revision**?
- Does the visible result distinguish observation, policy change, blocked provider handoff and chain execution?
- Does an expired request or a mismatched owner fail closed?
- Is the result supported by a reproducible runtime proof, rather than an interface label?

**Read more:** [architecture](../docs/architecture.md) · [evidence and proofs](../docs/evidence-and-proofs.md) · [capability matrix](../docs/capability-matrix.md) · [main README](../README.md).
