import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import productsData from "../data/products";
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

  const [filter, setFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    setLoading(true);
    setError(false);
    try {
      setProductList((prev) => [...prev, ...productsData]);
      setHasMore(productList.length < 50);
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
      const response =
        productsData.find((product) => product.id + "" === id) ||
        productList[0];

      const productCategories =
        response.properties.find((item) => item.label === "Categories")
          ?.content || [];

      const relatedProductsData = productsData.filter((item) => {
        const itemCategories =
          item.properties.find((item) => item.label === "Categories")
            ?.content || [];
        return itemCategories.some((category) =>
          productCategories.includes(category)
        );
      });

      setRelatedProducts(relatedProductsData);
      setCurrentProduct(response);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = (filter: string) => {
    setLoading(true);
    setError(false);
    try {
      const parseFilter = filter.toLowerCase().trim();

      const filteredProductsData = productsData.filter((product) => {
        // match product title
        const matchTitle = product.title.toLowerCase().includes(parseFilter);

        // Match category
        const productCategories =
          product.properties.find((item) => item.label === "Categories")
            ?.content || [];

        const matchCategory = productCategories.some((category) =>
          category.toLowerCase().includes(parseFilter)
        );

        return matchCategory || matchTitle;
      });
      setFilteredProducts(filteredProductsData);
      // setHasMore(filteredProducts.length < 50);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [pageNumber]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (filter.length > 0) {
      filterProducts(filter);
    } else {
      setFilteredProducts([]);
    }
  }, [filter]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    productList,
    loading,
    error,
    hasMore,
    fetchCurrentProduct,
    currentProduct,
    relatedProducts,
    filterProducts,
    filter,
    setFilter,
    filteredProducts,
  };
};

export default useProducts;
