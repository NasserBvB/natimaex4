import styled from "styled-components";

export const ProductDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
`;

export const ProductDetailsHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 8px;
`;

export const ProductDetailsImage = styled.img`
  max-width: 400px;
`;

export const ProductDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
`;

export const ProductDetailsTitle = styled.h1`
  max-width: 50ch;
`;
export const ProductDetailsPrice = styled.h2``;
export const ProductDetailsDescription = styled.p`
  max-width: 50ch;
`;


export const RelatedProducts = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  z-index: 10;
  align-items: flex-end;
  &>a{
    align-self: center;
  }
`