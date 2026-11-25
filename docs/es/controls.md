# Los nueve controles

## Avance de integración — 24 de noviembre de 2026

KINEGuard 1.0 busca que los nueve controles operen desde **My Account → Portfolio → View Details**, con KINE OS evaluando solicitudes antes de la ejecución cubierta. Esta tabla describe evidencia del candidato, no disponibilidad actual en kineguard.com.

| Control | Avance comprobado y alcance |
|---|---|
| Spending Limits | CI: límite por transferencia Sepolia persistente, endurecimiento inmediato, aumento diferido y bloqueo previo al proveedor. Validación del estado exacto revisado y admisión durable de un solo uso: CI PASS. Techo acumulativo conservador optativo: CI PASS. Lectura de importe contabilizado, capacidad restante y recibos de cambios del techo implementados, CI pendiente. Ventana móvil y liquidación independiente aún pendientes. |
| Protected Funds | Identidad histórica del contrato V3 de ETH nativo contrastada byte a byte; lectura económica actual no certificada. Saldo EOA observado no equivale a fondos gobernados. |
| Browser Protection | Prueba física histórica Chrome/MetaMask/Sepolia y CI integrada de forwarding acotado; aceptación física del candidato pendiente. |
| Emergency Controls | CI de pausa y recuperación de ruta browser; veto histórico V3 sobre pendientes. No congelamiento universal. |
| Recipient Rules | CI de denegación de destinatario en transferencia nativa Sepolia cubierta; no regla global. |
| App Approvals | Inspección de pares token/spender conocidos; revocación efectiva no certificada. |
| Agent Access | CI de restricciones de origen y delegación de lectura acotada; no autoridad monetaria delegada. |
| Transaction History | CI de consulta puntual de hash Sepolia y recibo por un RPC; no indexación completa ni finalidad independiente. |
| Security Decisions | CI de recibos persistentes previos al proveedor y lectura por cuenta; no prueba de firma, envío o finalización on-chain. |

**Ejemplo explicativo:** un límite de 0.001 ETH podría rechazar una solicitud cubierta de 0.002 ETH antes de MetaMask. No representa una transacción nueva. Una configuración modificada desde otra pestaña debe revisarse nuevamente antes de confirmar un cambio; el software no adquiere autoridad de firma.

**Evidencia V3:** recuperación del artefacto Solidity 0.8.20, reproducción de plantilla, dos respuestas RPC históricas y reconstrucción de los valores inmutables con coincidencia en los 8,254 bytes; identidad de política recalculada independientemente. El contrato estudiado limita ETH nativo mediante ejecución inmediata/diferida, exposición por ventana, reserva y veto de pendientes. Sus parámetros son inmutables; no ofrece congelamiento global ni cobertura ERC-20/NFT. La lectura económica reciente permanece bloqueada por frescura insuficiente. No es auditoría ni prueba independiente de finalidad.

[Estado de beta](../beta-status.md) · [Pruebas históricas](historical-proofs.md)

## 1. Spending Limits

Límite por acción/ventana y cambios HARDEN/WEAKEN; guardar no equivale a ejecutar.

Flujo: seleccionar wallet/registro, verificar fuente, leer estado, explorar control, comparar decisión/receipt disponible y registrar la limitación.

## 2. Protected Funds

Distingue fondos en una ruta gobernada de saldos EOA observados.

Flujo: seleccionar wallet/registro, verificar fuente, leer estado, explorar control, comparar decisión/receipt disponible y registrar la limitación.

## 3. Browser Protection

Revisa solicitudes soportadas antes de proveedor; GP1A no cubre toda EOA.

Flujo: seleccionar wallet/registro, verificar fuente, leer estado, explorar control, comparar decisión/receipt disponible y registrar la limitación.

## 4. Emergency Controls

Distingue cancelación, alerta y veto Safety Authority, no freeze universal.

Flujo: seleccionar wallet/registro, verificar fuente, leer estado, explorar control, comparar decisión/receipt disponible y registrar la limitación.

## 5. Recipient Rules

Reglas de destinatario en scopes soportados, sin promesa de control general.

Flujo: seleccionar wallet/registro, verificar fuente, leer estado, explorar control, comparar decisión/receipt disponible y registrar la limitación.

## 6. App Approvals

Escáner read-only de token, spender y allowance, sin revocación automática.

Flujo: seleccionar wallet/registro, verificar fuente, leer estado, explorar control, comparar decisión/receipt disponible y registrar la limitación.

## 7. Agent Access

Identidad, propuesta, budgets y permisos, sin firma implícita.

Flujo: seleccionar wallet/registro, verificar fuente, leer estado, explorar control, comparar decisión/receipt disponible y registrar la limitación.

## 8. Transaction History

Observaciones y registros no equivalen a toda la cadena.

Flujo: seleccionar wallet/registro, verificar fuente, leer estado, explorar control, comparar decisión/receipt disponible y registrar la limitación.

## 9. Security Decisions

Razones y receipts ligados a action exacta, sin atribuir finality.

Flujo: seleccionar wallet/registro, verificar fuente, leer estado, explorar control, comparar decisión/receipt disponible y registrar la limitación.

![Wallet Controls](../../assets/screenshots/local-controlled/customer-spending-limits.png)

[Arquitectura](architecture.md)
