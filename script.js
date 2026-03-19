const recipes = [
  {
    title: "Lemon Butter Pasta",
    category: "dinner",
    time: "20 min",
    description: "Silky pasta with lemon, black pepper, and a handful of herbs.",
    ingredients: [
      "200g spaghetti",
      "2 tbsp butter",
      "1 lemon",
      "2 garlic cloves",
      "Parsley",
    ],
    steps: [
      "Cook pasta until just shy of al dente.",
      "Melt butter with garlic and lemon zest in a skillet.",
      "Toss pasta with the sauce and loosen with pasta water.",
      "Finish with lemon juice, parsley, and black pepper.",
    ],
  },
  {
    title: "Smoky Chickpea Bowls",
    category: "vegetarian",
    time: "25 min",
    description: "Roasted chickpeas, quick yogurt sauce, and crisp cucumbers over rice.",
    ingredients: [
      "1 can chickpeas",
      "1 tsp smoked paprika",
      "Cooked rice",
      "Greek yogurt",
      "Cucumber",
    ],
    steps: [
      "Roast chickpeas with oil, paprika, and salt.",
      "Mix yogurt with lemon juice and garlic.",
      "Slice cucumber and warm the rice.",
      "Layer everything together and spoon over the sauce.",
    ],
  },
  {
    title: "Chicken Sheet Pan Supper",
    category: "dinner",
    time: "40 min",
    description: "Chicken thighs roasted with carrots, onions, and mustard glaze.",
    ingredients: [
      "4 chicken thighs",
      "3 carrots",
      "1 red onion",
      "1 tbsp Dijon mustard",
      "Honey",
    ],
    steps: [
      "Heat oven to 220C / 425F.",
      "Spread vegetables on a tray and season well.",
      "Coat chicken with mustard and honey, then place on top.",
      "Roast until the chicken is deeply golden and cooked through.",
    ],
  },
  {
    title: "Tomato Toasts",
    category: "lunch",
    time: "15 min",
    description: "Thick toast rubbed with garlic and piled with crushed tomatoes.",
    ingredients: [
      "Sourdough bread",
      "2 ripe tomatoes",
      "1 garlic clove",
      "Olive oil",
      "Basil",
    ],
    steps: [
      "Toast the bread until crisp at the edges.",
      "Rub each slice lightly with garlic.",
      "Crush tomatoes with salt, oil, and torn basil.",
      "Spoon over toast and finish with pepper.",
    ],
  },
  {
    title: "Brown Sugar Peaches",
    category: "dessert",
    time: "18 min",
    description: "Warm peaches with brown sugar and yogurt or ice cream.",
    ingredients: [
      "3 peaches",
      "2 tbsp brown sugar",
      "Pinch of cinnamon",
      "Butter",
      "Yogurt or ice cream",
    ],
    steps: [
      "Halve the peaches and place them cut-side up in a pan.",
      "Dot with butter and sprinkle over brown sugar.",
      "Bake until soft and syrupy.",
      "Serve warm with yogurt or ice cream.",
    ],
  },
  {
    title: "Herby Tuna Salad",
    category: "lunch",
    time: "10 min",
    description: "A sharp, bright tuna salad for sandwiches, lettuce cups, or crackers.",
    ingredients: [
      "1 can tuna",
      "2 tbsp mayonnaise",
      "1 tbsp capers",
      "Celery",
      "Dill",
    ],
    steps: [
      "Drain tuna and flake into a bowl.",
      "Add mayonnaise, capers, diced celery, and dill.",
      "Season with lemon juice and black pepper.",
      "Serve chilled or straight away.",
    ],
  },
];

const recipeBook = document.getElementById("recipeBook");
const bookReader = document.getElementById("bookReader");
const expandBookButton = document.getElementById("expandBook");
const prevPageButton = document.getElementById("prevPage");
const nextPageButton = document.getElementById("nextPage");
const pageIndicator = document.getElementById("pageIndicator");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-chip");
const pageOverlay = document.getElementById("pageOverlay");
const overlayPage = document.getElementById("overlayPage");
const closeOverlayButton = document.getElementById("closeOverlay");
const addRecipeButton = document.getElementById("addRecipeButton");
const formOverlay = document.getElementById("formOverlay");
const closeFormOverlayButton = document.getElementById("closeFormOverlay");
const addRecipeForm = document.getElementById("addRecipeForm");

