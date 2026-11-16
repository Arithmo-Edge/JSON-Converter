<div align="center">

<img src="https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1600&h=420&fit=crop" alt="Arithmo-Edge Golden Question Bank Cryptographic Vault Banner" width="100%" />

# 🏆 Arithmo-Edge: Co-Founders' Golden Question Bank Repository

*Private Olympiad Problem Vault (`5 Core Arena Folders` → `4 Expert Segment Subfolders` • Thousands of `.json` Sets (`Schema v1.2`) • Strictly `10` Unique Questions & Exact Single-Value Answers Per File • AoPS-Inspired Transformative Synthesis)*

<p>
  <img src="https://img.shields.io/badge/Repository_Status-Strictly_Private_(Read--Only_PAT)-F43F5E?style=for-the-badge" alt="Repository Status" />
  <img src="https://img.shields.io/badge/Architecture-5_Core_Arenas_%C3%97_4_Segments_(20_Folders)-00F0FF?style=for-the-badge" alt="Architecture" />
  <img src="https://img.shields.io/badge/File_Schema-Thousands_of_.json_Files_(Schema_v1.2_&_10_Q%26A)-8B5CF6?style=for-the-badge" alt="File Schema" />
  <img src="https://img.shields.io/badge/Answer_Format-Absolute_Single--Value_Deterministic-10B981?style=for-the-badge" alt="Answer Format" />
  <img src="https://img.shields.io/badge/Inspiration-AoPS_Transformative_Logic_Mutation-F59E0B?style=for-the-badge" alt="Inspiration" />
  <img src="https://img.shields.io/badge/AI_Consumer-Arithmo_GoldenVault_Miner_%26_AdversarialRedTeam_AI-3B82F6?style=for-the-badge" alt="AI Consumer" />
</p>

</div>

---

## 🔐 Executive Overview & Mission Architecture

Welcome to **`Arithmo-Edge-Golden-Vault`**, the mission-critical, restricted-access mathematical asset repository of **Arithmo-Edge** (*Powered by Olympiad Edge*). Co-architected and maintained exclusively by **Rayaan Tasnim (Founder & Chief System Architect)** and the **Co-Founder (Chief Mathematical Architect)**, this repository serves as the foundational mathematical intelligence engine for the entire Arithmo-Edge competitive ecosystem.

- **Primary Creative Benchmark ("The Gold Mine"):**
  - Directly trains, aligns, and benchmarks **Arithmo Personal AI**, **Arithmo Guild AI**, and the **12 Autonomous Question-Forge Agents** on what constitutes a genuinely original, non-LLM-solvable Olympiad problem.
  - Supplies thousands of human-curated, logic-mutated `.json` problem sets (`Schema v1.2`) organized across **5 Core Olympiad Arena Folders** and **4 calibrated ELO Segment Subfolders** (`20` active vault directories in total).
- **Zero-Exposure Security Isolation:**
  - Strictly hosted inside a **Private GitHub Repository** with zero public read endpoints, zero unauthenticated webhooks, and zero directory indexing.
  - Upcoming contest problem sets and per-question metadata tags are **strictly excluded from public chat RAG indices** (including `Arithmo Personal AI` and `Arithmo Guild AI` user-facing vector stores) so adversarial prompt-injection attacks can never leak unreleased competition problems or topic hints during live rated contests.

---

## 🌐 Repository Architecture & AI Ingestion Topology

The diagram below details the end-to-end cryptographic pipeline from Co-Founder mathematical synthesis and automated verification gates to the 2-level `5-Arena × 4-Segment` `.json` vault, Cloudflare Worker edge ingestion, and live tournament deployment.

