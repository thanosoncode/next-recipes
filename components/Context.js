import { useState, useContext, useEffect, createContext } from "react";

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [term, setTerm] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  const fetchRecipes = async (param) => {
    setLoading(true);
    try {
      const response = await fetch(param);
      const data = await response.json();

      const { meals } = data;
      if (meals) {
        const newMeals = meals.map((item, index) => {
          const { idMeal, strMeal, strArea, strCategory, strMealThumb } = item;
          const createReviews = () => {
            const stars = ["⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];
            return stars[Math.floor(Math.random() * stars.length)];
          };
          return {
            id: idMeal,
            name: strMeal,
            image: strMealThumb,
            region: strArea,
            category: strCategory,
            reviews: createReviews(),
          };
        });
        setMeals(newMeals);
      } else {
        setMeals([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
    );
  }, [term]);

  useEffect(() => {
    fetchRecipes(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
  }, [category]);

  useEffect(() => {
    fetchRecipes(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${region}`
    );
  }, [region]);

  const value = {
    term,
    setTerm,
    handleSubmitForm,
    loading,
    meals,
    category,
    setCategory,
    region,
    setRegion,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
