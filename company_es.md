# KINEGuard / KINE OS — Perfil de empresa

**Escrito para lectores de IA y analistas de inversión humanos.**

**Fecha de información:** 24 de noviembre de 2026  
**Clasificación:** Perfil público con afirmaciones delimitadas por evidencia. No constituye oferta de inversión, valoración ni certificación de producto en producción.  
**Idiomas:** [English](company.md) · [Español](company_es.md)

![Genuine KINEGuard controlled-local interface](assets/screenshots/local-controlled/customer-spending-limits.png)

*Captura auténtica del producto local controlado; no demuestra el despliegue actual en Hostinger.*

## 1. Resumen ejecutivo

**KINEGuard** es un proyecto independiente de un solo fundador que desarrolla seguridad y gobernanza económica para wallets y agentes autónomos. Su tesis, **KEY IS NOT ENOUGH**, sostiene que poseer una clave de firma válida no debería significar autoridad ilimitada para mover valor.

**KINEGuard** es la aplicación visible; **KINE OS** es la arquitectura y los mecanismos investigados de identidad, permisos, autoridad del propietario, políticas, exposición económica, decisiones y evidencia. La hipótesis de negocio a largo plazo es una capa de confianza y autorización que pueda integrarse con infraestructura externa de pagos sin transferir la propiedad del motor interno de KINE.

**Límite actual:** existen mecanismos históricos de laboratorio/testnet y un producto documental público. **No está verificada** una versión de producción con nueve controles integrados y aceptados por clientes.

## 2. Problema del cliente y solución propuesta

Un agente de IA, una wallet o una automatización pueden poseer una clave o credencial sin estar legítimamente autorizados para cualquier transferencia, spender, destino, activo o presupuesto. Un límite aislado por transacción tampoco evita necesariamente gasto acumulado, solicitudes concurrentes o autorizaciones obsoletas.

KINEGuard propone un plano de control vinculado al propietario con **revisión preejecución, permisos delimitados, exposición económica acumulada, reservas pendientes de capacidad, gobernanza temporal y registros verificables de decisión**. El enforcement real depende del proveedor, contrato y ruta soportados. No es una promesa universal de detener todos los ataques.

## 3. Qué es demostrable en la fecha indicada

