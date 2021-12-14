import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { productListState } from "../store/atoms/productListState";
import { IProduct } from "../types";

const useProducts = (pageNumber: number) => {
  const setProductList = useSetRecoilState(productListState);
  const productList = useRecoilValue(productListState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentProduct, setCurrentProduct] = useState<IProduct>();
  const [relatedProducts, setRelatedProducts] = useState<IProduct[]>([]);
  const fetchProducts = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setProductList((prev) => [...prev, ...data]);
      setHasMore(productList.length < 30);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchCurrentProduct = async (id: string | string[] | undefined) => {
    if (!id) return;
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data: IProduct = await response.json();

      const relatedProductsResponse = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const relatedProductsData: IProduct[] =
        await relatedProductsResponse.json();

      setRelatedProducts(relatedProductsData);
      setCurrentProduct(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [pageNumber]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    productList,
    loading,
    error,
    hasMore,
    fetchCurrentProduct,
    currentProduct,
    relatedProducts
  };
};

export default useProducts;
