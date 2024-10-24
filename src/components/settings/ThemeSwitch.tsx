import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { themeAtom } from "../../utils/atoms";
import { useAtom } from "jotai";

export default function ThemeSwitch() {
  const [theme, setTheme] = useAtom(themeAtom);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Display</h2>
      <div className="flex items-center justify-between space-x-2">
        <Label
          className="text-muted-foreground font-medium"
          htmlFor="theme-switch"
        >
          Change to {theme === "light" ? "dark" : "light"} theme.
        </Label>
        <Switch
          id="theme-switch"
          checked={theme === "dark"}
          onCheckedChange={toggleTheme}
        />
      </div>
    </div>
  );
}
