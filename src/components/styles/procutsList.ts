import styled from "@emotion/styled";
import Loader from "react-loader-spinner";

export const ProductsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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