import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../types";
import Rating from "./Rating";
import {
  MoreDetails,
  ProductFooterCard,
  ProductImage,
  ProductPrice,
  ProductTitle,
  ProductWrapper
} from "./styles/product";

export const Product = React.forwardRef(function GetProduct(
  { image, price, title, id, rating }: IProduct,
  ref: any
) {
  return (
    <ProductWrapper ref={ref}>
      <ProductImage src={image} width="100%" height="100%" />
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>{price} MAD</ProductPrice>
      <ProductFooterCard>
        <Rating {...rating} />
        <Link to={`/products/${id}`}>
          <MoreDetails>Details</MoreDetails>
        </Link>
      </ProductFooterCard>
    </ProductWrapper>
  );
});
