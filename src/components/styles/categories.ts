import styled from "styled-components";
import { colors } from "./colors";

export const GeneralWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
`;

export const CategoryWrapper = styled.div`
  min-width: 10rem;

  display: flex;
  flex-direction: column;
  gap: 24px;

  border: ${colors.border};
  border-radius: 10px;
  padding: 8px;

  text-decoration: none;

  color: ${colors.primary};
  background-color: ${colors.primaryBackground};
`;

export const CategoryInfo = styled.p``;
