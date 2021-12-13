import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { LoaderWrapper } from "./styles/procutsList";


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
    <div>
      <div>current product</div>
      <pre>{JSON.stringify(currentProduct, null, 2)}</pre>

      <div>Related products</div>
      <pre>{JSON.stringify(relatedProducts, null, 3)}</pre>
    </div>
  );
}
