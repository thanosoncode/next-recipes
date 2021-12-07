import { useGlobalContext } from "./Context";
import Meal from "./Meal";
import { StyledMealList } from "./styles/MealList.styled.js";

const MealList = () => {
  const { meals, loading } = useGlobalContext();

  if (loading) {
    return <div>loading...</div>;
  }
  if (meals < 1) {
    return <h4>Couldn&apos;t find recipes with that criteria</h4>;
  }
  return (
    <StyledMealList>
      {meals.map((meal) => {
        return <Meal key={meal.id} meal={meal} />;
      })}
    </StyledMealList>
  );
};

export default MealList;
