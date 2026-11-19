# Wallet and ecosystem compatibility

[ES](../../es/chrome-extension/wallet-coverage.md) · [EN](../../en/chrome-extension/wallet-coverage.md) · [Extension](index.md)

Notion explicitly plans to adapt KINE OS governance invariants across chains. Certified protection requires wallet-, method-, provider- and chain-specific tests. The Connect list reflects discovery/inspection capability, **not** uniform protection.

| Wallet / family | Ecosystem | What is documented today | Extension protection status |
|---|---|---|---|
| MetaMask | EVM / EIP-1193 | Web detection/read-only; GP1A historical Chrome+MetaMask+Sepolia pre-forward proof | HISTORICAL SCOPED PASS |
| Rabby | EVM / EIP-1193 | Normalized adapter candidate; no Rabby-specific GP1A proof presented | NOT_EXTENSION_CERTIFIED |
| Coinbase Wallet | EVM / EIP-1193 | Read-only connect if installed; separate block certification pending | NOT_EXTENSION_CERTIFIED |
| Brave Wallet | EVM / EIP-1193 | Installed-wallet connection and provider boundary to verify | NOT_EXTENSION_CERTIFIED |
| OKX Wallet | EVM / EIP-1193 | Installed connect; per-wallet normalization/veto proof pending | NOT_EXTENSION_CERTIFIED |
| Trust Wallet Browser | EVM / EIP-1193 | Read-only connect when detected; no equivalent interception proof | NOT_EXTENSION_CERTIFIED |
| Generic injected EVM | EVM / EIP-1193 | Provider/session-dependent discovery; no equivalent coverage claim | NOT_EXTENSION_CERTIFIED |
| WalletConnect / Reown | Mobile / relay | CONFIG REQUIRED for Project ID; outside direct extension-wrapper route | CONFIG_GATED |
| Phantom / Solflare / Backpack | Solana | Manual/read-only or provider-present inspection; Solana semantics need adapter | MANUAL_OR_READ_ONLY |
| Xverse / UniSat / Leather | Bitcoin | Public address inspection; PSBT/UTXO and native guard need separate proof | MANUAL_OR_READ_ONLY |
| Safe / Smart Account | Smart account | PROOF-PATH ONLY: contract/guard controls, not guaranteed Chrome overlay | PROOF_PATH_ONLY |
| Ledger / Trezor / Keystone | Hardware | Manual address inspection unless a provider is verifiably exposed | MANUAL_OR_READ_ONLY |

## How to certify a new wallet

1. Discover the authentic provider, not merely a UI card.
2. Read the correct wallet, chain, session and method.
3. Normalize intent without losing native semantics.
4. Verify ALLOW/WARN/DENY under authentic policy; fail closed on uncertainty.
5. Prove zero forwarding for DENY and exactly-once forwarding after current Continue where the route allows it.
6. Obtain identity, request, decision, provider and, where relevant, chain receipts.
7. Repeat adversarial wallet/chain/tab/session/replay/provider-switch tests with reproducible evidence.

## Architecture adaptations by ecosystem

**EVM:** EIP-6963 discovery and EIP-1193 methods with provider separation. **Solana:** native instructions, programs, transactions and signing permissions. **Bitcoin:** PSBT, UTXO inputs/outputs and change policy. **Safe/smart accounts:** contract guards or modules. **Hardware:** signing/browser interface limited to the transport actually exposed. One extension cannot intercept the operating system or arbitrary hardware.

## Sources

- [KINEGuard master protocol](https://app.notion.com/p/41bd5f4fa5e3814e948bf911dddef7ef)
- [Wallet-to-KINE execution boundary thesis](https://app.notion.com/p/379d5f4fa5e38136967dfd04e030195b)
- [G5 / R39B extension evidence and roadmap](https://app.notion.com/p/3bfd5f4fa5e38099ac86cbb1ed02ae91)
- [Public governed protection](https://kineguard.com/kine)
- [Public wallet coverage and current limits](https://kineguard.com/connect)
- [EIP-1193 specification](https://eips.ethereum.org/EIPS/eip-1193)
- [EIP-6963 multi-provider discovery](https://eips.ethereum.org/EIPS/eip-6963)
