import styled from "styled-components";

export const Search = styled.input`
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 0.5rem;
  margin-right: 1rem;
`;

export const SearchResultWrapper = styled.div`
    background-color: transparent;
  color: ${(props) => props.color};
`;

export const SearchResultItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #e6e6e6;
  cursor: pointer;
  gap: 0.5rem;
  min-width: 200px;
`;

export const SearchResultItemImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

export const SearchResultItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SearchResultItemName = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;

export const SearchResultItemPrice = styled.div`
  font-size: 1rem;
  color: #999;
`;
