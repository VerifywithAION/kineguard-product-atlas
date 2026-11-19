# Evidencia / Structured Records

[ES](../../../../docs/es/menus/evidence/structured-records.md) · [EN](../../../../docs/en/menus/evidence/structured-records.md) · [Index](../../index.md)

**Ruta:** [/receipts#structured-records](https://kineguard.com/receipts#structured-records) · **Tipo:** sección interna

## 1. Propósito

Registros normalizados de decisiones y su cadena de procedencia.

## 2. Cómo lo usa el usuario

1. Abre Structured Records dentro de /receipts.
2. Identifica decision ID, receipt ID, event ID, policy revision y fuente si existen.
3. Comprueba resultado de proveedor o cadena por separado antes de atribuir una ejecución.
4. Sigue referencias exactas a evidencia testnet o CI y no trates placeholders como receipts finales.

## 3. Qué mecanismo representa

La ruta pertenece a la familia Evidencia y debe relacionarse con identidad, política, request exacto y fuente de evidencia.

## 4. Evidencia y límites

Un recibo POLICY_CHANGE no es un receipt de blockchain ni implica on-chain finality.

La visibilidad de una pantalla pública no equivale a aceptación humana de runtime ni a protección universal de fondos.

## 5. Imagen relacionada

![KINEGuard related controlled-local screenshot](../../../../assets/screenshots/local-controlled/admin-metamask-sepolia.png)

*Captura auténtica del KINEGuard local relacionada con el tema; no es una captura certificada de esta URL en Hostinger.*

## 6. Fuentes

- [Public UI](https://kineguard.com/receipts#structured-records)
- [KINEGuard master protocol](https://app.notion.com/p/41bd5f4fa5e3814e948bf911dddef7ef)
- [Arquitectura](../../architecture.md)
- [Pruebas históricas](../../historical-proofs.md)

[← Volver al menú](index.md)
