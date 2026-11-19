# Protection / Connect

[ES](../../../../docs/es/menus/protection/connect.md) · [EN](../../../../docs/en/menus/protection/connect.md) · [Index](../../index.md)

**Route:** [/connect](https://kineguard.com/connect) · **Kind:** standalone page

## 1. Purpose

Connect or inspect a wallet for public address, provider and chain context. The page separates inspection from actual protection.

## 2. How the user operates it

1. Open Protection > Connect and review current state. If it says Protection state not verified, do not assume protection.
2. Select a detected EVM provider such as MetaMask, Coinbase, Brave, OKX, Trust or Rabby. Press Connect only for public account/network access.
3. If WalletConnect says CONFIG REQUIRED, it is not ready. For Solana, Bitcoin, Safe and hardware check whether the path is manual inspection or proof-only.
4. Confirm address, chain and provider after connecting; continue via Continue to Wallet Health. Never provide seed phrases or private keys.

## 3. Underlying mechanism

This route belongs to the Protection family and must be interpreted with identity, policy, exact request and evidence provenance.

## 4. Evidence and limitations

Connecting provides no custody, signing or global veto. Browser pre-execution or smart-account functions require separately verified paths.

A visible public screen does not equal human runtime acceptance or universal funds protection.

## 5. Related image

![KINEGuard related controlled-local screenshot](../../../../assets/screenshots/local-controlled/kine-lite-wallet-posture.png)

*Genuine related controlled-local KINEGuard image; not a certified screenshot of this URL on Hostinger.*

## 6. Sources

- [Public UI](https://kineguard.com/connect)
- [KINEGuard master protocol](https://app.notion.com/p/41bd5f4fa5e3814e948bf911dddef7ef)
- [Architecture](../../architecture.md)
- [Historical proofs](../../historical-proofs.md)

[← Back to menu](index.md)