<div class="mermaid">
flowchart TD
    subgraph COFOUNDERS["🏛️ Co-Founders' Mathematical Synthesis Studio"]
        A1["Rayaan Tasnim<br/>Founder & Chief System Architect"]
        A2["Co-Founder<br/>Chief Mathematical Architect"]
        A3["AoPS & Global Olympiad Archives<br/>Transformative Logic Mutation Engine"]
        A1 & A2 --> A3
    end

    subgraph QUALITY_GATES["🛡️ Automated Pre-Commit & CI Verification Gates"]
        G1["Arithmo PlagioGuard AI<br/>&lt;75% Structural Similarity Gate"]
        G2["Arithmo HeuristicEliminator AI<br/>Absolute Single-Value Answer Lock"]
        G3["Arithmo SymPyVeritas AI<br/>Python + SymPy Dual-Method Proof Sandbox"]
        G4["Arithmo AdversarialRedTeam AI &amp; IntuitionForge AI<br/>Anti-LLM Solvability Stress Test (GPT / Claude / Gemini)"]
        A3 --> G1 --> G2 --> G3 --> G4
    end

    subgraph PRIVATE_VAULT["🔒 Arithmo-Edge-Golden-Vault (Private GitHub Repository — 5 Arenas × 4 Segments)"]
        AR1["/Number_Theory/<br/>4 Segment Subfolders (Segments 1–4)"]
        AR2["/Algebra/<br/>4 Segment Subfolders (Segments 1–4)"]
        AR3["/Geometry/<br/>4 Segment Subfolders (Segments 1–4)"]
        AR4["/Combinatorics_and_Permutation/<br/>4 Segment Subfolders (Segments 1–4)"]
        AR5["/Mixed_Mathematical_Olympiad/<br/>4 Segment Subfolders (Segments 1–4)"]
        SEG["20 Total Segment Subfolders<br/>Segment_1_Apprentice (0–1199) • Segment_2_Intermediate (1200–1799)<br/>Segment_3_Vanguard (1800–2399) • Segment_4_Apex (2400–3000+)<br/>Thousands of 10-Q&amp;A .json Sets (Schema v1.2)"]
        G4 --> AR1 & AR2 & AR3 & AR4 & AR5 --> SEG
    end

    subgraph EDGE_INGESTION["⚡ Zero-Trust Edge Ingestion Layer"]
        PAT["GitHub Fine-Grained PAT<br/>Scope: Contents Read-Only Only"]
        CFW["Cloudflare Worker Proxy<br/>Encrypted Edge Secrets &amp; Rate Limiter"]
        MINER["Arithmo GoldenVault Miner AI<br/>Millisecond UTF-8 / Schema v1.2 JSON Batch Parser"]
        SEG -->|HTTPS TLS 1.3| PAT --> CFW --> MINER
    end

    subgraph CONSUMERS["🚀 Downstream AI & Arena Consumers (Isolated from Public RAG)"]
        C1["12 Autonomous Question-Forge Agents<br/>Few-Shot Creative Synthesis Alignment"]
        C2["Arithmo Personal AI &amp; Arithmo Guild AI<br/>Post-Contest Pedagogical Training Only"]
        C3["Live Tournament Engine<br/>Tags Locked During Live Rated Contests • Unlocked in Unrated Practice"]
        C4["Arithmo ReserveBanker AI<br/>2-Backup Standby Reserve Vault (30-Second Hot-Swap)"]
        MINER --> C1 & C2 & C3 & C4
    end

    style PRIVATE_VAULT fill:#0f172a,stroke:#f43f5e,stroke-width:2px,color:#f8fafc
    style EDGE_INGESTION fill:#0f172a,stroke:#00f0ff,stroke-width:2px,color:#f8fafc
    style QUALITY_GATES fill:#0f172a,stroke:#10b981,stroke-width:2px,color:#f8fafc
    style COFOUNDERS fill:#0f172a,stroke:#f59e0b,stroke-width:2px,color:#f8fafc
    style CONSUMERS fill:#0f172a,stroke:#8b5cf6,stroke-width:2px,color:#f8fafc
</div>

---

## 📂 Architectural Deep-Dives & Operational Specifications

<details open>
<summary><strong>1. Exact 2-Level Hierarchical Folder Directory (<code>5 Core Arena Folders</code> → <code>4 Expert Segment Subfolders</code>)</strong></summary>

<br />

The repository enforces a strict, deterministic **2-Level Hierarchical Directory Architecture** consisting of **5 Core Olympiad Arena Folders** at the root level, each subdivided into **4 Expert ELO Segment Subfolders** (`20` leaf directories total). Inside each of the `20` segment subfolders reside thousands of structured `.json` problem sets (`Schema v1.2`), strictly named as `<Segment_No_Name>_<Hub_Name>_<Set_ID>.json`.

