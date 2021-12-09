import '@emotion/react';
import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";

export type ITheme = typeof darkTheme & typeof lightTheme;

declare module '@emotion/react' {
    export interface Theme extends ITheme { }
}
