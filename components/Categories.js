import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useGlobalContext } from "./Context";
import { StyledReadMore } from "./styles/MealDetails.styled";
import {
  StyledCategoriesList,
  StyledCategory,
} from "./styles/CategoriesList.styled";
import Loading from "./Loading";

const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

const Categories = () => {
  const { category, setCategory, menu, setMenu } = useGlobalContext();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchCategories = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data) {
          setCategories(data.categories);
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
    return <Loading />;
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
          <Link href="/" key={id}>
            <StyledCategory
              key={id}
              onClick={() => {
                setCategory(name);
                setMenu(!menu);
              }}
            >
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
