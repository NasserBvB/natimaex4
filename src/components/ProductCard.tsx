import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../types";
import {
  ProductImage,
  ProductPrice,
  ProductTitle,
  ProductWrapper
} from "./styles/product";

export const Product = React.forwardRef(function GetProduct(
  { image, price, title, id }: IProduct,
  ref: any
) {
  return (
    <Link to={`/products/${id}`}>
      <ProductWrapper ref={ref}>
        <ProductImage src={image} width="100%" height="100%" />
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>{price} MAD</ProductPrice>
      </ProductWrapper>
    </Link>
  );
});
