# Agentes / Permissions

[ES](../../../../docs/es/menus/agents/permissions.md) · [EN](../../../../docs/en/menus/agents/permissions.md) · [Index](../../index.md)

**Ruta:** [/agent-arena#permissions](https://kineguard.com/agent-arena#permissions) · **Tipo:** sección interna

## 1. Propósito

Describe permisos, presupuestos, acciones, activos y plazos de un agente.

## 2. Cómo lo usa el usuario

1. Entra en Permissions y selecciona el mismo agente y objeto económico que estás investigando.
2. Distingue Proposal-only, observación, simulación y delegación verificada.
3. Comprueba máximo por acción, destinos, activos y budget solo cuando haya fuente de política.
4. Sigue el request correspondiente a Decisions para comprobar resultado y recibo.

## 3. Qué mecanismo representa

La ruta pertenece a la familia Agentes y debe relacionarse con identidad, política, request exacto y fuente de evidencia.

## 4. Evidencia y límites

Un límite de 500 dólares en una tarjeta local puede ser descriptivo, no presupuesto aplicado contractualmente.

La visibilidad de una pantalla pública no equivale a aceptación humana de runtime ni a protección universal de fondos.

La delegación de lectura acotada se ha probado en CI sintético. La autorización monetaria nativa separada permanece como candidato contractual sin desplegar: la versión contractual inicial obtuvo 12/12 PASS en EVM local; la revisión que exige una decisión individual firmada falló en compilación de Solidity; integración con la política del cliente y custodia del firmante pendientes. No equivale a permisos efectivos de gasto desde esta pantalla.

## 5. Imagen relacionada

![KINEGuard related controlled-local screenshot](../../../../assets/screenshots/local-controlled/treasury-agent.png)

*Captura auténtica del KINEGuard local relacionada con el tema; no es una captura certificada de esta URL en Hostinger.*

## 6. Fuentes

- [Public UI](https://kineguard.com/agent-arena#permissions)
- [KINEGuard master protocol](https://app.notion.com/p/41bd5f4fa5e3814e948bf911dddef7ef)
- [Arquitectura](../../architecture.md)
- [Pruebas históricas](../../historical-proofs.md)

[← Volver al menú](index.md)

**Candidato de cuenta:** la reparación contractual aprobó la etapa EVM local; regresión integrada pendiente. Nuevo formulario de presupuesto nativo evalúa política guardada, destinatario, pausa y capacidad de admisión. Resultado favorable NO AUTORIZADO; sin firma, reserva, recibo duradero o ejecución. CI del formulario pendiente. [Mecanismo](../../../../mechanisms/07-agent-access.md).

**Actualización del candidato:** contrato con decisión firmada 16/16 EVM local y 284/284 integración sintética PASS. Nueva asociación de clave EOA del agente mediante consentimiento del propietario y firma del agente, persistencia, caducidad y revocación, pendiente de CI. No prueba identidad del software, no registra contrato ni concede gasto. [Mecanismo](../../../../mechanisms/07-agent-access.md).

**Actualización:** evaluación de presupuesto con política guardada PASS de HTTP/UI en CI sintético (16/16 EVM, 284/284 integración). Asociación de clave doble: etapa E2E-05 aprobada, ejecución completa pendiente. Verificador interno de contrato registrado y lectura en dos RPC: candidato pendiente de CI, sin API de cliente ni autoridad. [Mecanismo](../../../../mechanisms/07-agent-access.md).

**Cierre de CI:** asociación doble de claves EOA PASS de runtime y regresión integrada 284/284; 16/16 EVM. Sin autoridad monetaria ni identidad del software. Migración 034 solo en entorno sintético, no upgrade de producción.

**Actualización:** verificación contractual RPC sintética 22/22 PASS, 16/16 EVM y 284/284 integración. Nuevo candidato de reconstrucción de bytecode compilado con nueve inmutables y comparación con EVM local, CI pendiente. No es registro contractual real ni autorización de gasto. [Mecanismo](../../../../mechanisms/07-agent-access.md).

**Actualización:** procedencia compilada 18/18 controles dentro de 17/17 EVM, 22/22 RPC sintético y 284/284 integración PASS. Nuevo candidato de lectura contractual de cuenta en View Details, fixture local sellado, doble firma vigente y política vinculada; CI pendiente. Fuera del laboratorio no hay registro real habilitado ni autoridad monetaria. [Mecanismo](../../../../mechanisms/07-agent-access.md).

**Actualización:** lectura contractual vinculada a cuenta y asociación vigente PASS en laboratorio, 17/17 EVM, 22/22 RPC y 284/284 integración. Candidato de decisión firmada por agente, recibo y reserva sintética atómica pendiente de CI; no autoriza gasto y no opera fuera del laboratorio. Cap compartido configurado bloquea la reserva hasta integrar contabilidad cruzada. [Mecanismo](../../../../mechanisms/07-agent-access.md).

**Adjudicación:** CI de decisión durable falló en TypeScript (dos conversiones numéricas no tipadas); E2E no ejecutado. Reparación de validación estricta de datos PostgreSQL publicada en `fd357af`, CI 45690781711 pendiente. No PASS de decisión durable. Última integración calificada `aa2a836`. [Mecanismo](../../../../mechanisms/07-agent-access.md).

**Actualización:** reparación de decisión durable supera TypeScript y build; E2E pendiente. Candidato de invalidación persistente de desafíos de doble firma pendientes tras asociación exitosa o revocación explícita, migración 036 y CI 45691992645 pendientes. No equivale a revocación on-chain ni autoridad monetaria. [Mecanismo](../../../../mechanisms/07-agent-access.md).

**Resultado confirmado:** CI 45690781711 SUCCESS, decisión durable y reserva sintética concurrente PASS, 17/17 EVM, 22/22 RPC y 284/284 integración. Sin firma ejecutable ni capacidad real. Sucesor de invalidación de desafíos pendiente.

**Actualización:** invalidación de dos desafíos pendientes PASS, 17/17 EVM, 22/22 RPC y 284/284 integración. Nuevas pruebas de bloqueo de solicitudes firmadas tras pausa, deny de destinatario/origen y cambio de cap pendientes de CI; sin contabilidad compartida ni autoridad real. [Mecanismo](../../../../mechanisms/07-agent-access.md).

**Actualización:** candidato de contabilidad conservadora compartida de laboratorio: reservas sintéticas del agente cuentan para cap navegador y readback/propuesta, con desglose explícito. Fuera del laboratorio se conserva cálculo navegador-only. Admisión del agente bajo cap sigue bloqueada hasta nueva calificación; CI pendiente. Sin firma ejecutable ni fondos reales.

**Actualización:** gobernanza cruzada y contabilidad compartida navegador/readback PASS (CI 45693990497 y 45694513194). Candidato de admisión bidireccional con segundo contrato local y cap de 2 wei, competencia concurrente y suma persistida; CI 45698689165 pendiente. Sin registro real ni firma ejecutable.

**Actualización:** candidato de preservación de bytes exactos del recibo y verificación independiente de integridad histórica, migración 037, siete recibos y siete controles negativos previstos; CI 45699228431 pendiente. No certifica autoridad del servidor, política actual ni firma ejecutable. Los recibos históricos sin bytes originales no se reconstruyen.

**Actualización:** admisión bidireccional e integridad de siete recibos/siete negativos PASS, CI 45699228431. Candidato de ejecución EVM local con recibo persistido, revalidación de política/asociación, firmante independiente sintético, dos eventos y saldo; CI 45705150397 pendiente. Reproducción local, no continuidad de cadena original, firma productiva ni fondos reales.

**Actualización:** puente recibo → firma independiente sintética → ejecución EVM local PASS, CI 45705150397. Candidato de procedencia de creación directa (transacción, constructor, valor, dirección CREATE, recibo, bloque y runtime), 30 controles previstos; CI 45707353028 pendiente. No registro operator-trusted real, finalidad independiente ni firma productiva.

**Actualización:** procedencia contractual 30/30 PASS, CI 45707353028. Candidato de registro durable en cuarentena con admisión/revocación Admin y lectura cliente, migración 038 y CI 45708932605 pendiente. No certifica despliegue real, finalidad ni firma productiva; revocación del registro no es revocación on-chain.

**Actualización:** candidato de inspección de registro en cuarentena mediante dos RPC configurados por servidor, sin promover autoridad ni certificar finalidad. CI 45709491820 pendiente; posible discrepancia HTTP 400/503 ante evidencia RPC alterada. Registro anterior también pendiente. Sin firma ni ejecución real.

**Actualización:** registro Admin y lectura de cuarentena PASS, CI 45708932605. Inspección RPC CI 45709491820 FAIL por HTTP 400 en vez de 503; evidencia alterada rechazada. Reparación puntual `2843072`, CI 45711379065 pendiente. Sin registro live, autoridad ni firma productiva.

**Actualización:** inspección RPC de creación contractual en cuarentena PASS, CI 45711379065. Candidato de prueba de control de clave del firmante externo vinculada a registro, política y sesión de operador, migración 039, CI 45715112656 pendiente. No custodia productiva, permiso ejecutable ni registro live certificado.

**Actualización:** CI 45715112656 FAIL por cuatro errores TypeScript TS2769 al tratar fechas PostgreSQL; E2E no ejecutado. Reparación estricta `ba2e68f`, CI 45716035102 pendiente. Sin prueba de identidad calificada, custodia productiva ni permiso ejecutable nuevo.


**Actualización:** CI 45716035102 SUCCESS sobre `ba2e68f`; logs confirman `AGENT_EXTERNAL_AUTHORIZER_KEY_CONTROL` PASS, identidad sintética solamente, TypeScript y regresión integrada 284/284 PASS. Sin custodia protegida, permiso ejecutable, registro live ni ejecución Sepolia. Siguiente: custodia externa protegida y autorización ejecutable fail-closed en el mismo PR aislado; Human Acceptance y release pendientes.


**Actualización:** candidato [2d939f1](https://github.com/VerifywithAION/aion-guard-ui/commit/2d939f1a8180dbc015bcf5a0c9141c83be535482) integra transporte de identidad externo configurable desde Admin, desafío EIP-191 persistido, verificación de firma y revalidación de registro/política. CI 45718586693 pendiente de adjudicación. No custodia HSM/KMS certificada ni permiso ejecutable; servicio externo real pendiente. Sin producción ni movimientos on-chain.
