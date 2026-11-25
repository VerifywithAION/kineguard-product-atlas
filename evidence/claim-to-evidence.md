# Claim-to-evidence audit

| Claim | Public file | Notion source | Test or deployment evidence | Verified SHA | Execution environment | Scope | Public status | Verdict |
|---|---|---|---|---|---|---|---|---|
| Policy changes can produce account-scoped policy receipts | `mechanisms/01-spending-limits.md` | Master Protocol v2.0, A15 | R1A/R1B CI evidence; policy-change receipt boundary | `aa20d719` feature evidence, not Hostinger | Disposable PostgreSQL/CI | Synthetic policy changes only | LAB / CI VERIFIED | Supported |
| Browser pre-execution can be bounded by exact request context | `mechanisms/03-browser-protection.md` | A10, A15 | GP1A historical Chrome/MetaMask/Sepolia acceptance | Historical package evidence | Human testnet browser | Supported wrapped requests only | TESTNET VERIFIED | Supported with limits |
| Protected funds are not inferred from balances | `mechanisms/02-protected-funds.md` | A03, A08, A15 | Wallet-matched read-model rules | `c557df35` baseline source | UI/read-only | No universal governed-funds claim | UI / READ-ONLY | Safe claim |
| Emergency controls are unavailable | `mechanisms/04-emergency-controls.md` | A15, Master Protocol v2.0 | Canonical capability gap classification | `c557df35` baseline | Source/UI review | No operational emergency authority | DESIGN / ROADMAP | Accurate |
| Recipient rejection has historical governed evidence | `mechanisms/05-recipient-rules.md` | A10, A15 | Historical governed rejection path | Historical evidence only | Controlled governed path | Not customer-editable policy | LAB / CI VERIFIED | Limited |
| App approvals are inspection, not revocation proof | `mechanisms/06-app-approvals.md` | A05, A15 | Approval scanner/read-only route | `c557df35` baseline | UI/read-only | No effective revocation claim | UI / READ-ONLY | Safe claim |
| Agents do not receive wallet-spend authority from BYOK | `mechanisms/07-agent-access.md` | A06, A15 | Agent/BYOK boundary evidence | `c557df35` baseline | Local/UI boundary | No signing or spend delegation claim | UI / READ-ONLY | Safe claim |
| Activity is observation-only | `mechanisms/08-transaction-history.md` | A03, A15 | Account activity provenance rules | `c557df35` baseline | Account read model | No chain finality claim | UI / READ-ONLY | Safe claim |
| Complete decision-to-forward receipt correlation is not certified | `mechanisms/09-security-decisions.md` | A15, Master Protocol v2.0 | E2E-05 runtime not certified; R1A/R1B are policy-change only | `30efced` E2E-05 branch failure context | CI/test branches | No deployed integrated join | LAB / CI VERIFIED | Boundary claim |
| KINE AI Intelligence | `docs/en/kine-ai.md`, `docs/es/kine-ai.md` | A01, A07 roadmap authorities | No production implementation; KAI-01 remains a future read-only target | Not applicable | Documentation only | No execution authority | DESIGN / ROADMAP | Documented roadmap, not released |

## Dated evidence supplement — November 24, 2026

| Claim | Evidence class | Scope and result |
|---|---|---|
| Saved per-transfer limit can block a covered request | LAB / CI VERIFIED | Integrated synthetic browser and disposable database: stale binding and over-limit requests zero forwards; durable account-owned pre-forward decision |
| V3 historical runtime matches frozen artifact | Historical testnet readback | Original compiler artifact and two reported historical RPC runtimes match all 8,254 bytes after immutable reconstruction; policy identity independently recomputed; no independent finality or current amount certification |
| Current protected funds | NOT CERTIFIED | Fresh common finalized state unavailable under required freshness control |
| Exact reviewed-state policy mutation binding | LAB / CI VERIFIED | Integrated synthetic tests: stale reviews, replacement proposals and early activation rejected; active limit preserved |
| Single-use durable admission | LAB / CI VERIFIED | Concurrent identical requests: one admission and one rejection; renewal replay rejected; fresh request admitted |
| Conservative cumulative admission cap | LAB / CI VERIFIED | Opt-in covered native cap; distinct concurrent requests compete for remaining capacity, rebinding retains history, increases delayed; no independent settlement |
| Owner economic readback and cap-change receipts | IMPLEMENTED / CI PENDING | Timestamped counted admissions and remaining capacity; historical, active and requested cap fields; no chain-completion or release claim |

Public-safe summaries of internally reviewed evidence; raw private source, customer records and verification receipts are not published. See [beta status](../docs/beta-status.md).

## Deployment rule

The latest documented Hostinger Current baseline is `c557df35a4a4e2551d621f6a7920063b7a76a19a`. No current functional evidence was available for a newer deployed integration, so no claim in this atlas is classified LIVE VERIFIED.
