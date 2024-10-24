import { useEffect } from "react";
import { useAtom } from "jotai";
import { themeAtom } from "@/components/utils/atoms";

export const useTheme = () => {
  const [theme] = useAtom(themeAtom);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme)
  }, [theme]);
};
