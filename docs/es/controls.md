# Los nueve controles

## Avance de integración — 25 de noviembre de 2026

KINEGuard 1.0 busca que los nueve controles operen desde **My Account → Portfolio → View Details**, con KINE OS evaluando solicitudes antes de la ejecución cubierta. Esta tabla describe evidencia del candidato, no disponibilidad actual en kineguard.com.

| Control | Avance comprobado y alcance |
|---|---|
| Spending Limits | CI: límite por transferencia Sepolia persistente, endurecimiento inmediato, aumento diferido y bloqueo previo al proveedor. Validación del estado exacto revisado y admisión durable de un solo uso: CI PASS. Techo acumulativo conservador optativo: CI PASS. Lectura de importe contabilizado, capacidad restante y recibos de cambios del techo: CI PASS tras reparación. Ventana móvil y liquidación independiente aún pendientes. |
| Protected Funds | Identidad histórica del contrato V3 de ETH nativo contrastada byte a byte; lectura económica actual no certificada. Saldo EOA observado no equivale a fondos gobernados. Fondeo voluntario de prueba hacia V3 asociado, mediante la política de navegador y aprobación explícita de MetaMask: CI PASS de composición con respuestas V3 de fixture y proveedor sintético; no acredita protección ni retiro. Simulación de retorno inmediato al propietario mediante dos RPC y cálculo del identificador de acción del contrato: CI PASS sintético. Admisión de retorno contractual con intención de uso único, importe económico interno y consentimiento separado: CI PASS de admisión HTTP sintética y rechazo en extensión sin intención; prueba positiva integrada UI/MV3/servidor: CI PASS sintético. Deshabilitada por defecto, sin retiro físico certificado. |
| Browser Protection | Prueba física histórica Chrome/MetaMask/Sepolia y CI integrada de forwarding acotado; aislamiento de argumentos durante la revisión: CI PASS. Aceptación física del candidato pendiente. |
| Emergency Controls | CI de pausa y recuperación de ruta browser; veto histórico V3 sobre pendientes. No congelamiento universal. |
| Recipient Rules | CI de denegación de destinatario en transferencia nativa Sepolia cubierta; no regla global. |
| App Approvals | Inspección de pares token/spender conocidos; consulta autenticada de un par exacto en Sepolia con bloque finalizado fijado: CI PASS sintético. No verifica el estándar del contrato ni la seguridad del spender. Revocación efectiva no certificada.  Admisión WETH exacta a cero y evento/allowance actual separado: CI PASS sintético, deshabilitada por defecto. |
| Agent Access | CI de restricciones de origen y delegación de lectura acotada; presupuesto de 1–10 lecturas y vigencia de 1–30 minutos seleccionables y firmados: CI PASS sintético. No autoridad monetaria delegada.  Contrato nativo original 12/12 EVM local; revisión firmada posterior FAIL de compilación, no desplegada. |
| Transaction History | CI de consulta puntual de hash Sepolia y recibo por un RPC. Asociación candidata entre hash reportado y decisión persistente, comparando remitente, destino, importe y calldata nativo: CI PASS. Comprobación adicional de coincidencia entre dos RPC, inclusión en bloque y ancla finalizada reciente compartida: CI PASS. Comparación adicional del nonce explícito revisado: CI PASS para coincidencia y discrepancia. No prueba causal, indexación completa ni finalidad independiente.  Eventos V3/WETH correlacionados sintéticamente, allowance actual separado. |
| Security Decisions | CI de recibos persistentes previos al proveedor y lectura por cuenta. Captura del hash reportado en el resultado del proveedor: CI PASS. Persistencia del nonce explícito de solicitud: CI PASS; sigue siendo observación no verificada, no prueba de firma, envío o finalización on-chain.  Mismo recibo de emergencia en cuatro superficies; contextos V3/WETH sintéticos. |

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

La consulta del retorno V3 por hash ahora incluye una asociación candidata con los campos exactos de la llamada y el recibo de admisión (CI PASS sintético); el importe interno solicitado no equivale a una salida contractual verificada. Sin liquidación ni liberación de reservas.

La nueva comprobación del evento contractual V3 reconstruye el identificador de la acción minada con su nonce y tiempo de ejecución, y exige coincidencia entre dos RPC y el código registrado (CI PASS sintético). No acredita causalidad ni liquidación.

El candidato incorpora indicadores agregados de cuentas, sesiones vigentes, registros de wallets y agentes, políticas, pausas y decisiones persistentes en Admin, exclusivamente mediante sesión administrativa; CI PASS en entorno sintético. No son cifras de fondos protegidos ni de ejecución on-chain.

Para la futura revocación ERC-20 en Sepolia, la fuente pública del WETH candidato fue reproducida con su compilador original: 1,733 bytes ejecutables coinciden con los dos registros de explorador, de 1,786 bytes de runtime total. Los metadatos difieren. No se estableció coincidencia actual mediante dos RPC en un bloque finalizado fresco; la revocación sigue sin habilitarse.

El candidato incorpora una solicitud de revocación WETH de Sepolia deliberada y acotada: únicamente approve(spender, 0), valor externo cero, consentimiento explícito, comprobación de runtime completo y permiso previo mediante dos RPC, intención de un solo uso ligada a cuenta/wallet/política y recibo persistente antes del proveedor. Deshabilitada por defecto; CI PASS integrado sintético y calificación actual del contrato bloqueada. La firma y el resultado real permanecen bajo control del propietario. El hash reportado no prueba revocación; volver a consultar el permiso exacto tras confirmación. No admite aumentos de allowance ni llamadas arbitrarias.

El siguiente candidato conecta el hash reportado con el recibo exacto, comprueba el evento WETH Approval(owner, spender, 0) y observa por separado el allowance vigente mediante dos RPC y el código registrado. CI PASS sintético. Una aprobación posterior puede restaurar el permiso; no se acredita causalidad ni finalidad criptográfica independiente.

Agent Access: candidato contractual separado para delegación monetaria nativa acotada, con agente y destinatario fijos, presupuesto no renovable, límite por operación, vigencia y revocación. Todavía no desplegado ni conectado a la cuenta del cliente; pruebas EVM pendientes. No amplía los grants de lectura ni la autoridad V3.

Admin transversal: conteos agregados autenticados, aislamiento de operador y custodia/observación en CI sintético. Aceptación alojada pendiente. [Corte de evidencia](../integration-evidence-2026-11-25.md).
