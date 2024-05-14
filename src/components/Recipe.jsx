import PropTypes from "prop-types";
import { recipes } from "./recipes";

const Recipe = ({ name }) => {
  const recipe = recipes.find(
    (recipe) => recipe.name.toLowerCase() === name.toLowerCase(),
  );

  return (
    <main className="mx-auto bg-rp-white text-rp-wenge-brown sm:container sm:max-w-[736px] sm:rounded-[26px] sm:p-10">
      <img src={recipe.image} alt={recipe.name} className="sm:rounded-2xl" />
      <div className="px-[30px] sm:px-0">
        <section className="mt-10">
          <h1 className="mb-6 font-young-serif text-[34px] leading-[1] text-rp-dark-charcoal sm:text-[40px]">
            {recipe.name} Recipe
          </h1>
          <p>{recipe.desc}</p>
        </section>
        <section className=" mt-10 rounded-lg bg-rp-rose-white px-6 py-5">
          <h2 className="mb-3 text-[20px] font-bold text-rp-dark-raspberry">
            Preparation time
          </h2>
          <ul className="list-outside list-disc pl-5">
            {recipe.prepTime.map((prep) => (
              <li
                className=" pb-2 pl-2 marker:text-rp-dark-raspberry"
                key={prep.title}
              >
                <span className="inline-block pl-2 align-middle">
                  <strong>{prep.title}</strong>: {prep.time}
                </span>
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-6 border-b-2 border-rp-light-grey pb-6">
          <h2 className="mb-4 font-young-serif text-[28px] text-rp-nutmeg">
            Ingredients
          </h2>
          <ul className="list-outside list-disc pl-5">
            {recipe.ingredients.map((ingredient, index) => (
              <li
                className="pb-2 pl-2 marker:pr-10 marker:text-rp-nutmeg"
                key={index}
              >
                <span className="inline-block pl-3 align-middle">
                  {ingredient}
                </span>
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-6 border-b-2 border-rp-light-grey pb-6">
          <h2 className="mb-4 font-young-serif text-[28px] text-rp-nutmeg">
            Instructions
          </h2>
          <ol className="list-outside list-decimal pl-5 marker:font-bold">
            {recipe.instructions.map((instruction, index) => (
              <li
                className="pb-2 pl-2 marker:pr-10 marker:text-rp-nutmeg"
                key={index}
              >
                <span className="inline-block pl-3 align-top">
                  <strong>{instruction.step}</strong>: {instruction.desc}
                </span>
              </li>
            ))}
          </ol>
        </section>
        <section className="mt-6">
          <h2 className="mb-4 font-young-serif text-[28px] text-rp-nutmeg">
            Nutrition
          </h2>
          <p className="mb-4">
            The table below shows the nutritional values per serving without the
            additional fillings.
          </p>
          <div className="grid w-full grid-cols-1 divide-y divide-rp-light-grey text-[16px]">
            {recipe.nutrition.map((nutrient) => (
              <div className="grid grid-cols-2 py-2 pl-8" key={nutrient.name}>
                <div className="">{nutrient.name}</div>
                <div className="font-bold text-rp-nutmeg">
                  {nutrient.amount}
                  {nutrient.unit}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

Recipe.propTypes = {
  name: PropTypes.string,
};

export default Recipe;
