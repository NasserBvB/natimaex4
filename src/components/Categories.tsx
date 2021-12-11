import React from "react";
import { Link } from "react-router-dom";
import {
    CategoriesWrapper, CategoryWrapper,
    GeneralWrapper
} from "./styles/categories";

export default function Category() {
  return (
    <Link to="/productname">
      <CategoryWrapper>Category name</CategoryWrapper>
    </Link>
  );
}

export const Categories = () => {
  return (
    <GeneralWrapper>
      <h1>Liste des categories</h1>
      <CategoriesWrapper>
        {new Array(100).fill(0).map((_, index) => (
          <Category key={index} />
        ))}
      </CategoriesWrapper>
    </GeneralWrapper>
  );
};
