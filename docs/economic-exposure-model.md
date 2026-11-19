# Economic Exposure — bounded economic reachability

Economic Exposure is the difference between **a rule for one action** and **a budget for all reachable actions within a window**. A maxSingleAction check alone cannot enforce a cumulative limit if a caller splits one large movement into repeated smaller movements.

![Exposure flow](../assets/diagrams/economic-exposure.svg)

## Conceptual ledger (illustrative)

| Term | Plain-language meaning | Example only |
|---|---|---:|
| `maxSingleAction` | Per-action ceiling | 1,000 units |
| `windowCapacity` | Maximum cumulative movement in accounting window | 3,000 units |
| `realized` | Already executed movement charged against current window | 500 units |
| `reserved` | Pending amounts conservatively held for incomplete actions | 400 units |
| `delegated` | Other authority potentially reachable by assigned agents | Depends on overlap and accounting rule |
| `available` | Capacity not already counted or reserved | 2,100 units if only 500 + 400 count |

**Example formula under a deliberately simplified, non-overlapping model:** `available = max(0, windowCapacity − realized − reserved) = 3,000 − 500 − 400 = 2,100`. This is **not** proof of the canonical production algorithm. Delegated authority may overlap other categories; **never blindly subtract all categories twice**. Exact budgeting requires canonical rules about overlap, reservation cardinality and concurrency.

## Reservation vs. realization

1. A request presents a maximum permitted economic impact and exact wallet/chain/action/policy binding.
2. The governing path checks action scope, current window and relevant outstanding reservations.
3. If accepted for delayed completion, a reservation can prevent oversubscription while the action remains pending.
4. At confirmed completion, reservation and realized amounts must be reconciled exactly once.
5. Rejection, timeout, expiry or rollback must follow well-defined release/reconciliation rules — do not assume every failure frees capacity immediately.
6. Concurrent agents are particularly important: a read-modify-write counter without atomicity is not a proven shared budget.

## Adversarial questions

- Could 100 small transfers evade a maximum large transfer rule?
- Can two agents reserve the same remaining budget simultaneously?
- Does a stale policy revision resurrect spent capacity?
- Can a canceled request replay after a policy change?
- Are `reserved`, `realized`, and delegated reachability double-counted?
- Does the evidence describe a testnet wallet, contract account or mock dataset?

## Verification boundary

The project has research and historical test evidence concerning bounds, timing and governed accounts; the current public Atlas **does not certify a complete production BOUND invariant**. Confirm per-wallet state, atomic reservation/concurrency, expiry, replay control, persistence, rollback and independently reconciled receipts before promoting that claim. Do not use the static demo's monetary labels as live financial readings.

Source: [canonical roadmap](https://app.notion.com/p/3c1d5f4fa5e3801e8dfdc475759e9fec) · [Account-first UX](https://app.notion.com/p/3cfd5f4fa5e3813a987ac3fc1f616f07) · [Master Protocol](https://app.notion.com/p/41bd5f4fa5e3814e948bf911dddef7ef).
