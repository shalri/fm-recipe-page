import omeletteImg from "../assets/images/image-omelette.jpeg";

export const recipes = [
  {
    name: "Simple Omelette",
    desc: "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
    image: omeletteImg,
    prepTime: {
      total: "Approximately 10 minutes",
      preparation: "5 minutes",
      cooking: "5 minutes",
    },
    ingredients: [
      "2-3 large eggs",
      "Salt, to taste",
      "Pepper, to taste",
      "1 tablespoon of butter or oil",
      "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
    ],
    instructions: [
      {
        step: "Beat the eggs",
        desc: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. you can add a tablespoon of water or milk for a fluffier texture.",
      },
      {
        step: "Heat the pan",
        desc: "Place a non-stick frying pan over medium heat and add butter or oil.",
      },
      {
        step: "Cook the omelette",
        desc: "Once the butter is melted and bubbling, pour the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
      },
      {
        step: "Add fillings (optional)",
        desc: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
      },
      {
        step: "Fold and serve",
        desc: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for anotherminute, then slide it onto to a plate.",
      },
      {
        step: "Enjoy",
        desc: "Serve hot, with additional salt and pepper if needed.",
      },
    ],
    nutrition: {
      calories: { value: 277, unit: "kcal" },
      carbs: { value: 0, unit: "g" },
      protein: { value: 20, unit: "g" },
      fat: { value: 22, unit: "g" },
    },
  },
];
