<div align="center">
<img src="assets/brand/wallet-guard-mark.png" width="110" alt="Original KINEGuard logo"/>

# KINEGuard · KINE OS

**KEY IS NOT ENOUGH**

[Español](README.md) · [English](README_EN.md) · [Manual completo](docs/es/index.md)
</div>

**Perfil para inversionistas/IA:** [Company ES](company_es.md) · [Company EN](company.md) · [Plan por etapas](docs/es/investor/scale-plan.md)


## 1. Producto y promesa

KINEGuard permite inspeccionar wallets, entender approvals, revisar consecuencias antes de firmar y seguir agentes, decisiones y evidencia. KINE OS es el plano de política y gobernanza, con protección efectiva solo en rutas verificadas. Conectar una EOA no la convierte en cuenta gobernada.

![KINEGuard screenshot](assets/screenshots/local-controlled/customer-spending-limits.png)

## 2. Recorrido práctico del usuario

1. Conectar una wallet con acceso público en Connect.
2. Confirmar dirección, red y estado en Wallet Posture.
3. Revisar allowances y spenders en Approval Intelligence.
4. Explorar Action Review antes de comprometer una transacción.
5. Consultar Guardian, Evidence y receipts con sus fuentes.
6. Examinar Governed Protection y su evidencia histórica como ruta distinta.

## 3. Todas las páginas y secciones de los dropdowns

### Protección