<pre>
Arithmo-Edge-Golden-Vault/
├── .github/
│   └── workflows/
│       └── golden-vault-ci-validator.yml                           # Enforces Schema v1.2, 10-Q&A count, single-value & SymPy checks
├── README.md                                                       # Master Architectural Documentation (This File)
├── MANIFEST.lock                                                   # Cryptographic SHA-256 checksums of all verified .json sets
│
├── Number_Theory/                                                  # Level 1 — Core Arena 1: Number Theory
│   ├── Segment_1_Apprentice/                                       # Foundation Olympiad Tier (0–1199 ELO)
│   │   ├── Segment_1_Apprentice_Number_Theory_0001.json            # Strictly 10 Unique Q&A Pairs + Per-Question Unrated Tags
│   │   ├── Segment_1_Apprentice_Number_Theory_0002.json
│   │   └── ... (Thousands of verified .json sets)
│   ├── Segment_2_Intermediate/                                     # Tactical Olympiad Tier (1200–1799 ELO)
│   │   ├── Segment_2_Intermediate_Number_Theory_0001.json
│   │   └── ... (Thousands of verified .json sets)
│   ├── Segment_3_Vanguard/                                         # National Olympiad Tier (1800–2399 ELO)
│   │   ├── Segment_3_Vanguard_Number_Theory_0001.json
│   │   └── ... (Thousands of verified .json sets)
│   └── Segment_4_Apex/                                             # IMO & Sunday Mega Tier (2400–3000+ ELO)
│       ├── Segment_4_Apex_Number_Theory_0001.json
│       └── ... (Thousands of verified .json sets)
│
├── Algebra/                                                        # Level 1 — Core Arena 2: Algebra
│   ├── Segment_1_Apprentice/                                       # Foundation Olympiad Tier (0–1199 ELO)
│   │   ├── Segment_1_Apprentice_Algebra_0001.json
│   │   └── ... (Thousands of verified .json sets)
│   ├── Segment_2_Intermediate/                                     # Tactical Olympiad Tier (1200–1799 ELO)
│   │   ├── Segment_2_Intermediate_Algebra_0001.json
│   │   └── ... (Thousands of verified .json sets)
│   ├── Segment_3_Vanguard/                                         # National Olympiad Tier (1800–2399 ELO)
│   │   ├── Segment_3_Vanguard_Algebra_0001.json
│   │   └── ... (Thousands of verified .json sets)
│   └── Segment_4_Apex/                                             # IMO & Sunday Mega Tier (2400–3000+ ELO)
│       ├── Segment_4_Apex_Algebra_0001.json
│       └── ... (Thousands of verified .json sets)
│
├── Geometry/                                                       # Level 1 — Core Arena 3: Geometry
│   ├── Segment_1_Apprentice/                                       # Foundation Olympiad Tier (0–1199 ELO)
│   │   ├── Segment_1_Apprentice_Geometry_0001.json
│   │   └── ... (Thousands of verified .json sets)
│   ├── Segment_2_Intermediate/                                     # Tactical Olympiad Tier (1200–1799 ELO)
│   │   ├── Segment_2_Intermediate_Geometry_0001.json
│   │   └── ... (Thousands of verified .json sets)
│   ├── Segment_3_Vanguard/                                         # National Olympiad Tier (1800–2399 ELO)
│   │   ├── Segment_3_Vanguard_Geometry_0001.json
│   │   └── ... (Thousands of verified .json sets)
│   └── Segment_4_Apex/                                             # IMO & Sunday Mega Tier (2400–3000+ ELO)
│       ├── Segment_4_Apex_Geometry_0001.json
│       └── ... (Thousands of verified .json sets)
│
├── Combinatorics_and_Permutation/                                  # Level 1 — Core Arena 4: Combinatorics & Permutation
│   ├── Segment_1_Apprentice/                                       # Foundation Olympiad Tier (0–1199 ELO)
│   │   ├── Segment_1_Apprentice_Combinatorics_and_Permutation_0001.json
│   │   └── ... (Thousands of verified .json sets)
│   ├── Segment_2_Intermediate/                                     # Tactical Olympiad Tier (1200–1799 ELO)
│   │   ├── Segment_2_Intermediate_Combinatorics_and_Permutation_0001.json
│   │   └── ... (Thousands of verified .json sets)
│   ├── Segment_3_Vanguard/                                         # National Olympiad Tier (1800–2399 ELO)
│   │   ├── Segment_3_Vanguard_Combinatorics_and_Permutation_0001.json
│   │   └── ... (Thousands of verified .json sets)
│   └── Segment_4_Apex/                                             # IMO & Sunday Mega Tier (2400–3000+ ELO)
│       ├── Segment_4_Apex_Combinatorics_and_Permutation_0001.json
│       └── ... (Thousands of verified .json sets)
│
└── Mixed_Mathematical_Olympiad/                                    # Level 1 — Core Arena 5: Mixed Mathematical Olympiad
    ├── Segment_1_Apprentice/                                       # Foundation Olympiad Tier (0–1199 ELO)
    │   ├── Segment_1_Apprentice_Mixed_Mathematical_Olympiad_0001.json
    │   └── ... (Thousands of verified .json sets)
    ├── Segment_2_Intermediate/                                     # Tactical Olympiad Tier (1200–1799 ELO)
    │   ├── Segment_2_Intermediate_Mixed_Mathematical_Olympiad_0001.json
    │   └── ... (Thousands of verified .json sets)
    ├── Segment_3_Vanguard/                                         # National Olympiad Tier (1800–2399 ELO)
    │   ├── Segment_3_Vanguard_Mixed_Mathematical_Olympiad_0001.json
    │   └── ... (Thousands of verified .json sets)
    └── Segment_4_Apex/                                             # IMO & Sunday Mega Tier (2400–3000+ ELO)
        ├── Segment_4_Apex_Mixed_Mathematical_Olympiad_0001.json
        └── ... (Thousands of verified .json sets)
