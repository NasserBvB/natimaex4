import React, { useCallback, useRef, useState } from "react";
import useProducts from "../hooks/useProducts";
import { Product } from "./ProductCard";
import { LoaderWrapper, ProductsListWrapper } from "./styles/procutsList";

export default function ProductList() {
  const [pageNumber, setPageNumber] = useState(1);
  const { productList, loading, hasMore } = useProducts(pageNumber);

  const observer = useRef<HTMLDivElement>(null);

  const lastProductRef = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer?.current) (observer?.current as any).disconnect();
      // disable-next-next-line
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) (observer?.current as any).observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      <ProductsListWrapper>
        {productList.map((product, index) => {
          if (index + 1 === productList.length)
            return <Product ref={lastProductRef} key={index} {...product} />;
          return <Product {...product} key={index} />;
        })}
      </ProductsListWrapper>
      {loading && (
        <LoaderWrapper
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={1000} //3 secs
        />
      )}
    </>
  );
}
