import React, { useEffect } from "react";
import useProducts from "../hooks/useProducts";
import { LoaderWrapper } from "./styles/procutsList";

type Props = {
  productId: string | string[] | undefined;
};

export default function ProductDetails({ productId }: Props) {
  const { fetchCurrentProduct, currentProduct, relatedProducts, loading } =
    useProducts(1);

  useEffect(() => {
    
    fetchCurrentProduct(productId);
  }, []); // eslint-disable-line

  if (loading) {
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