</pre>

- **Level 1 — 5 Core Olympiad Arena Folders (Root Directory):**
  1. `/Number_Theory/` — Prime factorizations, modular arithmetic congruences, Diophantine equations, Euler's totient, orders, and $p$-adic valuations.
  2. `/Algebra/` — Polynomial roots/identities, telescoping sums/products, functional equations, symmetric inequalities (`AM-GM`, `Cauchy-Schwarz`, `Jensen`), and recursive sequences.
  3. `/Geometry/` — Euclidean metric configurations, cyclic quadrilaterals, power of a point, radical axes, homothety, and trigonometric/coordinate synthetic invariants.
  4. `/Combinatorics_and_Permutation/` — Bijective counting, inclusion-exclusion, Pigeonhole Principle, graph coloring, invariants/monovariants, and generating functions.
  5. `/Mixed_Mathematical_Olympiad/` — Cross-disciplinary tournament sets synthesizing all four foundational hubs into unified `10`-question Olympiad rounds.
- **Level 2 — 4 Expert ELO Segment Subfolders Inside Each Arena (`20` Total Leaf Directories):**
  - **`/Segment_1_Apprentice/` (`0–1199 ELO` — Foundation Olympiad Tier):** Builds sharp Olympiad intuition without trivial textbook repetition.
  - **`/Segment_2_Intermediate/` (`1200–1799 ELO` — Tactical Olympiad Tier):** Requires non-obvious multi-step deductive leaps where direct formula substitution fails.
  - **`/Segment_3_Vanguard/` (`1800–2399 ELO` — National Olympiad Tier):** National-caliber Olympiad rigor (`USAMO`, `BMO`, `BdMO National`, `RMO`), hybrid cross-topic synthesis, and subtle edge-case traps.
  - **`/Segment_4_Apex/` (`2400–3000+ ELO` — IMO & Sunday Mega Tier):** International Mathematical Olympiad (`IMO` / `IMO Shortlist`) depth, completely immune to brute-force Python/C++ enumeration and direct LLM token prediction.
- **Level 3 — Standardized `.json` Naming Convention (`<Segment_No_Name>_<Hub_Name>_<Set_ID>.json`):**
  - Every leaf subfolder houses thousands of `.json` files named deterministically (e.g., `Segment_1_Apprentice_Number_Theory_0001.json`), where **every single `.json` file contains strictly `10` unique questions**.

</details>

---

<details open>
<summary><strong>2. Strict <code>.json</code> File Schema (<code>Schema v1.2</code>) &amp; Per-Question Unrated Tags</strong></summary>

<br />

Every single `.json` file across all `20` segment folders must conform byte-for-byte to **`Schema v1.2`** below. Any deviation in JSON keys, schema version, question count, tag visibility flags, or answer format triggers an immediate CI rejection.

