# Historical proofs with exact scope

## GP1A — Chrome/MetaMask/Sepolia

T1: zero-value request held, Continue opened MetaMask; no transaction confirmation. T2: Cancel prevented MetaMask. T3: unknown calldata WARN/Cancel without MetaMask. T4: suspicious approval BLOCK without MetaMask.

## V3 — native ETH in governed Sepolia account

3B-1: small transfer allowed. 3B-2: large action pending; owner key did not execute early. 3B-3: independent Safety Authority vetoed the pending action. 3B-4: legitimate action matured and executed.

## Historical V3 identity — November 24, 2026

The original compilation template was reproduced with Solidity 0.8.20. Two RPC responses for the same historical Sepolia block matched all 8,254 bytes of reconstructed runtime, including ten immutable variables. The policy identity was independently recomputed.

This establishes historical code correspondence, not a currently protected balance or independent cryptographic finality. Fresh economic readback was blocked by the age of the common block. No new funds were moved. V3 veto applies to pending actions within that governed account, not every operation of an EOA.

## Status

These are historical proofs, not universal mainnet, ERC-20, current Hostinger or complete beta. E2E03A/B were synthetic CI; E2E04 reports gaps; R1A/B policy-change receipts are not chain receipts.

![Governance timing](../../assets/diagrams/governance-timing.svg)
