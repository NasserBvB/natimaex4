import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { FaCartPlus } from "react-icons/fa";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "../theme";
import {
  FooterWrapper,
  HeaderWrapper,
  MainWrapper,
  TitleWrapper
} from "./styles/layout";

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <Header />
        <MainWrapper>{children}</MainWrapper>
        <FooterWrapper>Natimaex {new Date().getFullYear()}</FooterWrapper>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link href="/">
        <TitleWrapper>Natimaex</TitleWrapper>
      </Link>
      <FaCartPlus size={40} color="blue" />
    </HeaderWrapper>
  );
};
