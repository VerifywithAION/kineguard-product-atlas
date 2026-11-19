# Cómo leer este Atlas en GitHub

El repositorio es navegable aquí mismo: no necesita localhost ni otro sitio. Comience por el [README principal](../../README.md), [imágenes reales](../../README.md#galería-real-del-atlas), [arquitectura](../architecture.md), [pruebas históricas](../evidence-and-proofs.md), [Economic Exposure](../economic-exposure-model.md), [timing/gobernanza](../deep-dives/06-recursive-governance.md), [agentes y Guardian](../deep-dives/07-agents-guardian-evidence.md) y [hoja de ruta KINE AI](kine-ai.md).

# Guia de KINEGuard

## Que protege KINEGuard

KINEGuard ayuda a inspeccionar la postura de una wallet y aplicar politicas en limites de ejecucion compatibles. No sustituye la seguridad universal de una wallet, la custodia, la firma ni la confirmacion de una cadena.

## Recorrido honesto

1. Conecta una wallet y verifica identidad y red.
2. Revisa Wallet Health, aprobaciones, alcance de politica y evidencia.
3. Abre el registro de una wallet propia y revisa sus mecanismos.
4. Cambia solo controles respaldados por una API de politica de la cuenta.
5. Separa observaciones, recibos de cambios de politica, resultados del proveedor y confirmaciones de cadena.

## Limites de evidencia

**LIVE** pertenece al runtime actual. **VERIFIED** fue comprobado contra una autoridad. **HISTORICAL** es evidencia conservada de otra ejecucion. **SYNTHETIC** es laboratorio. **OBSERVATION_ONLY** no prueba forwarding, bloqueo ni finality. **UNAVAILABLE** significa que el producto no infiere proteccion.

## Alcance de Browser Protection

La aceptacion historica de la extension cubrio un wrapper y familias de solicitudes concretas. No demuestra proteccion universal de EOA. Antes de reenviar, la solicitud debe conservar binding de proveedor, origen, cadena, wallet, sesion, revision de politica e identidad de solicitud.

## Estado de KINE AI

[Inteligencia KINE AI](kine-ai.md) es una capacidad **DESIGN / ROADMAP**, no una funcion liberada. Su base prevista de solo lectura usaria estado canonico KINE para explicar la realidad economica, mientras KINE OS conserva la autoridad de gobernanza y ejecucion. KAI-01 requiere productizacion, lecturas confiables, aislamiento y aceptacion humana.

## Limitaciones

Una politica de gasto guardada no demuestra que una transaccion fue enviada o bloqueada. Un selector visual no es una autoridad de enforcement. Los controles sin backend canonico y prueba runtime permanecen no disponibles o de solo lectura.
