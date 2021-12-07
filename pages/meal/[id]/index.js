import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const Meal = () => {
  const router = useRouter();
  const { id } = router.query;
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(id);

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

  if (loading) {
    return <h4>Loading...</h4>;
  }
  if (!meal) {
    return <h4>meal not found</h4>;
  }
  return <div>{meal.strMeal}</div>;
};

export default Meal;
