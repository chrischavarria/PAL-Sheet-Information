const ingredients = [
  {
    name: "Benzoyl Peroxide",
    category: "Acne",
    tags: ["acne"],
    description: "Helps reduce acne-causing bacteria and unclog pores.",
    aliases: ["benzoyl", "peroxide", "bpo", "acne bacteria"],
  },
  {
    name: "Clindamycin",
    category: "Acne",
    tags: ["acne", "redness"],
    description: "A topical antibiotic that reduces bacteria and inflammation.",
    aliases: ["clinda", "topical antibiotic", "bacteria", "inflammation"],
  },
  {
    name: "Dapsone",
    category: "Acne",
    tags: ["acne", "redness"],
    description: "Helps minimize redness, swelling, and acne-related bumps.",
    aliases: ["redness", "swelling", "bumps"],
  },
  {
    name: "Metronidazole",
    category: "Redness",
    tags: ["redness"],
    description: "Soothes skin, helps reduce redness, and supports sensitive or reactive skin.",
    aliases: ["metro", "rosacea", "sensitive skin", "reactive skin"],
  },
  {
    name: "Ivermectin",
    category: "Redness",
    tags: ["redness"],
    description: "Reduces inflammatory lesions and helps improve redness-prone skin.",
    aliases: ["redness-prone", "inflammatory lesions", "rosacea"],
  },
  {
    name: "Azelaic Acid",
    category: "Tone",
    tags: ["acne", "redness", "tone"],
    description: "Helps unclog pores, calm inflammation, and brighten uneven skin tone.",
    aliases: ["azelaic", "pores", "brighten", "uneven tone"],
  },
  {
    name: "Sulfacetamide Sodium",
    category: "Acne",
    tags: ["acne"],
    description: "Reduces acne-causing bacteria and supports clearer skin.",
    aliases: ["sulfacetamide", "sodium sulfacetamide", "clearer skin"],
  },
  {
    name: "Sulfur",
    category: "Acne",
    tags: ["acne"],
    description: "Helps unclog pores, reduce oil, and calm inflammation.",
    aliases: ["oil", "pores", "inflammation"],
  },
  {
    name: "Spironolactone",
    category: "Acne",
    tags: ["acne"],
    description: "Helps reduce excess sebum production and support hormonal acne patterns.",
    aliases: ["spiro", "sebum", "hormonal acne", "oil"],
  },
  {
    name: "Tranexamic Acid",
    category: "Tone",
    tags: ["tone"],
    description: "Helps improve the appearance of dark spots, uneven tone, and post-inflammatory discoloration.",
    aliases: ["txa", "dark spots", "discoloration", "hyperpigmentation"],
  },
  {
    name: "Kojic Acid",
    category: "Tone",
    tags: ["tone"],
    description: "Helps reduce excess pigment formation and support even skin tone.",
    aliases: ["kojic", "pigment", "even tone"],
  },
  {
    name: "Hydroquinone",
    category: "Tone",
    tags: ["tone"],
    description: "A brightening ingredient used under provider supervision for hyperpigmentation.",
    aliases: ["hq", "brightening", "hyperpigmentation", "dark spots"],
  },
  {
    name: "Ascorbic Acid (Vitamin C)",
    category: "Tone",
    tags: ["tone", "barrier"],
    description: "Helps brighten skin tone and reduce oxidative stress.",
    aliases: ["ascorbic", "vitamin c", "brighten", "oxidative stress"],
  },
  {
    name: "Tretinoin",
    category: "Texture",
    tags: ["acne", "tone"],
    description: "A vitamin A derivative that promotes cell turnover, smooths texture, and supports improvement in uneven tone.",
    aliases: ["retinoid", "retin-a", "vitamin a", "texture", "cell turnover"],
  },
  {
    name: "Tazarotene",
    category: "Texture",
    tags: ["acne", "tone"],
    description: "A retinoid used to support texture, clarity, and discoloration.",
    aliases: ["tazorac", "retinoid", "texture", "clarity"],
  },
  {
    name: "Niacinamide",
    category: "Barrier",
    tags: ["barrier", "redness", "tone"],
    description: "Supports barrier function, reduces redness, and helps brighten uneven tone.",
    aliases: ["vitamin b3", "barrier", "redness", "brighten"],
  },
  {
    name: "Sodium Hyaluronate",
    category: "Barrier",
    tags: ["barrier"],
    description: "A hydrating humectant that attracts moisture and helps balance dryness.",
    aliases: ["hyaluronic", "hydrating", "humectant", "dryness"],
  },
  {
    name: "Oxymetazoline",
    category: "Redness",
    tags: ["redness"],
    description: "Topical vasoconstrictor to help reduce persistent redness and improve the appearance of flushed skin.",
    aliases: ["redness", "flushing", "vasoconstrictor"],
  },
  {
    name: "Estriol",
    category: "Barrier",
    tags: ["barrier"],
    description: "A gentle estrogen derivative sometimes used to support skin quality, texture, and treatment tolerance.",
    aliases: ["estrogen", "skin quality", "tolerance", "texture"],
  },
  {
    name: "Hydrocortisone",
    category: "Steroid",
    tags: ["steroid", "redness"],
    description: "Low-potency steroid to reduce redness, inflammation, and itching.",
    aliases: ["steroid", "itching", "inflammation", "redness"],
  },
  {
    name: "Metformin",
    category: "Acne",
    tags: ["acne"],
    description: "A topical agent that helps reduce excess oil and support clearer, more balanced skin.",
    aliases: ["oil", "balanced skin", "clearer skin"],
  },
  {
    name: "Fluocinolone Acetonide",
    category: "Steroid",
    tags: ["steroid", "redness"],
    description: "Low-potency corticosteroid used to reduce inflammation, redness, and irritation and improve treatment tolerance.",
    aliases: ["fluocinolone", "acetonide", "corticosteroid", "irritation"],
  },
  {
    name: "Eflornithine",
    category: "Hair Growth",
    tags: ["barrier"],
    description: "A topical agent that helps slow facial hair growth by inhibiting enzymes involved in hair production, supporting smoother skin over time.",
    aliases: ["facial hair", "hair growth", "smoother skin"],
  },
];

