create extension if not exists "pgcrypto";

create table if not exists public.recipes (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null check (category in ('dinner', 'lunch', 'dessert', 'vegetarian')),
  time text not null,
  description text not null,
  ingredients jsonb not null default '[]'::jsonb,
  steps jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default timezone('utc', now())
);

alter table public.recipes enable row level security;

drop policy if exists "Public can read recipes" on public.recipes;
create policy "Public can read recipes"
on public.recipes
for select
to anon
using (true);

drop policy if exists "Public can insert recipes" on public.recipes;
create policy "Public can insert recipes"
on public.recipes
for insert
to anon
with check (true);

drop policy if exists "Public can update recipes" on public.recipes;
create policy "Public can update recipes"
on public.recipes
for update
to anon
using (true)
with check (true);

drop policy if exists "Public can delete recipes" on public.recipes;
create policy "Public can delete recipes"
on public.recipes
for delete
to anon
using (true);

insert into public.recipes (id, title, category, time, description, ingredients, steps)
values
  (
    '11111111-1111-1111-1111-111111111111',
    'Lemon Butter Pasta',
    'dinner',
    '20 min',
    'Silky pasta with lemon, black pepper, and a handful of herbs.',
    '["200g spaghetti","2 tbsp butter","1 lemon","2 garlic cloves","Parsley"]'::jsonb,
    '["Cook pasta until just shy of al dente.","Melt butter with garlic and lemon zest in a skillet.","Toss pasta with the sauce and loosen with pasta water.","Finish with lemon juice, parsley, and black pepper."]'::jsonb
  ),
  (
    '22222222-2222-2222-2222-222222222222',
    'Smoky Chickpea Bowls',
    'vegetarian',
    '25 min',
    'Roasted chickpeas, quick yogurt sauce, and crisp cucumbers over rice.',
    '["1 can chickpeas","1 tsp smoked paprika","Cooked rice","Greek yogurt","Cucumber"]'::jsonb,
    '["Roast chickpeas with oil, paprika, and salt.","Mix yogurt with lemon juice and garlic.","Slice cucumber and warm the rice.","Layer everything together and spoon over the sauce."]'::jsonb
  ),
  (
    '33333333-3333-3333-3333-333333333333',
    'Chicken Sheet Pan Supper',
    'dinner',
    '40 min',
    'Chicken thighs roasted with carrots, onions, and mustard glaze.',
    '["4 chicken thighs","3 carrots","1 red onion","1 tbsp Dijon mustard","Honey"]'::jsonb,
    '["Heat oven to 220C / 425F.","Spread vegetables on a tray and season well.","Coat chicken with mustard and honey, then place on top.","Roast until the chicken is deeply golden and cooked through."]'::jsonb
  ),
  (
    '44444444-4444-4444-4444-444444444444',
    'Tomato Toasts',
    'lunch',
    '15 min',
    'Thick toast rubbed with garlic and piled with crushed tomatoes.',
    '["Sourdough bread","2 ripe tomatoes","1 garlic clove","Olive oil","Basil"]'::jsonb,
    '["Toast the bread until crisp at the edges.","Rub each slice lightly with garlic.","Crush tomatoes with salt, oil, and torn basil.","Spoon over toast and finish with pepper."]'::jsonb
  ),
  (
    '55555555-5555-5555-5555-555555555555',
    'Brown Sugar Peaches',
    'dessert',
    '18 min',
    'Warm peaches with brown sugar and yogurt or ice cream.',
    '["3 peaches","2 tbsp brown sugar","Pinch of cinnamon","Butter","Yogurt or ice cream"]'::jsonb,
    '["Halve the peaches and place them cut-side up in a pan.","Dot with butter and sprinkle over brown sugar.","Bake until soft and syrupy.","Serve warm with yogurt or ice cream."]'::jsonb
  ),
  (
    '66666666-6666-6666-6666-666666666666',
    'Herby Tuna Salad',
    'lunch',
    '10 min',
    'A sharp, bright tuna salad for sandwiches, lettuce cups, or crackers.',
    '["1 can tuna","2 tbsp mayonnaise","1 tbsp capers","Celery","Dill"]'::jsonb,
    '["Drain tuna and flake into a bowl.","Add mayonnaise, capers, diced celery, and dill.","Season with lemon juice and black pepper.","Serve chilled or straight away."]'::jsonb
  )
on conflict (id) do nothing;
