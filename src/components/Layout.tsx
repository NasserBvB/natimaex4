import React, { PropsWithChildren } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Categories } from "./Categories";
import {
  FooterWrapper,
  HeaderWrapper,
  ContentWrapper,
  TitleWrapper,
  LayoutWrapper
} from "./styles/layout";

export default function Layout({ children }: PropsWithChildren<any>) {
  const isExtraSmall = useMediaQuery({
    minWidth: "0px",
    maxWidth: "599px",
  });
  const isSmall = useMediaQuery({ minWidth: "600px", maxWidth: "1279px" });
  const isMedium = useMediaQuery({ minWidth: "1280px", maxWidth: "1919px" });
  const isLarge = useMediaQuery({ minWidth: "1920px", maxWidth: "2559px" });
  const isExtraLarge = useMediaQuery({ minWidth: "2560px" });

  console.log("============ new render =================");

  console.log("isExtraSmall =", isExtraSmall);
  console.log("isSmall =", isSmall);
  console.log("isMedium =", isMedium);
  console.log("isLarge =", isLarge);
  console.log("isExtraLarge =", isExtraLarge);

  return (
    <LayoutWrapper>
      <Header />
      <Categories/>
      <ContentWrapper>{children}</ContentWrapper>
      <FooterWrapper>Natimaex {new Date().getFullYear()}</FooterWrapper>
    </LayoutWrapper>
  );
}

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/" >
        <TitleWrapper>Natimaex</TitleWrapper>
      </Link>
      {/* <FaCartPlus size={40} color="blue" /> */}
    </HeaderWrapper>
  );
};
