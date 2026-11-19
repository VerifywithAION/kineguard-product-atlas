# Pruebas históricas con alcance delimitado

## GP1A — Chrome/MetaMask/Sepolia

T1: zero-value held, Continue abrió MetaMask; no confirmó transacción. T2: Cancel impidió MetaMask. T3: unknown calldata WARN/Cancel sin MetaMask. T4: suspicious approval BLOCK sin MetaMask.

## V3 — ETH nativo en cuenta gobernada Sepolia

3B-1: transferencia pequeña permitida. 3B-2: acción grande pending y owner key no ejecutó temprano. 3B-3: Safety Authority independiente vetó la acción pendiente. 3B-4: acción legítima maduró y se ejecutó.

## Estado

Son pruebas históricas, no mainnet universal, ERC-20, Hostinger actual ni beta integral. E2E03A/B CI sintético; E2E04 reporta gaps; R1A/B policy-change receipts no son chain receipts.

![Governance timing](../../assets/diagrams/governance-timing.svg)
