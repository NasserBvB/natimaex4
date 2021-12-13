import styled from "styled-components";

export const LayoutWrapper = styled.div``;

export const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin: auto 2rem;
  min-height: 90vh;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  padding: 1rem;
`;

export const TitleWrapper = styled.a`
  text-decoration: wavy;
  text-decoration-color: #eaeaea;
  text-decoration-style: double;
  text-decoration-thickness: 1px;
  color: #eaeaea;
  font-size: xx-large;
  cursor: pointer;
`;

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e6e6e6;
  padding: 1rem;
`;