const grid = document.querySelector("#ingredient-grid");
const searchForm = document.querySelector(".search-panel");
const searchInput = document.querySelector("#ingredient-search");
const searchButton = searchForm.querySelector('button[type="submit"]');
const statusText = document.querySelector("#search-status");
const dialog = document.querySelector("#ingredient-dialog");
const dialogClose = document.querySelector(".dialog-close");
const dialogCategory = document.querySelector("#dialog-category");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");
const dialogAliases = document.querySelector("#dialog-aliases");
const chips = document.querySelectorAll(".chip");
const alphabetizedIngredients = [...ingredients].sort((a, b) => (
  a.name.localeCompare(b.name)
));

let activeFilter = "all";

function normalize(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function matchesIngredient(ingredient, query) {
  const haystack = normalize([
    ingredient.name,
    ingredient.category,
    ingredient.description,
    ingredient.aliases.join(" "),
  ].join(" "));
  return haystack.includes(normalize(query));
}

function openIngredient(ingredient) {
  dialogCategory.textContent = ingredient.category;
  dialogTitle.textContent = ingredient.name;
  dialogDescription.textContent = ingredient.description;
  dialogAliases.textContent = ingredient.aliases.join(", ");

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function createCard(ingredient) {
  const button = document.createElement("button");
  button.className = "ingredient-card";
  button.type = "button";
  button.dataset.tags = ingredient.tags.join(" ");
  button.innerHTML = `
    <span class="tag">${ingredient.category}</span>
    <h3>${ingredient.name}</h3>
    <p>${ingredient.description}</p>
  `;
  button.addEventListener("click", () => openIngredient(ingredient));
  return button;
}

function renderIngredients(items) {
  grid.replaceChildren(...items.map(createCard));
}

function getFilteredIngredients() {
  return alphabetizedIngredients.filter((ingredient) => (
    activeFilter === "all" || ingredient.tags.includes(activeFilter)
  ));
}

function updateGridFromFilter() {
  const filtered = getFilteredIngredients();
  renderIngredients(filtered);
  statusText.textContent = `${filtered.length} ingredient${filtered.length === 1 ? "" : "s"} shown.`;
}

function search() {
  const query = searchInput.value.trim();

  if (!query) {
    updateGridFromFilter();
    statusText.textContent = "Start typing to find an ingredient.";
    return;
  }

  const results = alphabetizedIngredients.filter((ingredient) => matchesIngredient(ingredient, query));
  renderIngredients(results);

  if (results.length === 1) {
    statusText.textContent = `1 match found for "${query}".`;
    openIngredient(results[0]);
    return;
  }

  if (results.length > 1) {
    statusText.textContent = `${results.length} matches found for "${query}". Select one below.`;
    return;
  }

  statusText.textContent = `No ingredient matched "${query}". Check your prescription label spelling or call the pharmacy.`;
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  if (!query) {
    updateGridFromFilter();
    statusText.textContent = "Start typing to find an ingredient.";
    return;
  }
  const results = alphabetizedIngredients.filter((ingredient) => matchesIngredient(ingredient, query));
  renderIngredients(results);
  statusText.textContent = results.length
    ? `${results.length} possible match${results.length === 1 ? "" : "es"} found.`
    : "No matches yet.";
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  search();
});

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  search();
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    search();
  }
});

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((item) => item.classList.remove("is-active"));
    chip.classList.add("is-active");
    activeFilter = chip.dataset.filter;
    searchInput.value = "";
    updateGridFromFilter();
  });
});

dialogClose.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  const clickedBackdrop =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (clickedBackdrop) {
    dialog.close();
  }
});

renderIngredients(alphabetizedIngredients);
