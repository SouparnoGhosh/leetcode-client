import { atom } from "jotai";

// Gender Atom
const initialGender =
  (localStorage.getItem("lastViewedGender") as "women" | "men") || "women";

export const genderAtom = atom<"women" | "men">(initialGender);

// Theme Atom
const localStorageTheme = localStorage.getItem("theme") as
  | "light"
  | "dark"
  | null;
const systemPrefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme =
  localStorageTheme || (systemPrefersDark ? "dark" : "light");

export const themeAtom = atom<"light" | "dark">(initialTheme);

// Logged In Atom
export const loggedInAtom = atom<boolean>(true);
