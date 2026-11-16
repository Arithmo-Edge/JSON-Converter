document.addEventListener("DOMContentLoaded", () => {
  const MAX_QUESTIONS = 10;

  // Core Elements
  const form = document.getElementById("metaForm");
  const btnGenerate = document.getElementById("btnGenerate");
  const validationStatusBox = document.getElementById("validationStatusBox");
  const btnRefreshAll = document.getElementById("btnRefreshAll");
  const btnCopy = document.getElementById("btnCopy");
  const btnDownloadJson = document.getElementById("btnDownloadJson");
  const btnGenerateAgain = document.getElementById("btnGenerateAgain");
  const formSection = document.getElementById("formSection");
  const outputCard = document.getElementById("outputCard");
  const codeOutput = document.getElementById("codeOutput");

  // Part-2 Dynamic Question Builder Elements
  const questionInputWrapper = document.getElementById("questionInputWrapper");
  const btnAddQuestion = document.getElementById("btnAddQuestion");
  const questionCounterHint = document.getElementById("questionCounterHint");

  // Header Elements
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mainHeader = document.getElementById("mainHeader");
  const themeToggleTargets = document.querySelectorAll(".theme-toggle-target");

  // Loader Overlay Elements
  const loaderOverlay = document.getElementById("loaderOverlay");
  const circleFill = document.getElementById("circleFill");
  const circleTimerText = document.getElementById("circleTimerText");
  const linearProgressBar = document.getElementById("linearProgressBar");
  const loaderStatusText = document.getElementById("loaderStatusText");
  const btnAbort = document.getElementById("btnAbort");

  const metaInputs = {
    hub: document.getElementById("hub"),
    segment: document.getElementById("segment"),
    set_id: document.getElementById("set_id"),
  };

  let isGenerating = false;
  let compilationInterval = null;
  let currentCompilationSecond = 0;
  let lastGeneratedFilename = "Arithmo_Edge_Golden_Set.json";
  const CIRCLE_CIRCUMFERENCE = 264; // 2 * pi * 42

  // 25-Asset Random Pre-Compensation Algorithm Matrix (5 Pools of 5 Technical Statements)
  const compilationPools = [
    // Pool 1 (Second 1)
    [
      "Booting Arithmo-Edge core...",
      "Initiating JSON compilation...",
      "Opening problem stream...",
      "Loading vault headers...",
      "Connecting schema handshakes...",
    ],
    // Pool 2 (Second 2)
    [
      "Parsing Golden Bank schema...",
      "Extracting hub & segment tokens...",
      "Scanning per-problem tag nodes...",
      "Reading problem sequences...",
      "Mapping core math variables...",
    ],
    // Pool 3 (Second 3)
    [
      "Sanitizing statement whitespace...",
      "Converting plain math to LaTeX...",
      "Formatting exponent & root nodes...",
      "Validating single-value answers...",
      "Checking duplicate statements...",
    ],
    // Pool 4 (Second 4)
    [
      "Indexing q_index 1 through 10...",
      "Verifying set_id signature...",
      "Structuring problem_count...",
      "Compiling LaTeX expressions...",
      "Auditing JSON syntax tree...",
    ],
    // Pool 5 (Second 5)
    [
      "Building Golden JSON payload...",
      "Injecting ecosystem metadata...",
      "Finalizing UTF-8 encoding...",
      "Packaging production .json...",
      "Deploying vault metrics...",
    ],
  ];

  function getRandomPoolItem(poolIndex) {
    const pool = compilationPools[poolIndex];
    const randomIndex = Math.floor(Math.random() * pool.length);
    return pool[randomIndex];
  }

  function updateLoaderProgress(sec) {
    const percent = (sec / 5) * 100;
    linearProgressBar.style.width = `${percent}%`;

    const strokeOffset =
      CIRCLE_CIRCUMFERENCE - (percent / 100) * CIRCLE_CIRCUMFERENCE;
    circleFill.style.strokeDashoffset = strokeOffset;

    const remaining = 5 - sec;
    circleTimerText.textContent = `${remaining}s`;

    if (sec >= 1 && sec <= 5) {
      loaderStatusText.textContent = getRandomPoolItem(sec - 1);
    }
  }

  // 0. MOBILE HAMBURGER DRAWER LOGIC
  const toggleDrawer = (forceState) => {
    const isOpen =
      forceState !== undefined
        ? forceState
        : !mobileDrawer.classList.contains("open");
    mobileDrawer.classList.toggle("open", isOpen);
    hamburgerBtn.classList.toggle("active", isOpen);
    hamburgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    hamburgerBtn.textContent = isOpen ? "✕" : "☰";
  };

  hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleDrawer();
  });

  document.addEventListener("click", (e) => {
    if (!mainHeader.contains(e.target)) {
      toggleDrawer(false);
    }
  });

  // 1. LIGHT / DARK THEME TOGGLE LOGIC
  const savedTheme = localStorage.getItem("df_theme") || "dark";

  const applyTheme = (theme) => {
    const isLight = theme === "light";
    document.body.classList.toggle("light-theme", isLight);
    themeToggleTargets.forEach((btn) => {
      btn.setAttribute(
        "title",
        isLight ? "Light Matrix Active" : "Dark Cyberpunk Active",
      );
      btn.textContent = isLight ? "☀️" : "⚡";
    });
  };

  applyTheme(savedTheme);

  themeToggleTargets.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentIsLight = document.body.classList.contains("light-theme");
      const nextTheme = currentIsLight ? "dark" : "light";
      localStorage.setItem("df_theme", nextTheme);
      applyTheme(nextTheme);
    });
  });

  // 2. AUTO-LATEX CONVERSION & TAG PARSING HELPERS
  function convertPlainToLatex(plainStr) {
    if (!plainStr) return "";
    let tex = plainStr.trim();

    // Convert fractions like (a)/(b) -> \frac{a}{b}
    tex = tex.replace(/\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, "\\frac{$1}{$2}");

    // Convert square roots like sqrt(x) -> \sqrt{x}
    tex = tex.replace(/sqrt\(([^()]+)\)/gi, "\\sqrt{$1}");

    // Convert multi-character exponents like 2^12 or x^(n+1) -> 2^{12} or x^{n+1}
    tex = tex.replace(/\^\(([^()]+)\)/g, "^{$1}");
    tex = tex.replace(/\^([a-zA-Z0-9\-+]{2,})/g, "^{$1}");

    // Convert relational operators <=, >=, !=
    tex = tex.replace(/<=/g, "\\le ");
    tex = tex.replace(/>=/g, "\\ge ");
    tex = tex.replace(/!=/g, "\\ne ");

    // Clean double spaces
    tex = tex.replace(/\s+/g, " ").trim();

    // Wrap in $ ... $ if not already wrapped
    if (!tex.startsWith("$") && !tex.endsWith("$")) {
      tex = `$${tex}$`;
    }
    return tex;
  }

  function cleanStatementText(rawText) {
    if (!rawText) return "";
    return rawText
      .replace(/[\r\n]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function parseTagsArray(rawTags) {
    if (!rawTags) return [];
    return rawTags
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);
  }

  // 3. DYNAMIC QUESTION ROW CREATION & AUTO-INDEXING ENGINE
  function createQuestionRow(allowRemove = true) {
    const row = document.createElement("div");
    row.className = "css-input-row question-row";
    row.style.flexDirection = "column";
    row.style.alignItems = "stretch";
    row.style.padding = "16px";
    row.style.border = "1px solid var(--border-color)";
    row.style.borderRadius = "8px";
    row.style.background = "rgba(168, 85, 247, 0.03)";

    const headerBar = document.createElement("div");
    headerBar.style.display = "flex";
    headerBar.style.justifyContent = "space-between";
    headerBar.style.alignItems = "center";
    headerBar.style.marginBottom = "8px";

    const indexLabel = document.createElement("label");
    indexLabel.className = "question-index-label";
    indexLabel.style.fontFamily = "'Fira Code', monospace";
    indexLabel.style.color = "var(--primary-neon)";
    indexLabel.textContent = "Question #1";

    headerBar.appendChild(indexLabel);

    if (allowRemove) {
      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "btn-remove-css";
      removeBtn.title = "Remove Question";
      removeBtn.textContent = "✕";
      removeBtn.style.width = "32px";
      removeBtn.style.height = "32px";
      removeBtn.style.fontSize = "0.9rem";

      removeBtn.addEventListener("click", () => {
        row.remove();
        reindexQuestions();
        checkFormValidation();
      });

      headerBar.appendChild(removeBtn);
    }

    const stmtInput = document.createElement("textarea");
    stmtInput.className = "q-statement-input";
    stmtInput.placeholder =
      "1. Question Statement (e.g., Find the number of divisors of 2^12 * 3^5)";
    stmtInput.style.minHeight = "65px";
    stmtInput.style.marginBottom = "8px";

    const tagsInput = document.createElement("input");
    tagsInput.type = "text";
    tagsInput.className = "q-tags-input";
    tagsInput.placeholder =
      "2. Problem Tags (Comma-separated, e.g. Modular Arithmetic, Pigeonhole Principle)";
    tagsInput.style.marginBottom = "8px";

    const ansInput = document.createElement("input");
    ansInput.type = "text";
    ansInput.className = "q-answer-input";
    ansInput.placeholder = "3. Single-Value Answer (e.g., 78)";

    const errSpan = document.createElement("span");
    errSpan.className = "error-msg q-error";
    errSpan.textContent =
      "Statement, Problem Tags, and Answer are required (no duplicate statements).";

    [stmtInput, tagsInput, ansInput].forEach((el) => {
      el.addEventListener("input", checkFormValidation);
      el.addEventListener("blur", checkFormValidation);
    });

    row.appendChild(headerBar);
    row.appendChild(stmtInput);
    row.appendChild(tagsInput);
    row.appendChild(ansInput);
    row.appendChild(errSpan);

    return row;
  }

  function reindexQuestions() {
    const rows = questionInputWrapper.querySelectorAll(".question-row");
    const count = rows.length;

    rows.forEach((row, idx) => {
      const label = row.querySelector(".question-index-label");
      if (label) {
        label.textContent = `Question #${idx + 1}`;
      }
      const removeBtn = row.querySelector(".btn-remove-css");
      if (removeBtn) {
        removeBtn.style.display = count > 1 ? "flex" : "none";
      }
    });

    questionCounterHint.textContent = `(${count}/${MAX_QUESTIONS} Questions Added)`;

    if (count >= MAX_QUESTIONS) {
      btnAddQuestion.disabled = true;
      btnAddQuestion.style.display = "none";
    } else {
      btnAddQuestion.disabled = false;
      btnAddQuestion.style.display = "inline-flex";
    }
  }

  function initializeQuestions() {
    questionInputWrapper.innerHTML = "";
    const firstRow = createQuestionRow(true);
    questionInputWrapper.appendChild(firstRow);
    reindexQuestions();
  }

  btnAddQuestion.addEventListener("click", () => {
    const currentCount =
      questionInputWrapper.querySelectorAll(".question-row").length;
    if (currentCount >= MAX_QUESTIONS) return;

    const newRow = createQuestionRow(true);
    questionInputWrapper.appendChild(newRow);
    reindexQuestions();
    newRow.querySelector(".q-statement-input").focus();
    checkFormValidation();
  });

  // 4. GLOBAL FORM VALIDATION & DYNAMIC RED VALIDATION NOTICE BOX ENGINE
  function checkFormValidation() {
    const missingRequirements = [];

    const hubValid = metaInputs.hub.value.trim() !== "";
    const segmentValid = metaInputs.segment.value.trim() !== "";
    const setIdValid = metaInputs.set_id.value.trim() !== "";

    if (!hubValid) missingRequirements.push("Select Main Hub");
    if (!segmentValid) missingRequirements.push("Select Expert Segment");
    if (!setIdValid) missingRequirements.push("Enter Set ID");

    const rows = Array.from(
      questionInputWrapper.querySelectorAll(".question-row"),
    );
    const totalRows = rows.length;

    if (totalRows < MAX_QUESTIONS) {
      const remaining = MAX_QUESTIONS - totalRows;
      missingRequirements.push(
        `Add ${remaining} more question${remaining === 1 ? "" : "s"} (${totalRows}/${MAX_QUESTIONS})`,
      );
    }

    const statementFreq = {};
    const rowDetails = rows.map((row, idx) => {
      const stmtEl = row.querySelector(".q-statement-input");
      const tagsEl = row.querySelector(".q-tags-input");
      const ansEl = row.querySelector(".q-answer-input");
      const errEl = row.querySelector(".q-error");

      const stmtVal = cleanStatementText(stmtEl.value);
      const tagsRaw = tagsEl.value.trim();
      const tagsArr = parseTagsArray(tagsRaw);
      const ansVal = ansEl.value.trim();

      if (stmtVal !== "") {
        const norm = stmtVal.toLowerCase();
        statementFreq[norm] = (statementFreq[norm] || 0) + 1;
      }

      return {
        qNum: idx + 1,
        stmtEl,
        tagsEl,
        ansEl,
        errEl,
        stmtVal,
        tagsRaw,
        tagsArr,
        ansVal,
      };
    });

    let duplicateFound = false;

    rowDetails.forEach((item) => {
      const {
        qNum,
        stmtEl,
        tagsEl,
        ansEl,
        errEl,
        stmtVal,
        tagsRaw,
        tagsArr,
        ansVal,
      } = item;
      const isDup = stmtVal !== "" && statementFreq[stmtVal.toLowerCase()] > 1;
      if (isDup) duplicateFound = true;

      const hasStmt = stmtVal !== "";
      const hasTags = tagsArr.length > 0;
      const hasAns = ansVal !== "";
      const anyTouched = hasStmt || tagsRaw !== "" || hasAns;

      // Statement input border state
      if (!hasStmt) {
        stmtEl.classList.remove("valid", "invalid");
      } else if (isDup) {
        stmtEl.classList.remove("valid");
        stmtEl.classList.add("invalid");
      } else {
        stmtEl.classList.remove("invalid");
        stmtEl.classList.add("valid");
      }

      // Tags input border state
      if (tagsRaw === "") {
        tagsEl.classList.remove("valid", "invalid");
      } else if (!hasTags) {
        tagsEl.classList.remove("valid");
        tagsEl.classList.add("invalid");
      } else {
        tagsEl.classList.remove("invalid");
        tagsEl.classList.add("valid");
      }

      // Answer input border state
      if (!hasAns) {
        ansEl.classList.remove("valid", "invalid");
      } else {
        ansEl.classList.remove("invalid");
        ansEl.classList.add("valid");
      }

      // Inline card error hint
      if (isDup) {
        errEl.textContent =
          "Duplicate question statement detected. Each question must be unique.";
        errEl.style.display = "block";
      } else if (anyTouched && (!hasStmt || !hasTags || !hasAns)) {
        errEl.textContent =
          "Statement, Problem Tags, and Single-Value Answer are all required.";
        errEl.style.display = "block";
      } else {
        errEl.style.display = "none";
      }

      // Exact per-question missing items for the Red Validation Status Box
      const qMissingParts = [];
      if (!hasStmt) qMissingParts.push("Statement");
      if (!hasTags) qMissingParts.push("Tags");
      if (!hasAns) qMissingParts.push("Answer");

      if (qMissingParts.length > 0) {
        missingRequirements.push(
          `Question #${qNum} ${qMissingParts.join(", ")} missing`,
        );
      }
      if (isDup) {
        missingRequirements.push(`Question #${qNum} duplicate statement`);
      }
    });

    // Keep Generate button text static and clean at all times
    btnGenerate.textContent = "GENERATE GOLDEN JSON ⚡";

    if (missingRequirements.length > 0 || duplicateFound) {
      btnGenerate.disabled = true;
      btnGenerate.classList.remove("valid-ready");
      validationStatusBox.textContent = `⚠️ Incomplete: ${missingRequirements.join(" • ")}`;
      validationStatusBox.classList.add("visible");
      return false;
    }

    // 100% of requirements satisfied
    validationStatusBox.classList.remove("visible");
    validationStatusBox.textContent = "";
    btnGenerate.disabled = false;
    btnGenerate.classList.add("valid-ready");
    return true;
  }

  Object.keys(metaInputs).forEach((key) => {
    const el = metaInputs[key];
    const errSpan = document.getElementById(`err-${key}`);

    const handleMetaChange = () => {
      const valid = el.value.trim() !== "";
      if (valid) {
        el.classList.remove("invalid");
        el.classList.add("valid");
        if (errSpan) errSpan.style.display = "none";
      } else {
        el.classList.remove("valid");
        el.classList.add("invalid");
        if (errSpan) errSpan.style.display = "block";
      }
      checkFormValidation();
    };

    el.addEventListener("input", handleMetaChange);
    el.addEventListener("change", handleMetaChange);
    el.addEventListener("blur", handleMetaChange);
  });

  // 5. GENERATE GOLDEN JSON SUBMISSION & CONFIRMATION EVENT INTERCEPTOR
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (isGenerating || !checkFormValidation()) return;

    const confirmed = confirm(
      "Initiate Golden Question Bank JSON Compilation? Sure?",
    );
    if (!confirmed) {
      return;
    }

    isGenerating = true;
    btnGenerate.disabled = true;
    formSection.classList.add("blurred");

    currentCompilationSecond = 0;
    updateLoaderProgress(0);
    circleTimerText.textContent = "5s";
    loaderStatusText.textContent =
      compilationPools[0][
        Math.floor(Math.random() * compilationPools[0].length)
      ];
    loaderOverlay.classList.add("active");

    compilationInterval = setInterval(() => {
      currentCompilationSecond++;
      updateLoaderProgress(currentCompilationSecond);

      if (currentCompilationSecond >= 5) {
        clearInterval(compilationInterval);
        setTimeout(() => {
          executeSuccessfulCompilation();
        }, 400);
      }
    }, 1000);
  });

  // 6. ABORT PROTOCOL
  btnAbort.addEventListener("click", () => {
    if (!isGenerating) return;

    if (compilationInterval) {
      clearInterval(compilationInterval);
      compilationInterval = null;
    }

    loaderOverlay.classList.remove("active");
    formSection.classList.remove("blurred");
    isGenerating = false;
    checkFormValidation();
  });

  function executeSuccessfulCompilation() {
    loaderOverlay.classList.remove("active");

    const segmentVal = metaInputs.segment.value.trim();
    const setIdVal = metaInputs.set_id.value.trim();
    const hubVal = metaInputs.hub.value.trim();

    const rows = Array.from(
      questionInputWrapper.querySelectorAll(".question-row"),
    );
    const problemsArray = rows.map((row, idx) => {
      const plainStmt = cleanStatementText(
        row.querySelector(".q-statement-input").value,
      );
      const latexStmt = convertPlainToLatex(plainStmt);
      const tagsArr = parseTagsArray(row.querySelector(".q-tags-input").value);
      const ansVal = row.querySelector(".q-answer-input").value.trim();

      return {
        q_index: idx + 1,
        statement_plain: plainStmt,
        statement_latex: latexStmt,
        tags: tagsArr,
        answer: ansVal,
      };
    });

    const goldenPayload = {
      schema_version: "1.2",
      ecosystem: "Arithmo-Edge",
      mode: "Expert",
      segment: segmentVal,
      set_id: setIdVal,
      hub: hubVal,
      tags_visibility: "unrated_practice_only",
      hidden_during_live_contest: true,
      problem_count: 10,
      problems: problemsArray,
    };

    const sanitizePart = (str) =>
      str.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_\-]/g, "");
    lastGeneratedFilename = `${sanitizePart(segmentVal)} ${sanitizePart(hubVal)} ${sanitizePart(setIdVal)}.json`;

    const compiledJson = JSON.stringify(goldenPayload, null, 2);
    codeOutput.textContent = compiledJson;

    formSection.style.display = "none";
    formSection.classList.remove("blurred");
    outputCard.style.display = "block";
    setTimeout(() => {
      outputCard.classList.add("visible");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);

    setTimeout(() => {
      isGenerating = false;
      checkFormValidation();
    }, 500);
  }

  // 7. REAL-TIME REFRESH INTEGRATION & ALERT MESSAGE
  btnRefreshAll.addEventListener("click", () => {
    const hasMetaValue = Object.values(metaInputs).some(
      (el) => el.value.trim() !== "",
    );
    const rows = Array.from(
      questionInputWrapper.querySelectorAll(".question-row"),
    );
    const hasQuestionValue = rows.some(
      (r) =>
        r.querySelector(".q-statement-input").value.trim() !== "" ||
        r.querySelector(".q-tags-input").value.trim() !== "" ||
        r.querySelector(".q-answer-input").value.trim() !== "",
    );

    if (!hasMetaValue && !hasQuestionValue && rows.length === 1) return;

    const refreshConfirmed = confirm(
      "Are you sure you want to reset and clear all fields?",
    );
    if (!refreshConfirmed) return;

    Object.values(metaInputs).forEach((el) => {
      el.value = "";
      el.classList.remove("valid", "invalid");
    });
    document
      .querySelectorAll(".error-msg")
      .forEach((msg) => (msg.style.display = "none"));

    initializeQuestions();
    checkFormValidation();
    window.scrollTo({ top: 0, behavior: "smooth" });

    const originalText = btnRefreshAll.innerHTML;
    btnRefreshAll.innerHTML = "REFRESHED! 🔄";
    btnRefreshAll.style.boxShadow = "0 0 20px #A855F7";

    setTimeout(() => {
      btnRefreshAll.innerHTML = originalText;
      btnRefreshAll.style.boxShadow = "";
    }, 1500);
  });

  // 8. COPY TO CLIPBOARD UTILITY
  btnCopy.addEventListener("click", () => {
    const rawText = codeOutput.textContent;
    if (!rawText) return;

    navigator.clipboard.writeText(rawText).then(() => {
      const originalText = btnCopy.innerHTML;
      btnCopy.innerHTML = "COPIED! ✨";
      btnCopy.style.borderColor = "var(--secondary-neon)";
      btnCopy.style.color = "var(--secondary-neon)";
      btnCopy.style.boxShadow = "var(--shadow-lime)";

      setTimeout(() => {
        btnCopy.innerHTML = originalText;
        btnCopy.style.borderColor = "";
        btnCopy.style.color = "";
        btnCopy.style.boxShadow = "";
      }, 1500);
    });
  });

  // 9. DOWNLOAD .JSON UTILITY WITH EXACT FILENAME FORMAT
  btnDownloadJson.addEventListener("click", () => {
    const rawJson = codeOutput.textContent;
    if (!rawJson) return;

    const blob = new Blob([rawJson], {
      type: "application/json;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = lastGeneratedFilename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);

    const originalText = btnDownloadJson.innerHTML;
    btnDownloadJson.innerHTML = "DOWNLOADED! ✅";
    setTimeout(() => {
      btnDownloadJson.innerHTML = originalText;
    }, 1500);
  });

  // 10. REGENERATE RESET CONTROL
  btnGenerateAgain.addEventListener("click", () => {
    outputCard.classList.remove("visible");
    setTimeout(() => {
      outputCard.style.display = "none";
      codeOutput.textContent = "";
      formSection.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);

    checkFormValidation();
  });

  // Initial UI Setup
  initializeQuestions();
  checkFormValidation();
});
