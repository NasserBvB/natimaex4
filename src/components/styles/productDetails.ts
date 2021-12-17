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
  font-size: 1.5rem;
  max-width: 50ch;
  border-bottom: 1px solid #666;
  align-self: flex-start;
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
  & > a {
    align-self: center;
  }
`;

export const Property = styled.div`
  border-bottom: 1px solid #666;
  display: flex;
  gap: 2rem; 
`

export const PropertyName = styled.h3`
  font-weight: 900;
`

export const PropertyValue = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 400;
`

export const PropertyValueItem = styled.p`
  &:before {
    content: "-";
  }

`