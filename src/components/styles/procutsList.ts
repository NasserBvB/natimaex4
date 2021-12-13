import Loader from "react-loader-spinner";
import styled from "styled-components";

export const ProductsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-auto-flow: dense;
  gap: 2rem;
  margin: 2rem;
  align-items: flex-end;
`;

export const LoaderWrapper = styled(Loader)`
  grid-column: 1 / -1;
  justify-self: center;
  align-self: center;
`