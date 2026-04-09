const STORAGE_KEY = "cookbook-recipes-v2";
const defaultRecipes = [
  {
    id: "matcha-bondies",
    title: "Matcha Bondies",
    category: "dessert",
    time: "200 degrees",
    description: "Fudgy matcha blondies with white chocolate and a soft, buttery centre.",
    ingredients: [
      "170g salted butter",
      "130g white chocolate",
      "16g matcha",
      "180g sugar",
      "70g brown sugar",
      "3 eggs",
      "6g vanilla extract",
      "100g flour (self raising or normal)",
    ],
    steps: [
      "Preheat the oven to 200 degrees and line your baking tin so the bondies are easy to lift out later.",
      "Add the salted butter and white chocolate to a heatproof bowl and melt them together until smooth and glossy.",
      "Whisk the matcha into the melted butter and chocolate mixture so there are no lumps left.",
      "In a separate bowl, add the eggs, sugar, brown sugar, and vanilla extract, then whisk until everything is fully combined.",
      "Pour the matcha mixture into the egg and sugar mixture and stir gently until the batter is smooth and evenly coloured.",
      "Add the flour and fold it through just until combined, being careful not to overmix the batter.",
      "Pour the batter into your prepared tin and spread it out evenly so it bakes into a flat layer.",
      "Bake at 200 degrees until the top is set and the edges have a light golden finish.",
      "Let the matcha bondies cool in the tin before slicing so they hold their shape properly.",
      "Slice up and enjoyyyyyy.",
    ],
  },
  {
    id: "cream-cheese-buns",
    title: "Cream Cheese Buns",
    category: "dessert",
    time: "20-25 min",
    description: "Soft filled buns with cream cheese, kalonji seeds, and a honey drizzle.",
    ingredients: [
      "1 cup warm milk",
      "1 tbsp yeast",
      "1 tbsp sugar",
      "3 cups flour",
      "1/3 cup melted butter",
      "1/2 block cream cheese, cubed",
      "1 egg for eggwash",
      "Sprinkle of kalonji seeds",
      "1/2 cup condensed milk to drizzle",
      "2 tbsp honey to drizzle",
    ],
    steps: [
      "Begin by combining milk, yeast, and sugar in a bowl and whisk until well combined.",
      "Add the flour 1 cup at a time, then add the melted butter.",
      "Combine everything in the bowl, then knead the dough into the shape of a ball.",
      "Place the dough in the bowl, drizzle a bit of oil on top, and cover.",
      "Allow the dough to rise for 40 mins.",
      "Punch the dough to release air, then roll it out.",
      "Separate the dough into pieces and set one piece aside.",
      "Continue rolling the remaining dough until fully stretched out.",
      "Grab a cookie shaper in the shape of a circle, or use a container or jar with a small sphere shape, and cut out the dough pieces.",
      "Set the circle pieces of dough on a plate and add a tsp of cream cheese to the center of each piece.",
      "Roll the dough into a ball and place it on the baking tray.",
      "Continue until the tray is full, then top with eggwash and kalonji seeds.",
      "Bake for 20-25 mins until golden brown.",
      "Remove from the oven and drizzle with condensed milk and honey while warm.",
      "Serve and enjoy.",
    ],
  },
  {
    id: "egyptian-style-hawawshi",
    title: "Egyptian Style Hawawshi",
    category: "dinner",
    time: "30 min",
    description: "Crisp stuffed pitas filled with spiced beef, herbs, and peppers.",
    ingredients: [
      "1 small onion, peeled and cut into quarters",
      "1 red bell pepper, seeded, stem removed, and cut into quarters",
      "1 serrano pepper, stemmed and cut into chunks (remove seeds if you want to keep it less spicy)",
      "Pinch of kosher salt",
      "1/2 cup fresh parsley leaves",
      "2 large garlic cloves",
      "1 lb ground beef",
      "1 tbsp tomato paste",
      "1/2 tsp kosher salt",
      "1/2 tsp ground black pepper",
      "1/2 tsp paprika",
      "1/4 tsp ground coriander",
      "1/8 tsp ground allspice",
      "1/8 tsp ground cardamom",
      "4 thick pita breads",
      "Olive oil for brushing and grilling",
    ],
    steps: [
      "In a food processor, combine the onion quarters, bell pepper, and serrano pepper with a pinch of salt.",
      "Blend until nearly smooth, like a salsa consistency.",
      "Scoop the blended vegetables into a cheesecloth or clean kitchen towel and squeeze out as much moisture as you can.",
      "Add the strained vegetables to a large mixing bowl and set aside.",
      "In the same food processor, add the fresh parsley leaves and garlic, then pulse until you have a smooth paste.",
      "Add the parsley and garlic paste to the bowl with the pepper and onion mixture, then add the ground beef.",
      "Stir the beef with the herbs and vegetable mixture, then add the tomato paste, kosher salt, black pepper, paprika, coriander, allspice, and cardamom.",
      "Mix thoroughly with your hands or a wooden spoon so the seasonings are evenly distributed throughout the meat.",
      "Slice each pita in half, then carefully open the inner pocket.",
      "Stuff about 1/2 cup of the meat mixture into each pocket and spread it evenly so the pita is filled edge to edge in an even layer.",
      "Repeat with the remaining pita bread and meat, then brush the outsides with olive oil.",
      "Heat a grill pan or gas grill over medium-high heat and place the stuffed pitas on the grill, oiled side down.",
      "Brush the top side with more olive oil while the first side grills for 3 to 4 minutes.",
      "Flip and grill for another 2 to 3 minutes, then stand the pitas upright on the open side to grill the exposed meat for about 1 more minute.",
      "Let rest for 5 minutes before serving and enjoy.",
    ],
  },
  {
    id: "baked-chicken-tacos",
    title: "Baked Chicken Tacos",
    category: "dinner",
    time: "25 min",
    description: "Crispy baked tacos filled with creamy spiced chicken and melted cheese.",
    ingredients: [
      "1 lb boneless chicken breast, cut into small pieces",
      "Salt to taste",
      "1 tbsp smoked paprika powder",
      "1 tsp garlic powder",
      "1/2 tsp black pepper",
      "1 tsp Cajun seasoning",
      "1-2 cloves fresh garlic, minced",
      "1 cup mixed bell pepper, diced",
      "1/2 cup corn, boiled",
      "1 yellow onion, diced",
      "1 jalapeno, chopped and seeded (optional)",
      "1 tbsp lemon juice",
      "4 tbsp cream cheese",
      "1/4 cup water",
      "1 tbsp oil, plus more for cooking",
      "1/2 cup mayonnaise",
      "1/2 cup sour cream",
      "1 tsp smoked paprika powder",
      "1 tsp garlic powder",
      "Salt and pepper to taste",
      "1 tsp Cajun seasoning",
      "1 tbsp lime juice",
      "1 tsp hot sauce",
      "1-2 tbsp fresh cilantro, chopped",
      "1 cup mixed shredded cheese",
      "10 mini flour tortillas",
      "2 tbsp oil (for brushing the tortillas)",
    ],
    steps: [
      "In a bowl, add the chicken pieces, salt, smoked paprika, garlic powder, black pepper, Cajun seasoning, and 1 tbsp oil.",
      "Mix well until the chicken is evenly coated.",
      "Heat a pan over medium heat with a little oil.",
      "Once hot, add the seasoned chicken and cook for 3 to 4 minutes, stirring occasionally.",
      "Add the minced garlic and cook for 1 to 2 minutes until fragrant.",
      "Add the diced onion, bell peppers, corn, and jalapeno if using.",
      "Cook for 3 to 4 minutes until the vegetables soften slightly and the chicken is cooked through.",
      "Lower the heat and add the cream cheese, lemon juice, and water.",
      "Stir until the cream cheese melts and forms a creamy sauce that coats the chicken and veggies.",
      "If the mixture seems too thin, simmer for 1 to 2 minutes until thickened, then adjust salt if needed and remove from heat.",
      "In a separate bowl, mix the mayonnaise, sour cream, smoked paprika, garlic powder, salt, pepper, Cajun seasoning, lime juice, hot sauce, and chopped cilantro to make the sauce.",
      "Preheat the oven to 400F.",
      "Lightly brush one side of each tortilla with oil.",
      "Flip the tortillas over and spoon the chicken filling onto the un-oiled side.",
      "Sprinkle with cheese, then fold or gently press the tortillas closed.",
      "Arrange them on a baking sheet and bake for 10 to 15 minutes until the tortillas are crispy and the cheese is melted.",
    ],
  },
  {
    id: "classic-tiramisu",
    title: "Classic Tiramisu",
    category: "dessert",
    time: "4 hr chill",
    description: "A classic tiramisu with mascarpone, coffee-soaked ladyfingers, and cocoa on top.",
    ingredients: [
      "2 eggs, separated",
      "80g sugar",
      "250g mascarpone",
      "1 tsp vanilla",
      "Ladyfingers",
      "Fresh coffee, cooled",
      "Cocoa powder for dusting",
    ],
    steps: [
      "Start by separating the 2 eggs into yolks and whites in separate bowls.",
      "Add 40g sugar to the egg yolks.",
      "Beat the egg yolks and sugar together until the mixture becomes pale in colour.",
      "In a separate bowl, add the remaining 40g sugar to the egg whites.",
      "Beat the egg whites and sugar together until the mixture doubles in volume and stays stiff when the bowl is turned upside down.",
      "Add the mascarpone to the egg yolk mixture and mix it in until smooth.",
      "Add the vanilla and mix again.",
      "Add the whipped egg whites to the mascarpone mixture and gently fold them in until fully combined.",
      "Quickly soak the ladyfingers in fresh coffee that has cooled down, then place them in your dish in an even layer.",
      "Add a layer of the cream and spread it out evenly.",
      "Add another layer of coffee-soaked ladyfingers.",
      "Finish with another layer of cream and smooth the top.",
      "Put the tiramisu in the fridge for a few hours, or leave it overnight.",
      "Take it out, dust with cocoa powder, and serve.",
    ],
  },
];

