import styled from "@emotion/styled";
import { colors } from "./colors";
export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  padding: 1rem;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ProductImage = styled.img`
  display: block;
  max-width: 50rem;
  transition: transform 0.5s ease;
`;

export const ProductTitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  color: ${colors.primary};
`;

export const ProductPrice = styled.p`
  text-align: center;
  color: black;

  margin-bottom: 1rem;
  text-decoration: wavy;
  font-size: 1.5rem;
  font-weight: bolder;
`;

export const ProductFooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const MoreDetails = styled.button`
  outline: none;
  border: none;
  background: ${colors.primaryBackground};
  color: ${colors.primary};
  min-width: 10rem;
  padding: 0.5rem;
  cursor: pointer;
`;
