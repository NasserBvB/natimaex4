import styled from "styled-components";
import { colors } from "./colors";

/**
 * General layout styles
 */
export const LayoutWrapper = styled.div`
  position: relative;
`;

/**
 * Content wrapper styles
 */
export const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin: 5rem 2rem;
  min-height: 90vh;
`;

/**
 * Header styles
 */
export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  background-color: ${colors.primary};
  width: 98%;

  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  padding: 1rem;
  & > a {
    color: white;
  }
  z-index: 10;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  & > a {
    color: white;
  }
`;

export const Search = styled.input`
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 0.5rem;
  margin-right: 1rem;
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

/**
 * Footer styles
 */
export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #e6e6e6;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1rem;
`;

export const FooterLinks = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
  flex: 1;
  & > a {
    color: ${colors.primary};
  }
  & > h3 {
    grid-column: 1 / -1;
  }
`;

export const FooterContactForm = styled.form`
  display: flex;
  gap: 12px;
  flex-direction: column;
  flex: 1.5;
  & > input[type="submit"] {
    border: none;
    outline: none;
    cursor: pointer;
    background-color: ${colors.primaryBackground};
    color: ${colors.primary};
    width: 10rem;
    align-self: flex-end;
  }
`;

export const FooterContactFormTextArea = styled.textarea`
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 0.5rem;

  border: 1px solid #eaeaea;
`;

export const FooterContactFormInput = styled.input`
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 0.5rem;
  border: 1px solid #eaeaea;
`;

export const FooterSocialMedia = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  flex: 1;
  & > a {
    color: white;
  }
`;

export const SocialMediaBox = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.color};
  color: white;

  padding: 24px;
  min-width: 10rem;
  cursor: pointer;
`;
