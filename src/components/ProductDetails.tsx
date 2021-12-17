import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { ProductCard } from "./ProductCard";
import Rating from "./Rating";
import { LoaderWrapper } from "./styles/procutsList";
import {
  ProductDetailsDescription,
  ProductDetailsHeader,
  ProductDetailsImage,
  ProductDetailsInfo,
  ProductDetailsPrice,
  ProductDetailsTitle,
  ProductDetailsWrapper,
  RelatedProducts
} from "./styles/productDetails";

export default function ProductDetails() {
  const params = useParams();
  const productId = params.productId;
  const { fetchCurrentProduct, currentProduct, relatedProducts, loading } =
    useProducts(1);

  useEffect(() => {
    fetchCurrentProduct(productId);
  }, [productId]); // eslint-disable-line

  if (loading || !currentProduct) {
    return (
      <LoaderWrapper
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={1000} //3 secs
      />
    );
  }

  return (
    <ProductDetailsWrapper>
      <ProductDetailsHeader>
        <ProductDetailsImage src={currentProduct.image} />
        <ProductDetailsInfo>
          <ProductDetailsTitle>{currentProduct.title}</ProductDetailsTitle>
          <ProductDetailsPrice>{currentProduct.price} MAD</ProductDetailsPrice>
          <ProductDetailsDescription>
            {currentProduct.description}
          </ProductDetailsDescription>
          <Rating {...currentProduct.rating} />
        </ProductDetailsInfo>
      </ProductDetailsHeader>
      <ProductDetailsTitle>Related products </ProductDetailsTitle> 
      <RelatedProducts>
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
       <Link to="#">Voir Plus...</Link>
      </RelatedProducts>
    </ProductDetailsWrapper>
  );
}
