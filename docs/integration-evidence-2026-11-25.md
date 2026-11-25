# KINEGuard 1.0 — Integrated evidence checkpoint / Corte de evidencia

**2026-11-25 · Product Atlas publication, not product release.** Reviewed the 100 commit entries returned by private PR #18 and exact successful CI logs and successor failure. Commit titles are navigation aids, not proof by themselves. Private links require authorized access.

- Last qualified integrated snapshot: [1f01d49](https://github.com/VerifywithAION/aion-guard-ui/commit/1f01d49a0d5312cf64114f54b2a5139496aaf9d6), [CI 45665413574](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45665413574), SUCCESS: 12/12 local EVM tests; 284/284 combined integrated checks.
- Successor [b865a6b](https://github.com/VerifywithAION/aion-guard-ui/commit/b865a6bef1548de15f182ee5b1c49a1eb452a57e), [CI 45671320044](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45671320044), FAIL at Solidity compilation (stack too deep). No successor EVM or downstream regression result. Prior PASS remains historical evidence.
- Private [PR #18](https://github.com/VerifywithAION/aion-guard-ui/pull/18) remains draft and unmerged.

| Mechanism | Verified scope at qualified snapshot | Remaining boundary |
|---|---|---|
| Spending Limits | R1A/B, R1V/W, R1AE–AH: exact saved limits, stale and over-limit zero-forward denial, single-use durable admission, conservative cumulative cap and owner readback | Not settled spend, rolling reset or hosted acceptance |
| Protected Funds | R1N–P, R1Q–AD, R1AN–AP: EOA observation, V2 signed read scope, V3 custody and two-RPC observation, funding UI composition, simulation, exact return admission/event | No new physical funding/return or certified protected amount |
| Browser Protection | Historical GP1A Chrome/MetaMask/Sepolia; R1C/D, R1V/W, R1AK synthetic UI/MV3/provider, reviewed argument integrity and provider-error distinction | Not arbitrary provider interception or current production coverage |
| Emergency Controls | R1G/J saved browser pause, zero forwards, signed recovery, old capability rejection | No universal freeze or new live veto |
| Recipient Rules | R1E owner-scoped editable deny rule, cross-account rejection, zero forwards | Covered native Sepolia only |
| App Approvals | R1F/K/AL unsupported calls fail closed; exact-pair inspection; default-disabled WETH zero-approval admission and separate event/current allowance | No actual revoke or current live code qualification |
| Agent Access | R1L/M/AM origin deny, signed read budget/expiry, exhaustion and revoke; original native escrow EVM 12/12 | No read-token spending/signing; successor compilation failed; signer/policy/UI not integrated |
| Transaction History | R1X/AI/AJ/AK/AP and WETH exact hash, candidate association, two-provider observation, optional nonce, V3/WETH event evidence | No causal proof, full indexing, independent finality or settlement |
| Security Decisions | R1A/B/C/D/I durable account-owned changes and pre-forward decisions, distinct provider reports; same emergency decision across four views | Receipt is not chain execution; hosted acceptance pending |
| Admin (cross-cutting) | R1H/R/S/T operator isolation, custody intake/revoke, RPC observation, authenticated database-backed aggregate counts and navigation | Hosted owner workflow and production data not independently certified |

The successful job emitted R0 nine-mechanism truth PASS; R1A/B six policy events and six owner-scoped receipts; R1Q owner binding 18/18; R1R custody 22/22; R1S dual-RPC preflight 27/27 and admin intake/revoke 29/29; combined 284/284. E2E-05 runtime markers included recipient-denial, emergency pause/resume, four-view receipt identity, origin-denial, read grants, balance, V2 association, synthetic self-transfer, over-limit and provider-error. Composed V3 owner return and WETH admission/readback passed synthetic RPC/provider tests. Admin counts used the disposable database. Component and aggregate counts can overlap; do not sum them.

The original agent contract passed 12/12 tests. Its successor requires independently signed exact decisions but failed before runtime. Dynamic policy enforcement, signer custody, account integration and persistent evidence still need qualification.

## Release gates

115-case human acceptance master remains unqualified for current integrated release (case-by-case completion not re-adjudicated here); hosted preview, fresh RPC qualification, backup and populated migration 033 upgrade qualification remain open. No new physical chain transaction, deployment or production DB change is certified. Preserve historical GP1A/V3 evidence separately. Authentic promotional video follows customer/Admin acceptance.

## Resumen en español

Se contrastaron las 100 entradas de commits del PR integrado con los resultados exactos de CI. La revisión aprobada obtuvo 12/12 pruebas contractuales locales y 284/284 comprobaciones integradas sintéticas. La revisión posterior de firma individual falló al compilar sin ejecutar nuevas pruebas EVM. Los nueve mecanismos tienen evidencia acotada de integración o histórica, y Admin evidencia sintética adicional. No se certifica ejecución completa en producción. Aceptación humana, calificación RPC, migración, custodia del firmante, integración monetaria y video pendientes. Código privado, credenciales, datos de clientes y logs crudos excluidos.

[Capability matrix](capability-matrix.md) · [Beta status](beta-status.md) · [ES controls](es/controls.md) · [EN controls](en/controls.md) · [Claim evidence](../evidence/claim-to-evidence.md)


## Signed-decision candidate repair — November 25, 2026

The Solidity compilation failure prompted a narrow refactor of the private candidate: digest construction and signature validation are isolated from the execution function, with the same public interface, checks and test suite. No compiler settings or test assertions changed. [Repair commit 55e2227](https://github.com/VerifywithAION/aion-guard-ui/commit/55e22278ee33c98c410b19dae4d7434162949f9d); [CI 45674576412](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45674576412) in progress at publication. This is a source repair, not a new EVM PASS. The earlier 12/12 and 284/284 evidence remains scoped to the last qualified snapshot. No deployment, signing service, production authority or actual spending is certified.
