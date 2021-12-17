import React, { useCallback, useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import { images } from "../data/products";
import useProducts from "../hooks/useProducts";
import { ProductCard } from "./ProductCard";
import { LoaderWrapper, ProductsListWrapper } from "./styles/procutsList";

export default function ProductList() {
  const [pageNumber, setPageNumber] = useState(1);
  const { productList, loading, hasMore } = useProducts(pageNumber);
  const observer = useRef<HTMLDivElement | null>(null);

  const lastProductRef = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer?.current) (observer?.current as any).disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      }) as any;
      if (node) (observer?.current as any).observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      <ImageGallery
        autoPlay
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
        showBullets
        showNav={false}
        items={images}
        slideInterval={5000}
        additionalClass="image-gallery-image-custom"
      />
      <ProductsListWrapper>
        {productList.map((product, index) => {
          if (index + 1 === productList.length)
            return (
              <ProductCard
                hoverable
                ref={lastProductRef}
                key={index}
                {...product}
              />
            );
          return <ProductCard hoverable {...product} key={index} />;
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
