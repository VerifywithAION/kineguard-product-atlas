# Compatibilidad por wallet y ecosistema

[ES](../../es/chrome-extension/wallet-coverage.md) · [EN](../../en/chrome-extension/wallet-coverage.md) · [Extensión](index.md)

El plan de adaptar los invariantes de KINE OS a varias cadenas es explícito en Notion. La promoción a protección certificada requiere pruebas por wallet, método, proveedor y cadena. La lista de Connect es capacidad de descubrimiento/inspección, **no** cobertura homogénea.

| Wallet / familia | Ecosistema | Lo documentado hoy | Estado de protección de extensión |
|---|---|---|---|
| MetaMask | EVM / EIP-1193 | Detección/read-only en web; GP1A Chrome+MetaMask+Sepolia prueba pre-forward histórica | PASO HISTÓRICO ACOTADO |
| Rabby | EVM / EIP-1193 | Candidato a adaptador normalizado; no GP1A de Rabby presentado | NOT_EXTENSION_CERTIFIED |
| Coinbase Wallet | EVM / EIP-1193 | Lectura/conexión cuando está instalado; certificación de bloqueo propia pendiente | NOT_EXTENSION_CERTIFIED |
| Brave Wallet | EVM / EIP-1193 | Conexión instalada y frontera de proveedor a validar | NOT_EXTENSION_CERTIFIED |
| OKX Wallet | EVM / EIP-1193 | Conexión instalada; normalización/prueba de veto individual pendiente | NOT_EXTENSION_CERTIFIED |
| Trust Wallet Browser | EVM / EIP-1193 | Conexión read-only si se detecta; no prueba de intercepción equivalente | NOT_EXTENSION_CERTIFIED |
| Generic injected EVM | EVM / EIP-1193 | Descubrimiento sujeto a proveedor y sesión; no prometer igual cobertura | NOT_EXTENSION_CERTIFIED |
| WalletConnect / Reown | Mobile / relay | CONFIG REQUIRED para Project ID; ruta fuera de wrapper de extensión directa | CONFIG_GATED |
| Phantom / Solflare / Backpack | Solana | Inspección manual/read-only o proveedor presente; semántica Solana requiere adaptador | MANUAL_OR_READ_ONLY |
| Xverse / UniSat / Leather | Bitcoin | Inspección pública de dirección; PSBT/UTXO y guardia nativa por probar | MANUAL_OR_READ_ONLY |
| Safe / Smart Account | Smart account | PROOF-PATH ONLY: controles de contrato/guardia, no overlay de Chrome garantizado | PROOF_PATH_ONLY |
| Ledger / Trezor / Keystone | Hardware | Solo inspección manual de dirección salvo proveedor verificado | MANUAL_OR_READ_ONLY |

## Cómo certificar una nueva wallet

1. Descubrir el proveedor auténtico, no una tarjeta UI.
2. Leer wallet, chain, sesión y método correcto.
3. Normalizar la intención sin perder semántica nativa.
4. Verificar ALLOW/WARN/DENY bajo política auténtica; fallar cerrado si hay incertidumbre.
5. Comprobar cero forwarding en DENY y forwarding único tras Continue vigente, cuando la ruta lo permita.
6. Obtener recibos de identidad, request, decisión, proveedor y, si aplica, cadena.
7. Repetir pruebas adversariales de cambio de red, wallet, pestaña, sesión, replay y proveedor, con evidencia reproducible.

## Adaptaciones arquitectónicas por ecosistema

**EVM:** discovery EIP-6963 y métodos EIP-1193 con separación por proveedor. **Solana:** instrucciones, programas, transacciones y permisos de firma propios. **Bitcoin:** PSBT, entradas/salidas UTXO y política de cambio. **Safe/smart accounts:** módulos o guardias contractuales. **Hardware:** interfaz de firma/navegador acotada a lo que el transporte realmente expone. Una sola extensión no intercepta el sistema operativo ni el hardware arbitrario.

## Fuentes

- [KINEGuard master protocol](https://app.notion.com/p/41bd5f4fa5e3814e948bf911dddef7ef)
- [Wallet-to-KINE execution boundary thesis](https://app.notion.com/p/379d5f4fa5e38136967dfd04e030195b)
- [G5 / R39B extension evidence and roadmap](https://app.notion.com/p/3bfd5f4fa5e38099ac86cbb1ed02ae91)
- [Public governed protection](https://kineguard.com/kine)
- [Public wallet coverage and current limits](https://kineguard.com/connect)
- [EIP-1193 specification](https://eips.ethereum.org/EIPS/eip-1193)
- [EIP-6963 multi-provider discovery](https://eips.ethereum.org/EIPS/eip-6963)
