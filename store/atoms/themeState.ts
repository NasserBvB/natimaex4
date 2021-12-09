import { atom } from "recoil";
import light from "../../theme/lightTheme";


export const themeState = atom({
  key: "themeState",
  default: light
});
