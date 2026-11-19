# Extension proofs and screenshots

[ES](../../es/chrome-extension/proofs-and-screenshots.md) · [EN](../../en/chrome-extension/proofs-and-screenshots.md) · [Manual](index.md)

## 1. Historical technical evidence

| Case | Outcome | Boundary |
|---|---|---|
| GP1A T1 | Zero-value: held, Continue opened MetaMask | No confirmed tx |
| GP1A T2 | Cancel: MetaMask stayed closed | Supported route |
| GP1A T3 | Unknown calldata: WARN → Cancel, no opening | Not every calldata |
| GP1A T4 | Suspicious approval: BLOCK, no opening | Chrome/MetaMask/Sepolia |

## 2. November 10 gallery: five authentic crops

The following PNGs were prepared from owner-supplied screenshots without regenerating UI. Chrome UI was cropped and an address/payload fragment was redacted. The visual package is prepared; binary files are not yet part of this documentation commit.

| Prepared filename | What it shows | Evidence classification |
|---|---|---|
| popup-denied-before-forwarding.png | DENY before forwarding and Observation only badge; exact details unavailable | CONTROLLED_LOCAL / 2026-11-10 |
| popup-no-active-request.png | No active governed request or selected request | CONTROLLED_LOCAL / 2026-11-10 |
| popup-content-scope-not-ready.png | Content script no-response; no prepared handoff | CONTROLLED_LOCAL / 2026-11-10 |
| popup-provider-bridge-ready.png | MetaMask provider visible and wrapper installed in harness; capture state disarmed | CONTROLLED_LOCAL / 2026-11-10 |
| popup-preexecution-trace.png | decision=deny trace with provider outcome=pending; address/payload redacted | CONTROLLED_LOCAL / 2026-11-10 |

<!-- KINE_EXTENSION_EVIDENCE_GALLERY_START -->
Cropped images pending binary upload to GitHub; no links to nonexistent files are emitted.
<!-- KINE_EXTENSION_EVIDENCE_GALLERY_END -->

## 3. How to read observability failures

The Denied screenshot does not by itself prove exact-request observability: the popup says Request details unavailable and REFERENCE_UNKNOWN. Another screenshot shows no response to Content Scope diagnostics. The trace says provider outcome pending. These are distinct observability limitations and must not be hidden behind a certification claim. Evidence of no-forwarding comes from the harness and GP1A closeout, not merely a card color.

## 4. Privacy

Keep originals only in private conversation/custody. Publish crops without browser tabs/address bar and without associating a complete address with a person. A UI crop is not complete reproducible runtime evidence.

- [KINEGuard master protocol](https://app.notion.com/p/41bd5f4fa5e3814e948bf911dddef7ef)
- [Wallet-to-KINE execution boundary thesis](https://app.notion.com/p/379d5f4fa5e38136967dfd04e030195b)
- [G5 / R39B extension evidence and roadmap](https://app.notion.com/p/3bfd5f4fa5e38099ac86cbb1ed02ae91)
- [Public governed protection](https://kineguard.com/kine)
- [Public wallet coverage and current limits](https://kineguard.com/connect)
- [EIP-1193 specification](https://eips.ethereum.org/EIPS/eip-1193)
- [EIP-6963 multi-provider discovery](https://eips.ethereum.org/EIPS/eip-6963)
