import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../types";
import Rating from "./Rating";
import {
  MoreDetails,
  ProductImage,
  ProductPrice,
  ProductTitle,
  ProductWrapper
} from "./styles/product";

export const ProductCard = React.forwardRef(function GetProduct(
  { image, price, title, id, rating, hoverable }: IProduct & {hoverable?: boolean},
  ref: any
) {
  return (
    <ProductWrapper hoverable={hoverable} ref={ref}>
      <ProductImage src={image} width="100%" height="100%" />
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>{price} MAD</ProductPrice>
      <Rating {...rating} />
      <Link to={`/products/${id}`}>
        <MoreDetails>Details</MoreDetails>
      </Link>
    </ProductWrapper>
  );
});