const recipeBook = document.getElementById("recipeBook");
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
const recipeFormTitle = document.getElementById("recipeFormTitle");
const recipeFormSubmit = document.getElementById("recipeFormSubmit");

let recipes = [];
let activeFilter = "all";
let currentPage = 0;
let lastDirection = "next";
let expandedRecipe = null;
let editingRecipeId = null;

function getConfig() {
  return window.COOKBOOK_CONFIG ?? {};
}

function hasSharedBackend() {
  const { supabaseUrl, supabaseAnonKey } = getConfig();
  return Boolean(supabaseUrl && supabaseAnonKey);
}

function getApiHeaders(includeJson = true) {
  const { supabaseAnonKey } = getConfig();
  const headers = {
    apikey: supabaseAnonKey,
    Authorization: `Bearer ${supabaseAnonKey}`,
  };

  if (includeJson) {
    headers["Content-Type"] = "application/json";
  }

  return headers;
}

function normalizeRecipe(recipe) {
  return {
    id: recipe.id ?? crypto.randomUUID(),
    title: recipe.title?.trim() ?? "",
    category: recipe.category ?? "dinner",
    time: recipe.time?.trim() ?? "",
    description: recipe.description?.trim() ?? "",
    ingredients: Array.isArray(recipe.ingredients)
      ? recipe.ingredients.map((item) => item.trim()).filter(Boolean)
      : [],
    steps: Array.isArray(recipe.steps)
      ? recipe.steps.map((item) => item.trim()).filter(Boolean)
      : [],
  };
}

