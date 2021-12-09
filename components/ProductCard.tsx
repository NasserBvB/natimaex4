import Link from "next/link";
import React from "react";
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
    <Link href={`/products/${id}`} passHref>
      <ProductWrapper ref={ref}>
        <ProductImage
          src={image}
          width="100%"
          height="100%"
          layout="responsive"
        />
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>{price} MAD</ProductPrice>
      </ProductWrapper>
    </Link>
  );
});
