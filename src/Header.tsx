import { Link } from "react-router-dom";
import { ShoppingBag, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import HeaderDropdownMenu from "@/components/header/HeaderDropdownMenu";
import SearchIcon from "@/components/header/SearchIcon";
import ProfileIconWithAuthModal from "./components/common/ProfileIconWithAuthModal";

export default function Header() {
  return (
    <header
      id="header"
      className="sticky top-0 z-50 px-2 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/80"
    >
      <div
        id="holder"
        className="relative flex h-14 items-center justify-between"
      >
        <div className="flex items-center">
          <HeaderDropdownMenu />
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link
            id="title-banner"
            to="/"
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-extrabold">Stitched</span>
          </Link>
        </div>
        <div id="header-buttons-holder" className="flex items-center">
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" asChild>
              <SearchIcon />
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/wishlist">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              {/* <Link to="/profile">
                <User className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Link> */}
              <ProfileIconWithAuthModal />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