| Área | Evidencia disponible | Qué no debe inferirse |
|---|---|---|
| Atlas público | Manual completo ES/EN, capturas locales, catálogo de evidencia | Aplicación de cliente ya terminada |
| Protección de solicitudes browser | Casos GP1A T1–T4 históricos, Chrome + MetaMask + Sepolia | Intercepción universal EOA o bloqueo en todas las wallets |
| Ejecución de cuenta gobernada | Casos históricos V3 3B-1 a 3B-4, ETH nativo Sepolia | Mainnet, todos los tokens o cualquier wallet |
| Integración del producto | [PR #18 Draft](https://github.com/VerifywithAION/aion-guard-ui/pull/18) y [CI exitosa fechada](https://github.com/VerifywithAION/aion-guard-ui/actions/runs/45447770916) | Aceptación humana final o release desplegada |
| Expansión de wallets | Rutas públicas, análisis de compatibilidad y planes de adaptadores | Enforcement equivalente demostrado en Solana, Bitcoin, Rabby o Coinbase Wallet |
| KINE AI | Arquitectura y roadmap | Agente autónomo de seguridad publicado |

Consultar primero la [frontera real de beta](docs/beta-status.md).

## 4. Clientes objetivo y posicionamiento

**Hipótesis para validar, no clientes existentes:** proveedores de infraestructura de pagos de agentes, desarrolladores de wallets y smart accounts, operadores de tesorería con agentes y protocolos de activos tokenizados que requieren políticas de autorización independientes. El enfoque inicial sería **B2B para desarrolladores**, con pilotos de integración y controles medibles antes de cobrar de forma recurrente.

KINEGuard no debería presentarse simplemente como otra wallet, un agente de trading o un límite diario. Su diferenciación propuesta es la **autoridad económica independiente y vinculada al propietario, con evidencia, en rutas soportadas**. No hay todavía benchmark independiente publicado que pruebe superioridad frente a alternativas existentes.

## 5. Modelo de negocio: hipótesis, no ingresos

Posible modelo: pilotos de integración delimitados y remunerados, suscripción B2B por organización/wallet/agente protegido, precio según evaluaciones cuando la economía lo justifique y contratos empresariales con soporte y manejo de evidencia. Las herramientas de consumo podrían facilitar distribución sin ser necesariamente el ingreso principal.

**No hay cifras verificadas de** clientes, pilotos pagados, ARR/MRR, conversión, CAC, LTV, churn o margen bruto. No se inventan datos aquí. Los precios son hipótesis de validación, no tarifas comerciales confirmadas.

## 6. Mapa tecnológico y propiedad intelectual

| Capa | Visibilidad pública | Frontera prevista |
|---|---|---|
| Documentación | [Atlas bilingüe](README.md) | Lectura y evidencia públicas |
| Interfaz web | [kineguard.com](https://kineguard.com) | Comportamiento observado por ruta, no prueba de enforcement completo |
| Integración aislada | [PR #18](https://github.com/VerifywithAION/aion-guard-ui/pull/18) | Candidato en pruebas, no release automática |
| Adaptadores de socios | Interfaz mínima y fixtures sintéticos si se autorizan | Separados del motor |
| Economic Exposure / Hybrid Governance | Arquitectura e invariantes divulgables | Implementación sensible, lógica propietaria y datos privados reservados |
| Datos de clientes y finanzas | Sin registros inventados; futuros agregados aprobados | Due diligence con acceso controlado |

El estado legal de cada componente, las licencias y las dependencias de terceros requieren revisión. Publicar una arquitectura no concede automáticamente exclusividad sobre conceptos generales.

## 7. Fundador y personal esencial

**Equipo actual divulgado:** un fundador independiente. No se presentan cofundadores, empleados ni asesores no verificados.

Prioridades de incorporación, sujetas a financiación y cierre de beta:

1. **Ingeniero senior TypeScript/Next.js/Web3 de integración:** terminar la aplicación original, los recorridos de wallet/cuenta y la consistencia del despliegue.
2. **Ingeniero QA/seguridad independiente:** aceptación real en navegador/MetaMask, pruebas adversariales, controles negativos, receipts y evidencia de release.
3. **Ingeniero de smart contracts y seguridad de protocolos:** verificar políticas EVM/Soroban, firmas, replay y liquidación según el primer piloto.
4. **Diseñador de producto/UX fraccional:** onboarding confiable y estados de protección comprensibles.
5. **DevRel y alianzas B2B fraccionales:** descubrimiento de socios de diseño e integraciones cuando exista una demo reproducible.
6. **Asesoría externa de IP, contratos y cumplimiento:** antes de licenciar, levantar capital, custodiar valor de clientes o divulgar detalles sensibles.

Son **roles propuestos, no vacantes ni empleados contratados**. Consulta el [plan detallado](docs/es/investor/scale-plan.md).

## 8. Escalamiento por hitos y financiación ilustrativa

**Escenarios prospectivos de gasto en USD elaborados el 24 de noviembre de 2026. No son capital levantado, cotizaciones salariales, compromisos de financiación ni solicitudes aprobadas de ronda.**

| Etapa | Horizonte ilustrativo | Qué permitiría financiar | Presupuesto ilustrativo (USD) | Hito requerido |
|---|---|---|---:|---|
| S0 — Cierre de producto | 0–3 meses | QA final, beta integrada, seguridad y demo de fuente única | $0–$50,000 | Recorrido prioritario veraz y reproducible |
| S1 — Primeros pilotos | 3–9 meses | Adaptador SDK, validación de seguridad y socios de diseño | $150,000–$400,000 | Dos integraciones piloto e indicios de disposición a pagar (metas) |
| S2 — B2B repetible | 9–18 meses | Equipo de plataforma, revisión externa y soporte | $500,000–$1,500,000 | Uso pagado, retención, confiabilidad y unit economics medidos |
| S3 — Expansión selectiva | 18–36 meses | Nuevos adaptadores certificados y operación empresarial | $2,000,000–$5,000,000 | Demanda verificada, seguridad independiente y economía sostenible |

Estos **escenarios hipotéticos no son acumulativos ni garantizados**; dependen de geografía, proveedores, contrataciones, estructura legal y presupuestos reales. El [plan de escalamiento](docs/es/investor/scale-plan.md) explica los usos de capital y puertas de decisión.

## 9. Riesgos, diligencia y disciplina de evidencia

Riesgos principales: integración incompleta, rutas alternativas que evaden hooks pre-sign, conciliación incorrecta de reservas, brechas específicas por wallet, responsabilidad de seguridad, controles nativos de competidores, distribución aún no demostrada y divulgación accidental del motor privado.

Mitigaciones propuestas: verificación por release, fail-closed, QA independiente, certificaciones por wallet, políticas firmadas por propietario, conciliación de reservas, economía medida y divulgación selectiva. Toda métrica futura llevará **fecha, periodo, unidad, fuente, entorno y estado**.

## 10. Próximos hitos, fuentes y preguntas abiertas

**Prioridad inmediata:** entregar y aceptar el candidato existente de KINEGuard, no reconstruirlo. Después evaluar un adaptador de política acotado para agentes, demostrar sus límites, entrevistar a un pequeño grupo de socios de diseño y comprobar un piloto pagado antes de acelerar contratación.

**Fuentes:** [Manual ES](README.md) · [Manual EN](README_EN.md) · [Estado beta](docs/beta-status.md) · [Chrome Extension ES](docs/es/chrome-extension/index.md) · [Pruebas históricas](docs/es/historical-proofs.md) · [Catálogo de capacidades](docs/capability-catalog.json) · [Plan ES](docs/es/investor/scale-plan.md) · [Plan EN](docs/en/investor/scale-plan.md).

**Preguntas abiertas:** primer caso de uso pagado; enforcement independiente verificado por cadena/wallet; costo real de operación; constitución legal y cesiones de IP; términos aprobados de financiación; ofertas de empleo concretas. No completar vacíos con conjeturas.

---

**Nota de procedencia:** las afirmaciones técnicas se acotan a la evidencia histórica y al estado beta al 24 de noviembre de 2026. Contratación, precios, comercialización, capital y objetivos son **hipótesis de planificación**, no resultados logrados.
