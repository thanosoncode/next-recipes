import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { StyledMealDetails } from "../../../components/styles/MealDetails.styled.js";
import { Flex } from "../../../components/styles/MealDetails.styled.js";
import { FlexList } from "../../../components/styles/MealDetails.styled.js";
import { StyledReadMore } from "../../../components/styles/MealDetails.styled.js";

const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const Meal = () => {
  const router = useRouter();
  const { id } = router.query;
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const [readMore, setReadMore] = useState(false);

  const matchMeasuresAndIngredients = (meal) => {
    const ingredients = Object.entries(meal)
      .filter(
        (entry) => entry[0].startsWith("strIngredient") && entry[1] !== ""
      )
      .map((entry) => entry[1]);

    const measures = Object.entries(meal)
      .filter((entry) => entry[0].startsWith("strMeasure") && entry[1] !== " ")
      .map((entry) => entry[1]);

    let recipe = [];

    ingredients.forEach((ing, i) => {
      let array = [ing, measures[i]];
      recipe.push(array);
      return recipe;
    });
    return recipe;
  };

  useEffect(() => {
    const fetchById = async () => {
      setLoading(true);
      try {
        const res = await fetch(url + id);
        const data = await res.json();

        if (data.meals) {
          setMeal(data.meals[0]);
        } else {
          setMeal(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchById();
  }, [id]);

  useEffect(() => {
    if (meal) {
      setRecipe(matchMeasuresAndIngredients(meal));
    }
  }, [meal]);

  if (loading) {
    return <h4>Loading...</h4>;
  }
  if (!meal) {
    return <h4>meal not found</h4>;
  }
  return (
    <StyledMealDetails>
      <h1>{meal.strMeal}</h1>
      <Flex>
        <div>
          <img src={meal.strMealThumb} alt="" />
        </div>
        <div>
          <h2>Ingredients</h2>
          {recipe.map((item, index) => {
            return (
              <FlexList key={index}>
                <p>{item[0]}</p>
                <p>{item[1]}</p>
              </FlexList>
            );
          })}
        </div>
      </Flex>
      <h3>Instructions</h3>
      <p>
        {meal.strInstructions.slice(0, 300)}
        <span onClick={() => setReadMore(true)}>
          {readMore ? (
            meal.strInstructions.slice(300)
          ) : (
            <StyledReadMore>&nbsp;read more</StyledReadMore>
          )}
        </span>
      </p>
    </StyledMealDetails>
  );
};

export default Meal;
