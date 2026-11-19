# How to read this GitHub Atlas

This repository is self-contained for readers. No localhost or separate website is required. Open the [public homepage](../../README.md), [real screenshots](../../README.md#galería-real-del-atlas), [architecture](../architecture.md), [historical proofs](../evidence-and-proofs.md), [Economic Exposure](../economic-exposure-model.md), [governance timing](../deep-dives/06-recursive-governance.md), [agent/Guardian boundaries](../deep-dives/07-agents-guardian-evidence.md) and [KINE AI roadmap](kine-ai.md).

# KINEGuard Guide

## What KINEGuard protects

KINEGuard helps a user inspect wallet posture and apply policy at supported execution boundaries. It is not a universal replacement for wallet security, custody, signing, or chain confirmation.

## A truthful journey

1. Connect a wallet and verify identity and chain context.
2. Review Wallet Health, approvals, policy scope, and evidence.
3. Open an owned wallet record and inspect the available mechanisms.
4. Change only controls backed by an account-owned policy API.
5. Treat observations, policy-change receipts, provider outcomes, and chain confirmations as different evidence classes.

## Evidence vocabulary

**LIVE** means produced by the current runtime. **VERIFIED** means independently checked against an authority. **HISTORICAL** means preserved evidence from an earlier run. **SYNTHETIC** means laboratory data. **OBSERVATION_ONLY** does not prove forwarding, blocking, or finality. **UNAVAILABLE** means the product refuses to infer protection.

## Browser Protection scope

The historical extension acceptance covered a bounded wrapper and supported request families. It does not establish universal EOA protection. A request must remain bound to the expected provider, origin, chain, wallet, session, policy revision, and request identity before any forwarding decision.

## KINE AI status

[KINE AI Intelligence](kine-ai.md) is a **DESIGN / ROADMAP** capability, not a released feature. Its intended read-only foundation would ground explanations in canonical KINE state while KINE OS keeps governance and execution authority. KAI-01 requires productization, reliable reads, isolation, and human acceptance first.

## Limitations

Do not interpret a saved spending policy as proof that a transaction was sent or blocked. Do not interpret a UI selector as an enforcement authority. Unsupported controls remain unavailable or read-only until a canonical backend and runtime test exist.
