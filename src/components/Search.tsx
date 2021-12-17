import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { DropDown } from "./shared/dropdown";
import {
    Search as SearchInput,
    SearchResultItem,
    SearchResultItemImage,
    SearchResultItemName,
    SearchResultItemPrice,
    SearchResultItemText
} from "./styles/search";
export default function Search() {
  const { setFilter, filter, filterProducts, filteredProducts } =
    useProducts(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    filterProducts(e.target.value);
  };

  return (
    <DropDown
      icon={<IoIosSearch size={22} />}
      maxHeight="500px"
      trigger={
        <SearchInput
          value={filter}
          placeholder="recherche ..."
          onChange={handleChange}
        />
      }
    >
      {filteredProducts.map((product, idx) => (
        <Link to={`/products/${product.id}`} key={idx}>
          <SearchResultItem>
            <SearchResultItemImage src={product.image} />
            <SearchResultItemText>
              <SearchResultItemName>{product.title}</SearchResultItemName>
              <SearchResultItemPrice>{product.price} MAD</SearchResultItemPrice>
            </SearchResultItemText>
          </SearchResultItem>
        </Link>
      ))}
    </DropDown>
  );
}
