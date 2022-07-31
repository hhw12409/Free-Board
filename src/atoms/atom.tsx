import { atom } from "recoil";
import post from "../data/post";

export const postAtom = atom({
  key: "posts",
  default: post,
});
