import { menswearItems, womenswearItems } from "@/lib/constants";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import DropdownMenuComponent from "@/components/header/DropdownMenuComponent";

const HeaderDropdownMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Menswear
          </NavigationMenuTrigger>
          <DropdownMenuComponent
            title="Menswear"
            collectionLink="/menswear"
            collectionTitle="Menswear Collection"
            collectionDescription="Discover our latest styles for men"
            items={menswearItems}
          />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Womenswear
          </NavigationMenuTrigger>
          <DropdownMenuComponent
            title="Womenswear"
            collectionLink="/womenswear"
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