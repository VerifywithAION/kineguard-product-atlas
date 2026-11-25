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