let activeFilter = "all";
let currentPage = 0;
let lastDirection = "next";
let isExpanded = false;
let expandedRecipe = null;

function syncExpandButton() {
  expandBookButton.textContent = isExpanded ? "⤡" : "⤢";
  expandBookButton.setAttribute(
    "aria-label",
    isExpanded ? "Collapse book view" : "Expand book view"
  );
}

function getVisibleRecipes() {
  const term = searchInput.value.trim().toLowerCase();

  return recipes.filter((recipe) => {
    const matchesFilter =
      activeFilter === "all" || recipe.category === activeFilter;
    const haystack = [
      recipe.title,
      recipe.description,
      ...recipe.ingredients,
      recipe.category,
    ]
      .join(" ")
      .toLowerCase();

    return matchesFilter && haystack.includes(term);
  });
}

function updateFilterLabels() {
  filterButtons.forEach((button) => {
    const filter = button.dataset.filter;
    const total =
      filter === "all"
        ? recipes.length
        : recipes.filter((recipe) => recipe.category === filter).length;

    button.textContent = `${filter.charAt(0).toUpperCase()}${filter.slice(1)} (${total})`;
  });
}

function renderRecipes() {
  const visibleRecipes = getVisibleRecipes();
  const pageSize = 3;

  if (currentPage >= visibleRecipes.length) {
    currentPage = Math.max(visibleRecipes.length - pageSize, 0);
  }

  currentPage = Math.max(Math.floor(currentPage / pageSize) * pageSize, 0);

  if (currentPage < 0) {
    currentPage = 0;
  }

  recipeBook.classList.remove("flip-next", "flip-prev");
  void recipeBook.offsetWidth;
  recipeBook.classList.add(
    lastDirection === "prev" ? "flip-prev" : "flip-next"
  );

  if (visibleRecipes.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.textContent = "No recipes matched that search.";
    recipeBook.innerHTML = "";
    recipeBook.appendChild(emptyState);
    pageIndicator.textContent = "0 / 0";
    prevPageButton.disabled = true;
    nextPageButton.disabled = true;
    return;
  }

  const pageRecipes = visibleRecipes.slice(currentPage, currentPage + pageSize);

  recipeBook.innerHTML = pageRecipes
    .map((recipe) => {
      const ingredientItems = recipe.ingredients
        .map((ingredient) => `<li>${ingredient}</li>`)
        .join("");
      const stepItems = recipe.steps.map((step) => `<li>${step}</li>`).join("");

      return `
        <article class="recipe-page">
          <button
            class="page-expand"
            type="button"
            data-expand-recipe="${recipe.title}"
            aria-label="Expand ${recipe.title}"
          >
            ⤢
          </button>
          <div class="recipe-page__top">
            <p class="recipe-tag">${recipe.category}</p>
            <p class="recipe-time">${recipe.time}</p>
          </div>
          <h2 class="recipe-title">${recipe.title}</h2>
          <p class="recipe-description">${recipe.description}</p>
          <div class="recipe-details">
            <div>
              <h3>Ingredients</h3>
              <ul class="ingredient-list">${ingredientItems}</ul>
            </div>
            <div>
              <h3>Steps</h3>
              <ol class="step-list">${stepItems}</ol>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  const currentSpread = Math.floor(currentPage / pageSize) + 1;
  const totalSpreads = Math.ceil(visibleRecipes.length / pageSize);
  pageIndicator.textContent = `${currentSpread} / ${totalSpreads}`;
  prevPageButton.disabled = currentPage === 0;
  nextPageButton.disabled = currentPage + pageSize >= visibleRecipes.length;
}

function createExpandedPageMarkup(recipe) {
  const ingredientItems = recipe.ingredients
    .map((ingredient) => `<li>${ingredient}</li>`)
    .join("");
  const stepItems = recipe.steps.map((step) => `<li>${step}</li>`).join("");

  return `
    <article class="recipe-page recipe-page--expanded">
      <div class="recipe-page__top">
        <p class="recipe-tag">${recipe.category}</p>
        <p class="recipe-time">${recipe.time}</p>
      </div>
      <h2 class="recipe-title">${recipe.title}</h2>
      <p class="recipe-description">${recipe.description}</p>
      <div class="recipe-details">
        <div>
          <h3>Ingredients</h3>
          <ul class="ingredient-list">${ingredientItems}</ul>
        </div>
        <div>
          <h3>Steps</h3>
          <ol class="step-list">${stepItems}</ol>
        </div>
      </div>
    </article>
  `;
}

function openExpandedRecipe(recipeTitle) {
  const recipe = recipes.find((item) => item.title === recipeTitle);
  if (!recipe) {
    return;
  }

  expandedRecipe = recipe;
  overlayPage.innerHTML = createExpandedPageMarkup(recipe);
  pageOverlay.hidden = false;
  document.body.classList.add("reader-expanded");
}

function closeExpandedRecipe() {
  expandedRecipe = null;
  pageOverlay.hidden = true;
  overlayPage.innerHTML = "";
  if (!isExpanded) {
    document.body.classList.remove("reader-expanded");
  }
}

function openRecipeForm() {
  formOverlay.hidden = false;
  document.body.classList.add("reader-expanded");
}

function closeRecipeForm() {
  formOverlay.hidden = true;
  addRecipeForm.reset();
  if (!isExpanded && !expandedRecipe) {
    document.body.classList.remove("reader-expanded");
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    currentPage = 0;
    lastDirection = "next";

    filterButtons.forEach((chip) => chip.classList.remove("active"));
    button.classList.add("active");
    renderRecipes();
  });
});

searchInput.addEventListener("input", () => {
  currentPage = 0;
  lastDirection = "next";
  renderRecipes();
});

prevPageButton.addEventListener("click", () => {
  if (currentPage === 0) {
    return;
  }

  currentPage -= 3;
  lastDirection = "prev";
  renderRecipes();
});

nextPageButton.addEventListener("click", () => {
  const visibleRecipes = getVisibleRecipes();
  if (currentPage + 3 >= visibleRecipes.length) {
    return;
  }

  currentPage += 3;
  lastDirection = "next";
  renderRecipes();
});

recipeBook.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-expand-recipe]");
  if (!trigger) {
    return;
  }

  openExpandedRecipe(trigger.dataset.expandRecipe);
});

expandBookButton.addEventListener("click", () => {
  isExpanded = !isExpanded;
  bookReader.classList.toggle("is-expanded", isExpanded);
  document.body.classList.toggle("reader-expanded", isExpanded);
  syncExpandButton();
});

closeOverlayButton.addEventListener("click", closeExpandedRecipe);

pageOverlay.addEventListener("click", (event) => {
  if (event.target === pageOverlay) {
    closeExpandedRecipe();
  }
});

addRecipeButton.addEventListener("click", openRecipeForm);

closeFormOverlayButton.addEventListener("click", closeRecipeForm);

formOverlay.addEventListener("click", (event) => {
  if (event.target === formOverlay) {
    closeRecipeForm();
  }
});

addRecipeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(addRecipeForm);
  const ingredients = formData
    .get("ingredients")
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
  const steps = formData
    .get("steps")
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

  recipes.unshift({
    title: formData.get("title").trim(),
    category: formData.get("category"),
    time: formData.get("time").trim(),
    description: formData.get("description").trim(),
    ingredients,
    steps,
  });

  activeFilter = "all";
  currentPage = 0;
  lastDirection = "next";
  filterButtons.forEach((chip) => chip.classList.remove("active"));
  document.querySelector('[data-filter="all"]').classList.add("active");
  updateFilterLabels();
  renderRecipes();
  closeRecipeForm();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && expandedRecipe) {
    closeExpandedRecipe();
    return;
  }

  if (event.key === "Escape" && !formOverlay.hidden) {
    closeRecipeForm();
    return;
  }

  if (event.key === "Escape" && isExpanded) {
    isExpanded = false;
    bookReader.classList.remove("is-expanded");
    if (!expandedRecipe) {
      document.body.classList.remove("reader-expanded");
    }
    syncExpandButton();
  }
});

syncExpandButton();
updateFilterLabels();
renderRecipes();
