import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useProducts from "../hooks/useProducts";
import { ProductCard } from "./ProductCard";
import Rating from "./Rating";
import { Tab, TabList, TabPanel } from "./shared/tabs";
import { LoaderWrapper } from "./styles/procutsList";
import {
  ProductDetailsDescription,
  ProductDetailsHeader,
  ProductDetailsImage,
  ProductDetailsInfo,
  ProductDetailsPrice,
  ProductDetailsTitle,
  ProductDetailsWrapper,
  Property,
  PropertyName,
  PropertyValue,
  PropertyValueItem,
  RelatedProducts,
} from "./styles/productDetails";

export default function ProductDetails() {
  const params = useParams();
  const productId = params.productId;
  const [tabIndex, setTabIndex] = useState(0);
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
      <Tabs tabIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Spécification</Tab>
          <Tab>Commentaires</Tab>
        </TabList>

        <TabPanel>
          {currentProduct.properties.map((property) => (
            <Property>
              <PropertyName>{property.label} : </PropertyName>
              <PropertyValue>{property.content.map(item => (
                <PropertyValueItem>{item}</PropertyValueItem>
              ))}</PropertyValue>
            </Property>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>To be implemented</h2>
        </TabPanel>
      </Tabs>
      <ProductDetailsTitle>Produits similaires: </ProductDetailsTitle>
      <RelatedProducts>
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
        <Link to="#">Voir Plus...</Link>
      </RelatedProducts>
    </ProductDetailsWrapper>
  );
}
