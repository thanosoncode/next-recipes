import Link from "next/link";
import { StyledMeal } from "./styles/Meal.styled.js";
import { StyledInfo } from "./styles/Meal.styled.js";

const Meal = ({ meal }) => {
  const { id, name, reviews, region, category, image } = meal;

  return (
    <Link href="/meal/[id]" as={`/meal/${id}`}>
      <StyledMeal key={id}>
        <img src={image} alt={name} style={{ width: "200px" }} />
        <StyledInfo>
          <div>
            <h3>{name}</h3>
            <p>{reviews}</p>
          </div>
          <div>
            <span>{category}</span>
            <span>{region}</span>
          </div>
        </StyledInfo>
      </StyledMeal>
    </Link>
  );
};

export default Meal;
