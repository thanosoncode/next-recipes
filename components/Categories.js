import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useGlobalContext } from "./Context";
import { StyledReadMore } from "./styles/MealDetails.styled";
import {
  StyledCategoriesList,
  StyledCategory,
} from "./styles/CategoriesList.styled";

const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

const Categories = () => {
  const { category, setCategory } = useGlobalContext();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = (id) => {};

  useEffect(() => {
    setLoading(true);

    const fetchCategories = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data) {
          setCategories(data.categories);
          console.log(data.categories);
        } else {
          setCategories([]);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);
  if (loading) {
    return <h4>Loading...</h4>;
  }
  if (!categories) {
    return <h4>sorry something went wrong</h4>;
  }
  return (
    <StyledCategoriesList>
      {categories.map((item) => {
        const {
          idCategory: id,
          strCategory: name,
          strCategoryDescription: body,
          strCategoryThumb: image,
        } = item;
        return (
          <Link href="/">
            <StyledCategory key={id} onClick={() => setCategory(name)}>
              <h4>{name}</h4>
              <img src={image} alt="" />
              <p>
                {body.slice(0, 200)}
                {/* <span onClick={() => handleReadMore(id)}>
                {readMore ? (
                  body.slice(200)
                ) : (
                  <StyledReadMore>&nbsp;read more</StyledReadMore>
                )}
              </span> */}
              </p>
            </StyledCategory>
          </Link>
        );
      })}
    </StyledCategoriesList>
  );
};

export default Categories;
