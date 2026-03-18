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

const recipeGrid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-chip");
const template = document.getElementById("recipeCardTemplate");

let activeFilter = "all";

function renderRecipes() {
  const term = searchInput.value.trim().toLowerCase();
  const visibleRecipes = recipes.filter((recipe) => {
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

  recipeGrid.innerHTML = "";

  if (visibleRecipes.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.textContent = "No recipes matched that search.";
    recipeGrid.appendChild(emptyState);
    return;
  }

  visibleRecipes.forEach((recipe) => {
    const fragment = template.content.cloneNode(true);

    fragment.querySelector(".recipe-tag").textContent = recipe.category;
    fragment.querySelector(".recipe-time").textContent = recipe.time;
    fragment.querySelector(".recipe-title").textContent = recipe.title;
    fragment.querySelector(".recipe-description").textContent =
      recipe.description;

    const ingredientList = fragment.querySelector(".ingredient-list");
    recipe.ingredients.forEach((ingredient) => {
      const li = document.createElement("li");
      li.textContent = ingredient;
      ingredientList.appendChild(li);
    });

    const stepList = fragment.querySelector(".step-list");
    recipe.steps.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      stepList.appendChild(li);
    });

    recipeGrid.appendChild(fragment);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    filterButtons.forEach((chip) => chip.classList.remove("active"));
    button.classList.add("active");
    renderRecipes();
  });
});

searchInput.addEventListener("input", renderRecipes);

renderRecipes();
