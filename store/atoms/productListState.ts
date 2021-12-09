import { atom } from "recoil";
import { IProduct } from "../../types";

export const productListState = atom<IProduct[]>({
  key: "productListState",
  default: [],
});
