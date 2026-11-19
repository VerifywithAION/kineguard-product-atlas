# Historical proofs with exact scope

## GP1A — Chrome/MetaMask/Sepolia

T1: zero-value request held, Continue opened MetaMask; no transaction confirmation. T2: Cancel prevented MetaMask. T3: unknown calldata WARN/Cancel without MetaMask. T4: suspicious approval BLOCK without MetaMask.

## V3 — native ETH in governed Sepolia account

3B-1: small transfer allowed. 3B-2: large action pending; owner key did not execute early. 3B-3: independent Safety Authority vetoed the pending action. 3B-4: legitimate action matured and executed.

## Status

These are historical proofs, not universal mainnet, ERC-20, current Hostinger or complete beta. E2E03A/B were synthetic CI; E2E04 reports gaps; R1A/B policy-change receipts are not chain receipts.

![Governance timing](../../assets/diagrams/governance-timing.svg)
