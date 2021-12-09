import { ThemeProvider as TProvider } from "@emotion/react";
import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { themeState } from "../store/atoms/themeState";
import dark from "./darkTheme";
interface IProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: IProps) => {
  const theme = useRecoilValue(themeState);
  const setTheme = useSetRecoilState(themeState);
  
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme && storedTheme === "dark") {
      setTheme(dark);
    }
  }, []);

  return <TProvider theme={theme}>{children}</TProvider>;
};
