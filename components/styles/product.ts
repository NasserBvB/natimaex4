import styled from "@emotion/styled";
import Image from "next/image";
export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  padding: 1rem;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ProductImage = styled(Image)`
  display: block;
  max-width: 50rem;
  transition: transform 0.5s ease;
`;

export const ProductTitle = styled.h2`
  text-align: start;
`;

export const ProductPrice = styled.p`
  text-align: start;

  margin-top: -1rem;
  text-decoration: wavy;
  font-style: italic;
`;

export const ProductDescription = styled.p`
  max-width: 40ch;
  margin-left: 1rem;
`;

export const MoreDetails = styled.button`
  outline: none;
  border: none;
`;
