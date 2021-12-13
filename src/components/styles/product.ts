import styled from "styled-components";
import { colors } from "./colors";
interface Props {
  hoverable?: boolean;
}
export const ProductWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;

  padding: 1rem;

  ${(props) =>
    !!props.hoverable &&
    `
    &:hover {
      transform: scale(1.2);
    }
    `}
`;

export const ProductImage = styled.img`
  display: block;
  max-width: 400px;
  max-height: 400px;
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

export const MoreDetails = styled.button`
  outline: none;
  border: none;
  background: ${colors.primaryBackground};
  color: ${colors.primary};
  min-width: 10rem;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 4px;
`;