<pre>
{
  "schema_version": "1.2",
  "ecosystem": "Arithmo-Edge",
  "mode": "Expert",
  "segment": "Segment_1_Apprentice",
  "set_id": "0001",
  "hub": "Number Theory",
  "tags_visibility": "unrated_practice_only",
  "hidden_during_live_contest": true,
  "problem_count": 10,
  "problems": [
    {
      "q_index": 1,
      "statement_plain": "Find the sum of all prime factors of 2^12 - 1.",
      "statement_latex": "Find the sum of all prime factors of $2^{12} - 1$.",
      "tags": ["Prime Factors", "Modular Arithmetic"],
      "answer": "44"
    },
    {
      "q_index": 2,
      "statement_plain": "Find the largest prime factor of 2027^2 - 1.",
      "statement_latex": "Find the largest prime factor of $2027^{2} - 1$.",
      "tags": ["Prime Factors", "Algebraic Factorization"],
      "answer": "1013"
    }
  ]
}
</pre>

- **Exact `10` Questions Per `.json` File (`"problem_count": 10`):**
  - Every single `.json` file across all `5` arenas and `4` segments integrates **strictly `10` distinct, sequentially indexed problems (`"q_index": 1` through `10`)** inside the `"problems"` array.
  - Partial files (fewer than `10` questions) or bloated files (more than `10` questions) are automatically quarantined by `Arithmo GoldenVault Miner AI`.
- **Per-Question Comma-Separated `"tags"` with Contest Visibility Lock:**
  - Every problem object contains an individual comma-separated `"tags"` array (e.g., `["Prime Factors", "Modular Arithmetic"]`) classifying the exact mathematical techniques required.
  - **Strict Live-Contest Redaction (`"hidden_during_live_contest": true`):** During all live rated competitions, **Arithmo GoldenVault Miner AI** and the Cloudflare Edge proxy strip `"tags"` from client payloads so competitors never receive topic hints or theorem spoilers.
  - **Unrated Practice Unlock (`"tags_visibility": "unrated_practice_only"`):** Once a problem set transitions into **unrated practice mode** or post-contest review, `"tags"` unlock automatically to power targeted topic filtering, mastery analytics, and personalized AI study drills.
- **Dual Representation (`statement_plain` + `statement_latex`) & Absolute Single-Value `"answer"`:**
  - Each problem provides both clean ASCII (`statement_plain`) and `KaTeX`-ready mathematical typesetting (`statement_latex`).
  - Every `"answer"` field MUST resolve to **one exact, unambiguous, deterministic mathematical value**—such as a canonical integer (`"44"`), a fully reduced fraction (`"17/24"`), or a unique closed-form constant (`"1013"`), eliminating multi-answer ambiguity and grading subjectivity.
  - Audited automatically by **Arithmo HeuristicEliminator AI** and **Arithmo SymPyVeritas AI** in UTF-8 (no BOM) encoding.

</details>

---

<details open>
<summary><strong>3. AoPS-Inspired Transformative Synthesis &amp; Anti-LLM Engineering</strong></summary>

<br />

The Co-Founders enforce a strict three-stage mathematical engineering protocol so that every `.json` problem set in `Arithmo-Edge-Golden-Vault` preserves the elegance of classic Olympiad mathematics while remaining completely novel and unbreakable by automated solvers.

- **1. Transformative Logic Mutation (Never Verbatim Copying):**
  - Drawing deep inspiration from **Art of Problem Solving (AoPS)** Wiki archives, `IMO Shortlists`, and historical national Olympiads, every problem undergoes structural and algebraic re-engineering.
  - **Structural Mutation Axes:**
    - *Parameter & Modular Base Inversion:* Shifting prime moduli into composite prime-power rings ($p \to p^2$ or $1000$) to break standard Fermat/Euler shortcuts.
    - *Constraint Coupling:* Fusing two independent Olympiad lemmas (e.g., coupling a polynomial congruence with a minimal-sum functional recurrence) so a single memorized theorem cannot solve the problem.
    - *Configuration & Boundary Transformation:* Altering geometric loci, combinatorial adjacency forbidden-distances, and asymptotic bounds (`2026` / `2027` epoch parameterization) so web search and training-corpus memorization fail completely.
