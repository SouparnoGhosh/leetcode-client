import { menswearItems, womenswearItems } from "@/lib/constants";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import DropdownMenuComponent from "@/components/header/DropdownMenuComponent";
import { useAtom } from "jotai";
import { genderAtom } from "@/atoms";

const HeaderDropdownMenu = () => {
  const [gender, setGender] = useAtom(genderAtom);

  const handleChangeGender = (newGender: "women" | "men") => {
    console.log(`Changing gender from ${gender} to ${newGender}`);
    setGender(newGender);
    localStorage.setItem("lastViewedGender", newGender);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem id="menswear">
          <NavigationMenuTrigger className="bg-transparent">
            Menswear
          </NavigationMenuTrigger>
          <DropdownMenuComponent
            title="Menswear"
            gender="men"
            handleChangeGender={handleChangeGender}
            collectionTitle="Menswear Collection"
            collectionDescription="Discover our latest styles for men"
            items={menswearItems}
          />
        </NavigationMenuItem>
        <NavigationMenuItem id="womenswear">
          <NavigationMenuTrigger className="bg-transparent">
            Womenswear
          </NavigationMenuTrigger>
          <DropdownMenuComponent
            title="Womenswear"
            gender="women"
            handleChangeGender={handleChangeGender}
            collectionTitle="Womenswear Collection"
            collectionDescription="Explore our latest styles for women"
            items={womenswearItems}
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderDropdownMenu;
