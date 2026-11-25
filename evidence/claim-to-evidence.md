# Claim-to-evidence audit

| Claim | Public file | Notion source | Test or deployment evidence | Verified SHA | Execution environment | Scope | Public status | Verdict |
|---|---|---|---|---|---|---|---|---|
| Policy changes can produce account-scoped policy receipts | `mechanisms/01-spending-limits.md` | Master Protocol v2.0, A15 | R1A/R1B CI evidence; policy-change receipt boundary | `aa20d719` feature evidence, not Hostinger | Disposable PostgreSQL/CI | Synthetic policy changes only | LAB / CI VERIFIED | Supported |
| Browser pre-execution can be bounded by exact request context | `mechanisms/03-browser-protection.md` | A10, A15 | GP1A historical Chrome/MetaMask/Sepolia acceptance | Historical package evidence | Human testnet browser | Supported wrapped requests only | TESTNET VERIFIED | Supported with limits |
| Protected funds are not inferred from balances | `mechanisms/02-protected-funds.md` | A03, A08, A15 | Wallet-matched read-model rules | `c557df35` baseline source | UI/read-only | No universal governed-funds claim | UI / READ-ONLY | Safe claim |
| Scoped browser pause and signed recovery | `mechanisms/04-emergency-controls.md` | A15 | R1G/J integrated runtime | `1f01d49` | Synthetic UI/MV3/PG | Zero forwards, old capability rejected | LAB / CI VERIFIED | Bounded |
| Owner-scoped recipient deny | `mechanisms/05-recipient-rules.md` | A15 | R1E runtime | `1f01d49` | Synthetic UI/MV3/PG | Zero forwards, cross-account rejection | LAB / CI VERIFIED | Bounded |
| App approvals are inspection, not revocation proof | `mechanisms/06-app-approvals.md` | A05, A15 | Approval scanner/read-only route | `c557df35` baseline | UI/read-only | No effective revocation claim | UI / READ-ONLY | Safe claim |
| Agents do not receive wallet-spend authority from BYOK | `mechanisms/07-agent-access.md` | A06, A15 | Agent/BYOK boundary evidence | `c557df35` baseline | Local/UI boundary | No signing or spend delegation claim | UI / READ-ONLY | Safe claim |
| Activity is observation-only | `mechanisms/08-transaction-history.md` | A03, A15 | Account activity provenance rules | `c557df35` baseline | Account read model | No chain finality claim | UI / READ-ONLY | Safe claim |
| Scoped decision and provider-result lineage | `mechanisms/09-security-decisions.md` | A15 | E2E-05 and R1I | `1f01d49` | Synthetic UI/MV3/PG | Distinct durable decision and provider report; four-view identity | LAB / CI VERIFIED | Hosted acceptance pending |
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
| Owner economic readback and cap-change receipts | LAB / CI VERIFIED | Timestamped counted admissions and remaining capacity; historical, active and requested cap fields; no chain-completion or release claim |

Public-safe summaries of internally reviewed evidence; raw private source, customer records and verification receipts are not published. See [beta status](../docs/beta-status.md).

## Deployment rule

The latest documented Hostinger Current baseline is `c557df35a4a4e2551d621f6a7920063b7a76a19a`. No current functional evidence was available for a newer deployed integration, so no claim in this atlas is classified LIVE VERIFIED.

| Reported transaction hash and native-field candidate association | LAB / CI VERIFIED | Exact capability-bound unverified result report; unique owner-scoped ALLOW and single-RPC native-field comparison only; no causal proof, finality or reservation release |

| Two-provider native transaction observation | LAB / CI VERIFIED | Exact fields, block membership, matching fresh finalized anchors and owner recheck; discrepancy leaves only unqualified basic observation; no release or independent finality |

| Reviewed request isolation and explicit nonce | LAB / CI VERIFIED (bounded) | Snapshot of native transaction arguments; optional explicit nonce in durable decision and association check; no automatic nonce assignment, causal execution or reservation release |

| Exact-pair allowance observation | LAB / CI VERIFIED (bounded) | Owner-scoped native RPC read of token/spender allowance at pinned finalized block; exact raw amount and code hash; no standard or spender safety certification, no revoke |

| Configurable wallet-signed agent read grant | LAB / CI VERIFIED (bounded) | Owner selects signed bounded read count and lifetime, server enforces consumption and revocation, accurate status readback; no delegated spending or signing authority |

| Associated V3 native test funding customer flow | LAB / CI VERIFIED (UI fixture composition) | Explicit bounded Sepolia native transfer to fixed observed contract after matching fresh read association, existing policy enforcement and owner approval; UI fixture and synthetic provider test, no actual funding or withdrawal claim |

| V3 immediate owner return simulation | LAB / CI VERIFIED (synthetic) | Exact pinned dual-RPC eth_call for frozen owner-return call, independently reconstructed action ID and signed read scope recheck; no transaction, withdrawal authorization or protected-funds certification |

| Exact V3 owner return admission | LAB / CI VERIFIED (HTTP positive, extension negative) | Default-disabled, session/capability/custody-bound single-use intent, exact zero-value outer call and internal economic amount; atomic durable admission and separate wallet approval; synthetic HTTP positive and browser negative coverage, no real withdrawal |

| Composed V3 owner return through customer UI and MV3 | LAB / CI VERIFIED (synthetic) | Real authenticated server and database with synthetic RPC/provider; cancel creates no intent, exact one forward after durable receipt, consumed-intent replay no additional forward; no actual withdrawal or settlement |

| V3 exact transaction call / admission receipt association | LAB / CI VERIFIED (synthetic) | Unique reported hash, exact contract target, outer zero and canonical calldata; two-RPC comparison and customer history link; requested amount only, no causal proof or reservation release |

| V3 matching immediate execution event | LAB / CI VERIFIED (synthetic) | Exact registered code, policy identity, mined event and reconstructed action ID from both configured RPCs; reported outflow only, no causal proof or settlement |

| Populated 028–032 delta migration compatibility | LAB / CI VERIFIED (synthetic PG16) | Existing rows preserved, legacy defaults and negative constraints verified; not production backup or upgrade |

| Admin customer-governance counts and navigation | LAB / CI VERIFIED (synthetic PG16 and browser) | Authenticated aggregate database counts, distinct operator session, no raw customer identities, explicit unavailable state; hosted acceptance pending |

| WETH candidate source reproduction | PARTIAL IDENTITY EVIDENCE / LIVE RPC BLOCKED | Executable section matches two explorer records after recompilation; full runtime differs in metadata; current canonical RPC code agreement not established; no revoke authorization |

| Exact WETH zero-approval admission | LAB / CI VERIFIED (synthetic) | Default-disabled, fixed token, owner-consented exact spender/zero allowance, full runtime and dual RPC preflight, one-use durable admission; no real revocation or settlement certified |

| WETH zero-approval event and current allowance | LAB / CI VERIFIED (synthetic) | Exact receipt/call association, matching event at transaction block and separate current allowance at fresh shared anchor; full runtime checked, no causal proof or permanent permission guarantee |

| Original bounded native agent grant contract | LAB / CI VERIFIED (local EVM) | 12/12 original revision; successor signed-decision candidate compilation FAIL, no tests; no deployed authority or account binding |

## November 25 reconciliation

The historical baseline rows are superseded for integrated-candidate claims by the [consolidated checkpoint](../docs/integration-evidence-2026-11-25.md). CI 45665413574 succeeded (12/12 EVM, 284/284 integrated); successor CI 45671320044 failed compiling. No LIVE VERIFIED claim.
