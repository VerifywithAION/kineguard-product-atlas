# Protección / Connect

[ES](../../../../docs/es/menus/protection/connect.md) · [EN](../../../../docs/en/menus/protection/connect.md) · [Index](../../index.md)

**Ruta:** [/connect](https://kineguard.com/connect) · **Tipo:** página

## 1. Propósito

Conecta o inspecciona una wallet para obtener dirección, proveedor y red públicos. La pantalla separa inspección de protección efectiva.

## 2. Cómo lo usa el usuario

1. Abre Protection > Connect y revisa el estado actual. Si dice Protection state not verified, no presupongas protección.
2. Selecciona un EVM provider detectado, por ejemplo MetaMask, Coinbase, Brave, OKX, Trust o Rabby. Pulsa Connect solo para solicitar acceso a la cuenta/red pública.
3. Si WalletConnect marca CONFIG REQUIRED, no lo trates como listo. Para Solana, Bitcoin, Safe y hardware revisa si la ruta es inspección manual o proof-only.
4. Comprueba dirección, red y provider después de conectar; continúa mediante Continue to Wallet Health. Nunca escribas seed phrases ni claves privadas.

## 3. Qué mecanismo representa

La ruta pertenece a la familia Protección y debe relacionarse con identidad, política, request exacto y fuente de evidencia.

## 4. Evidencia y límites

No hay custodia, firma ni veto global por conectar. Las funciones de browser pre-execution o smart-account requieren rutas verificadas separadas.

La visibilidad de una pantalla pública no equivale a aceptación humana de runtime ni a protección universal de fondos.

## 5. Imagen relacionada

![KINEGuard related controlled-local screenshot](../../../../assets/screenshots/local-controlled/kine-lite-wallet-posture.png)

*Captura auténtica del KINEGuard local relacionada con el tema; no es una captura certificada de esta URL en Hostinger.*

## 6. Fuentes

- [Public UI](https://kineguard.com/connect)
- [KINEGuard master protocol](https://app.notion.com/p/41bd5f4fa5e3814e948bf911dddef7ef)
- [Arquitectura](../../architecture.md)
- [Pruebas históricas](../../historical-proofs.md)

[← Volver al menú](index.md)