function cloneDefaultRecipes() {
  return defaultRecipes.map((recipe) => normalizeRecipe(recipe));
}

function loadLocalRecipes() {
  try {
    const storedRecipes = window.localStorage.getItem(STORAGE_KEY);
    if (!storedRecipes) {
      return cloneDefaultRecipes();
    }

    const parsedRecipes = JSON.parse(storedRecipes);
    if (!Array.isArray(parsedRecipes)) {
      return cloneDefaultRecipes();
    }

    return parsedRecipes.map(normalizeRecipe);
  } catch {
    return cloneDefaultRecipes();
  }
}

function saveLocalRecipes() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
}

async function fetchSharedRecipes() {
  const { supabaseUrl } = getConfig();
  const response = await fetch(
    `${supabaseUrl}/rest/v1/recipes?select=*&order=created_at.desc.nullslast`,
    { headers: getApiHeaders(false) }
  );

  if (!response.ok) {
    throw new Error("Failed to load shared recipes.");
  }

  const data = await response.json();
  return data.map(normalizeRecipe);
}

async function insertSharedRecipe(recipe) {
  const { supabaseUrl } = getConfig();
  const response = await fetch(`${supabaseUrl}/rest/v1/recipes`, {
    method: "POST",
    headers: {
      ...getApiHeaders(),
      Prefer: "return=representation",
    },
    body: JSON.stringify(recipe),
  });

  if (!response.ok) {
    throw new Error("Failed to create recipe.");
  }

  const [createdRecipe] = await response.json();
  return normalizeRecipe(createdRecipe);
}