| Opción | Manual detallado | Ruta real |
|---|---|---|
| Connect | [Abrir](docs/es/menus/protection/connect.md) | [/connect](https://kineguard.com/connect) |
| Wallet Posture | [Abrir](docs/es/menus/protection/wallet-posture.md) | [/wallet-health](https://kineguard.com/wallet-health) |
| Approval Intelligence | [Abrir](docs/es/menus/protection/approval-intelligence.md) | [/approvals](https://kineguard.com/approvals) |
| Action Review | [Abrir](docs/es/menus/protection/action-review.md) | [/preview](https://kineguard.com/preview) |
| Guardian | [Abrir](docs/es/menus/protection/guardian.md) | [/guardian](https://kineguard.com/guardian) |
| Governed Protection | [Abrir](docs/es/menus/protection/governed-protection.md) | [/kine](https://kineguard.com/kine) |

![KINEGuard Protection](assets/screenshots/local-controlled/customer-spending-limits.png)

### Agentes

| Opción | Manual detallado | Ruta real |
|---|---|---|
| Identity | [Abrir](docs/es/menus/agents/identity.md) | [/agent-arena#identity](https://kineguard.com/agent-arena#identity) |
| Permissions | [Abrir](docs/es/menus/agents/permissions.md) | [/agent-arena#permissions](https://kineguard.com/agent-arena#permissions) |
| Requests | [Abrir](docs/es/menus/agents/requests.md) | [/agent-arena#requests](https://kineguard.com/agent-arena#requests) |
| Decisions | [Abrir](docs/es/menus/agents/decisions.md) | [/agent-arena#decisions](https://kineguard.com/agent-arena#decisions) |
| History | [Abrir](docs/es/menus/agents/history.md) | [/receipts#history](https://kineguard.com/receipts#history) |

![KINEGuard Agents](assets/screenshots/local-controlled/agent-arena.png)

### Economía de tokens

| Opción | Manual detallado | Ruta real |
|---|---|---|
| Reasoning Needed? | [Abrir](docs/es/menus/token-economy/reasoning-needed.md) | [/token-economy#reasoning-needed](https://kineguard.com/token-economy#reasoning-needed) |
| Reuse | [Abrir](docs/es/menus/token-economy/reuse.md) | [/token-economy#reuse](https://kineguard.com/token-economy#reuse) |
| Provider Calls | [Abrir](docs/es/menus/token-economy/provider-calls.md) | [/token-economy#provider-calls](https://kineguard.com/token-economy#provider-calls) |
| Measurements | [Abrir](docs/es/menus/token-economy/measurements.md) | [/token-economy#measurements](https://kineguard.com/token-economy#measurements) |

![KINEGuard Token Economy](assets/screenshots/local-controlled/token-economy.png)

### Evidencia

| Opción | Manual detallado | Ruta real |
|---|---|---|
| History | [Abrir](docs/es/menus/evidence/history.md) | [/receipts#history](https://kineguard.com/receipts#history) |
| Structured Records | [Abrir](docs/es/menus/evidence/structured-records.md) | [/receipts#structured-records](https://kineguard.com/receipts#structured-records) |
| Sessions | [Abrir](docs/es/menus/evidence/sessions.md) | [/session-intelligence](https://kineguard.com/session-intelligence) |
| Audit | [Abrir](docs/es/menus/evidence/audit.md) | [/audit](https://kineguard.com/audit) |

![KINEGuard Evidence](assets/screenshots/local-controlled/admin-metamask-sepolia.png)

## 4. Galería auténtica: mismas imágenes en ES y EN

| Superficie | Captura del producto local |
|---|---|
| Spending Limits | ![Spending Limits](assets/screenshots/local-controlled/customer-spending-limits.png) |
| Admin Sepolia | ![Admin Sepolia](assets/screenshots/local-controlled/admin-metamask-sepolia.png) |
| Wallet Portfolio | ![Wallet Portfolio](assets/screenshots/local-controlled/admin-portfolio-wallets.png) |
| Tokenized Assets | ![Tokenized Assets](assets/screenshots/local-controlled/admin-portfolio-assets.png) |
| Treasury Agent | ![Treasury Agent](assets/screenshots/local-controlled/treasury-agent.png) |
| Agent Arena | ![Agent Arena](assets/screenshots/local-controlled/agent-arena.png) |
| Token Economy | ![Token Economy](assets/screenshots/local-controlled/token-economy.png) |
| Wallet Posture | ![Wallet Posture](assets/screenshots/local-controlled/kine-lite-wallet-posture.png) |
| Treasury Reserve | ![Treasury Reserve](assets/screenshots/local-controlled/asset-treasury-reserve.png) |

Las capturas son del KINEGuard local controlado, no una certificación del deployment de Hostinger. [Screenshot manifest](evidence/screenshot-manifest.md).

## 5. Arquitectura y estados de protección

OBSERVED, PRE-EXECUTION COVERED y KINE GOVERNED son estados diferentes. La firma, la decisión, el forwarding, la ejecución y la confirmación también son eventos distintos.

![Execution boundaries](assets/diagrams/execution-boundaries.svg)

[Arquitectura](docs/es/architecture.md)

## 6. Veto, tiempo y gobernanza híbrida

Browser Cancel/DENY antes de MetaMask no es el veto contractual de Safety Authority. HARDEN puede endurecer protección sin debilitarla; WEAKEN exige delay/revisión cuando la política lo requiere. Los ensayos GP1A y V3 son históricos y acotados a Sepolia.

![Veto architecture](assets/diagrams/veto-architecture.svg)

![Governance timing](assets/diagrams/governance-timing.svg)

[Guía técnica](docs/es/architecture.md)

## 7. Economic Exposure

Más que un límite por transferencia: capacidad acumulada, ventanas, realized, reserved, delegated, remaining, anti-fragmentación y concurrencia. El cálculo conceptual no demuestra un BOUND en producción.

![Economic exposure](assets/diagrams/economic-exposure.svg)

[Capítulo de mecanismos](docs/es/architecture.md)

## 8. Los nueve controles y sus límites

1. Spending Limits
2. Protected Funds
3. Browser Protection
4. Emergency Controls
5. Recipient Rules
6. App Approvals
7. Agent Access
8. Transaction History
9. Security Decisions

[Manual de controles](docs/es/controls.md)

## 9. Agentes, Token Economy y KINE AI

Una identidad de agente, un permiso proposal-only o una clave BYOK no conceden firma de wallet. Token Economy mide o estima trabajo de inferencia, no límites de fondos. KINE AI es una hoja de ruta: AI understands; KINE governs; humans retain control.

![AI boundary](assets/diagrams/ai-boundary.svg)

[Agentes](docs/es/menus/agents/index.md) · [Token Economy](docs/es/menus/token-economy/index.md)

## 10. Pruebas históricas y fuente de verdad

GP1A T1–T4 cubre Chrome/MetaMask/Sepolia en solicitudes soportadas. V3 3B-1 a 3B-4 prueba acciones permitidas, pending, veto y maturity sobre ETH nativo de una cuenta gobernada Sepolia. No equivale a certificación del despliegue actual.

[Pruebas](docs/es/historical-proofs.md)

## 11. Investigación e integración VAIOS/Claude

La documentación permite explorar una conexión conceptual pre-sign entre agente, identidad, política auténtica, decisión, veto y recibo, sin afirmar asociación ni integración publicada.

[AGENTS.md](AGENTS.md) · [llms.txt](llms.txt) · [Capability Catalog](docs/capability-catalog.json)

## 12. Límites y referencias

UI observada, pruebas CI, imágenes locales, prueba Sepolia y roadmap deben clasificarse por separado. KINEGuard no ofrece bloqueo universal EOA, protección mainnet certificada ni archivo inmutable hospedado en la beta.

[https://kineguard.com](https://kineguard.com) · [Manual completo](docs/es/index.md)


## 13. Chrome Extension — Protección antes del proveedor

La extensión MV3 dispone de un manual específico sobre avisos, solicitudes exactas, ALLOW/WARN/DENY, Continue/Cancel, errores de observabilidad, trazas y pruebas históricas GP1A en Chrome/MetaMask/Sepolia. Incluye una matriz de expansión prevista a Rabby, Coinbase, Solana, Bitcoin, hardware, Safe y WalletConnect, **sin atribuirles una certificación de bloqueo que aún no existe**.

- [Manual completo de la extensión (ES)](docs/es/chrome-extension/index.md)
- [Compatibilidad y estatus por wallet (ES)](docs/es/chrome-extension/wallet-coverage.md)
- [Pruebas, capturas y límites (ES)](docs/es/chrome-extension/proofs-and-screenshots.md)

## 14. Perfil de empresa y escalamiento

El [perfil para inversionistas en español](company_es.md), su [versión inglesa](company.md) y el [plan de equipo, contratación y escenarios de capital](docs/es/investor/scale-plan.md) distinguen evidencia de producto, roles futuros y financiación hipotética. No se presenta capital levantado, clientes ni ingresos ficticios.