- **2. `75%` Plagiarism Gate (`Arithmo PlagioGuard AI`):**
  - Before any `.json` file is merged into `main`, **Arithmo PlagioGuard AI** executes multi-vector semantic, AST-expression, and n-gram fingerprinting against indexed AoPS, AMC/AIME, Putnam, and IMO archives.
  - **Hard Rejection Threshold:** Any problem exceeding **`75%` structural or phrasing similarity** is automatically blocked, guaranteeing `<75%` structural overlap and `100%` original problem prose across all thousands of `.json` sets.
- **3. Anti-LLM Solvability Verification (`Arithmo AdversarialRedTeam AI` + `IntuitionForge AI`):**
  - **Adversarial Frontier Model Stress-Testing:** **Arithmo AdversarialRedTeam AI** and **Arithmo IntuitionForge AI** test candidate problems against frontier foundation models (`GPT`, `Claude`, and base `Gemini`) under zero-tool chain-of-thought prompting. Problems solved trivially by surface pattern-matching are sent back for deeper logic mutation.
  - **Dual-Method Symbolic Ground Truth (`Arithmo SymPyVeritas AI`):** Every single-value `"answer"` is independently derived via two distinct mathematical pathways inside an isolated `Python + SymPy` execution sandbox—ensuring `100.00%` mathematical accuracy before a problem ever reaches a live competitor.

</details>

---

<details open>
<summary><strong>4. Automated AI Ingestion Pipeline, Standby Reserve Vault &amp; Contributor IP Rules</strong></summary>

<br />

- **1. Private GitHub PAT + Cloudflare Worker Ingestion:**
  - **Zero-Trust Credential Isolation:** **Arithmo GoldenVault Miner AI** never connects directly from frontend clients or public servers. All repository reads route through an authenticated **Cloudflare Worker Proxy**.
  - **Least-Privilege Fine-Grained PAT:** Access is governed by a dedicated GitHub Fine-Grained Personal Access Token scoped strictly to **`Contents: Read-only`** on `Arithmo-Edge-Golden-Vault` alone—encrypted inside Cloudflare Workers Secrets (`wrangler secret`) with automated 90-day rotation and zero write/delete permissions.
- **2. Live Contest Allocation &amp; `2-Backup` Standby Reserve Vault:**
  - **Scheduled Tournament Pipelines:** `Arithmo GoldenVault Miner AI` queries across the `5 Core Arena Folders` and `4 Expert Segment Subfolders` to allocate verified `10`-question `.json` sets dynamically across:
    - **Daily `17:00 UTC` Expert Rounds** (calibrated across `Segment_1_Apprentice` through `Segment_4_Apex`).
    - **Saturday Special Episodes** (themed hub-specific or cross-arena synthesis challenges).
    - **Sunday Mega Arena Contests** (high-stakes flagship battles powered primarily by `Segment_3_Vanguard` and `Segment_4_Apex`).
  - **`30-Second` Live Hot-Swap Protocol (`Arithmo ReserveBanker AI`):** Prior to every live contest window, **Arithmo ReserveBanker AI** pre-fetches and locks **`2` standby backup problems per segment** inside an encrypted memory buffer. If external collusion, anomaly detection, or an unforeseen leak occurs mid-event, the live arena executes an atomic **`30-second` hot-swap** without interrupting competitor timers.
- **3. Co-Founder Intellectual Property &amp; Perpetual Royalty-Free License:**
  - All original problem statements, transformative logic mutations, `.json` datasets (`Schema v1.2`), and verification metadata housed in `Arithmo-Edge-Golden-Vault` are legally governed by the Co-Founders' formal **`60% / 40%` equity and IP agreement (subject to a `24-month` vesting schedule)** executed between **Rayaan Tasnim (Chief System Architect)** and the **Co-Founder (Chief Mathematical Architect)**.
  - Under this binding charter, **Arithmo-Edge** (*Powered by Olympiad Edge*) holds an irrevocable, **perpetual, worldwide, royalty-free license** to deploy all Golden Vault `.json` problem sets across live competitive arenas and to utilize the repository as proprietary reinforcement-learning and alignment ground truth for all internal Arithmo AI models.

</details>

---

<hr>
<center>
Authorized by Rayaan Tasnim <br>
© All Rights Reserved <br>
© Arithmo-Edge 
<br>Powered by Olympiad Edge
</center>