async function updateSharedRecipe(recipe) {
  const { supabaseUrl } = getConfig();
  const response = await fetch(
    `${supabaseUrl}/rest/v1/recipes?id=eq.${encodeURIComponent(recipe.id)}`,
    {
      method: "PATCH",
      headers: {
        ...getApiHeaders(),
        Prefer: "return=representation",
      },
      body: JSON.stringify(recipe),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update recipe.");
  }

  const [updatedRecipe] = await response.json();
  return normalizeRecipe(updatedRecipe);
}

async function deleteSharedRecipe(recipeId) {
  const { supabaseUrl } = getConfig();
  const response = await fetch(
    `${supabaseUrl}/rest/v1/recipes?id=eq.${encodeURIComponent(recipeId)}`,
    {
      method: "DELETE",
      headers: {
        ...getApiHeaders(),
        Prefer: "return=minimal",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete recipe.");
  }
}

async function loadRecipes() {
  if (!hasSharedBackend()) {
    recipes = loadLocalRecipes();
    return;
  }

  try {
    recipes = await fetchSharedRecipes();
  } catch (error) {
    console.error(error);
    recipes = loadLocalRecipes();
  }
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

    button.textContent = `${
      filter.charAt(0).toUpperCase() + filter.slice(1)
    } (${total})`;
  });
}

function renderRecipeCard(recipe) {
  const previewIngredients = recipe.ingredients.slice(0, 4);
  const previewSteps = recipe.steps.slice(0, 3);
  const ingredientItems = previewIngredients
    .map((ingredient) => `<li>${ingredient}</li>`)
    .join("");
  const stepItems = previewSteps.map((step) => `<li>${step}</li>`).join("");
  const hasMoreIngredients = recipe.ingredients.length > previewIngredients.length;
  const hasMoreSteps = recipe.steps.length > previewSteps.length;
  const previewHint =
    hasMoreIngredients || hasMoreSteps
      ? `<p class="recipe-preview-note">Press expand to see the full recipe.</p>`
      : "";

  return `
    <article class="recipe-page">
      <div class="page-actions">
        <button
          class="page-menu-trigger"
          type="button"
          data-menu-trigger="${recipe.id}"
          aria-label="Recipe actions for ${recipe.title}"
        >
          &#8942;
        </button>
        <div class="page-menu" data-menu="${recipe.id}" hidden>
          <button
            class="page-menu__item"
            type="button"
            data-edit-recipe="${recipe.id}"
          >
            Edit
          </button>
          <button
            class="page-menu__item page-menu__item--danger"
            type="button"
            data-delete-recipe="${recipe.id}"
          >
            Delete
          </button>
        </div>
        <button
          class="page-expand"
          type="button"
          data-expand-recipe="${recipe.id}"
          aria-label="Expand ${recipe.title}"
        >
          ⤢
        </button>
      </div>
      <div class="recipe-page__top">
        <p class="recipe-tag">${recipe.category}</p>
        <p class="recipe-time">${recipe.time}</p>
      </div>
      <h2 class="recipe-title">${recipe.title}</h2>
      <p class="recipe-description">${recipe.description}</p>
      <div class="recipe-details">
        <details class="recipe-section" open>
          <summary class="recipe-section__summary">Ingredients</summary>
          <ul class="ingredient-list">${ingredientItems}</ul>
          ${hasMoreIngredients ? '<p class="recipe-preview-more">More ingredients in expanded view.</p>' : ""}
        </details>
        <details class="recipe-section" open>
          <summary class="recipe-section__summary">Steps</summary>
          <ol class="step-list">${stepItems}</ol>
          ${hasMoreSteps ? '<p class="recipe-preview-more">More steps in expanded view.</p>' : ""}
        </details>
      </div>
      ${previewHint}
    </article>
  `;
}

function renderRecipes() {
  const visibleRecipes = getVisibleRecipes();
  const pageSize = 3;

  if (currentPage >= visibleRecipes.length) {
    currentPage = Math.max(visibleRecipes.length - pageSize, 0);
  }

  currentPage = Math.max(Math.floor(currentPage / pageSize) * pageSize, 0);

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
  recipeBook.innerHTML = pageRecipes.map(renderRecipeCard).join("");

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
        <details class="recipe-section" open>
          <summary class="recipe-section__summary">Ingredients</summary>
          <ul class="ingredient-list">${ingredientItems}</ul>
        </details>
        <details class="recipe-section" open>
          <summary class="recipe-section__summary">Steps</summary>
          <ol class="step-list">${stepItems}</ol>
        </details>
      </div>
    </article>
  `;
}

function openExpandedRecipe(recipeId) {
  const recipe = recipes.find((item) => item.id === recipeId);
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
  if (formOverlay.hidden) {
    document.body.classList.remove("reader-expanded");
  }
}

function openRecipeForm() {
  editingRecipeId = null;
  recipeFormTitle.textContent = "Add Recipe";
  recipeFormSubmit.textContent = "Save Recipe";
  addRecipeForm.reset();
  formOverlay.hidden = false;
  document.body.classList.add("reader-expanded");
}

function closeRecipeForm() {
  formOverlay.hidden = true;
  editingRecipeId = null;
  recipeFormTitle.textContent = "Add Recipe";
  recipeFormSubmit.textContent = "Save Recipe";
  addRecipeForm.reset();
  if (!expandedRecipe) {
    document.body.classList.remove("reader-expanded");
  }
}

function openEditRecipeForm(recipeId) {
  const recipe = recipes.find((item) => item.id === recipeId);
  if (!recipe) {
    return;
  }

  editingRecipeId = recipe.id;
  recipeFormTitle.textContent = "Edit Recipe";
  recipeFormSubmit.textContent = "Update Recipe";
  addRecipeForm.elements.title.value = recipe.title;
  addRecipeForm.elements.category.value = recipe.category;
  addRecipeForm.elements.time.value = recipe.time;
  addRecipeForm.elements.description.value = recipe.description;
  addRecipeForm.elements.ingredients.value = recipe.ingredients.join("\n");
  addRecipeForm.elements.steps.value = recipe.steps.join("\n");
  formOverlay.hidden = false;
  document.body.classList.add("reader-expanded");
}

async function deleteRecipe(recipeId) {
  const recipeIndex = recipes.findIndex((item) => item.id === recipeId);
  if (recipeIndex === -1) {
    return;
  }

  const removedRecipe = recipes[recipeIndex];

  if (hasSharedBackend()) {
    try {
      await deleteSharedRecipe(recipeId);
    } catch (error) {
      console.error(error);
      return;
    }
  }

  recipes.splice(recipeIndex, 1);
  if (!hasSharedBackend()) {
    saveLocalRecipes();
  }
  if (expandedRecipe?.id === removedRecipe.id) {
    closeExpandedRecipe();
  }
  updateFilterLabels();
  renderRecipes();
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
  const menuTrigger = event.target.closest("[data-menu-trigger]");
  if (menuTrigger) {
    const menu = recipeBook.querySelector(
      `[data-menu="${CSS.escape(menuTrigger.dataset.menuTrigger)}"]`
    );
    if (menu) {
      const isHidden = menu.hidden;
      recipeBook
        .querySelectorAll(".page-menu")
        .forEach((item) => (item.hidden = true));
      menu.hidden = !isHidden;
    }
    return;
  }

  const editTrigger = event.target.closest("[data-edit-recipe]");
  if (editTrigger) {
    recipeBook.querySelectorAll(".page-menu").forEach((item) => (item.hidden = true));
    openEditRecipeForm(editTrigger.dataset.editRecipe);
    return;
  }

  const deleteTrigger = event.target.closest("[data-delete-recipe]");
  if (deleteTrigger) {
    recipeBook.querySelectorAll(".page-menu").forEach((item) => (item.hidden = true));
    void deleteRecipe(deleteTrigger.dataset.deleteRecipe);
    return;
  }

  const expandTrigger = event.target.closest("[data-expand-recipe]");
  if (!expandTrigger) {
    recipeBook.querySelectorAll(".page-menu").forEach((item) => (item.hidden = true));
    return;
  }

  openExpandedRecipe(expandTrigger.dataset.expandRecipe);
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

addRecipeForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(addRecipeForm);
  const recipePayload = normalizeRecipe({
    id: editingRecipeId ?? crypto.randomUUID(),
    title: formData.get("title"),
    category: formData.get("category"),
    time: formData.get("time"),
    description: formData.get("description"),
    ingredients: formData
      .get("ingredients")
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean),
    steps: formData
      .get("steps")
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean),
  });

  if (hasSharedBackend()) {
    try {
      const storedRecipe = editingRecipeId
        ? await updateSharedRecipe(recipePayload)
        : await insertSharedRecipe(recipePayload);

      if (editingRecipeId) {
        const recipeIndex = recipes.findIndex((item) => item.id === editingRecipeId);
        if (recipeIndex !== -1) {
          recipes[recipeIndex] = storedRecipe;
        }
      } else {
        recipes.unshift(storedRecipe);
      }
    } catch (error) {
      console.error(error);
      return;
    }
  } else if (editingRecipeId) {
    const recipeIndex = recipes.findIndex((item) => item.id === editingRecipeId);
    if (recipeIndex !== -1) {
      recipes[recipeIndex] = recipePayload;
    }
    saveLocalRecipes();
  } else {
    recipes.unshift(recipePayload);
    saveLocalRecipes();
  }

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

});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".page-actions")) {
    recipeBook.querySelectorAll(".page-menu").forEach((item) => (item.hidden = true));
  }
});

async function initializeApp() {
  await loadRecipes();
  updateFilterLabels();
  renderRecipes();
}

void initializeApp();
