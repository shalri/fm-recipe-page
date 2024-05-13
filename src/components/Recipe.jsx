import PropTypes from "prop-types";
import { recipes } from "./recipes";

const Recipe = ({ name }) => {
  const recipe = recipes.find(
    (recipe) => recipe.name.toLowerCase() === name.toLowerCase(),
  );

  return (
    <main className="container mx-auto mb-auto bg-rp-white text-rp-wenge-brown md:p-10">
      <img src={recipe.image} alt={recipe.name} />
      <div className="px-[30px] md:px-10">
        <section className="mt-10">
          <h1 className="mb-6 font-young-serif text-[34px] leading-[1] text-rp-dark-charcoal">
            {recipe.name} Recipe
          </h1>
          <p>{recipe.desc}</p>
        </section>
        <section className=" mt-10 rounded-lg bg-rp-rose-white px-6 py-5">
          <h2 className="mb-3 text-[20px] font-bold text-rp-dark-raspberry">
            Preparation time
          </h2>
          <ul className="list-outside list-disc pl-5">
            <li className=" pb-2 pl-2 marker:text-rp-dark-raspberry">
              <span className="inline-block pl-2">
                <strong>Total</strong>: {recipe.prepTime.total}
              </span>
            </li>
            <li className="pb-2 pl-2 marker:pr-10 marker:text-rp-dark-raspberry">
              <span className="inline-block pl-3">
                <strong>Preparation</strong>: {recipe.prepTime.preparation}
              </span>
            </li>
            <li className="pb-1 pl-2 marker:text-rp-dark-raspberry">
              <span className="inline-block pl-3">
                <strong>Cooking</strong>: {recipe.prepTime.cooking}
              </span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

Recipe.propTypes = {
  name: PropTypes.string,
};

export default Recipe;
