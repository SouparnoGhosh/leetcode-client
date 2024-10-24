import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

import { Category, Wear } from "@/utils/types";
import { Link } from "react-router-dom";

type NewDropdownMenuComponentProps = {
  wear: Wear;
  gender: "women" | "men";
  handleChangeGender: (newGender: "women" | "men") => void;
};

const WelcomeScreen = ({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) => {
  return (
    <Link to={url}>
      <button className="flex h-full w-full select-none flex-col justify-start items-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
        <div className="mb-2 mt-4 text-lg font-medium text-center">{title}</div>
        <p className="text-sm leading-tight text-muted-foreground text-center">
          {description}
        </p>
      </button>
    </Link>
  );
};

const NewDropdownMenuComponent: React.FC<NewDropdownMenuComponentProps> = ({
  wear,
  gender,
  handleChangeGender,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] =
    React.useState<Category | null>(null);
  const [welcomeScreen, setWelcomeScreen] = React.useState(true);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setTimeout(() => {
        setWelcomeScreen(true);
      }, 400);
    }
  };

  return (
    <div className="flex">
      <Button
        onClick={() => handleChangeGender(gender)}
        variant="ghost"
        className="py-2 !pr-1 text-sm font-medium text-gray-700 bg-transparent rounded-l-md hover:text-gray-900 hover:bg-transparent rounded-r-none capitalize "
      >
        {gender}swear
      </Button>
      <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="w-1 rounded-none py-2 !pl-2 text-sm font-medium text-gray-700 bg-transparent hover:text-gray-900 hover:bg-transparent! rounded-r-md "
          >
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[300px] p-0">
          <div className="flex">
            <div className="w-2/5 border-r">
              {wear.categories.map((category) => (
                <Link to={category.url}>
                  <Button
                    key={category.name}
                    variant="ghost"
                    className={`w-full justify-start rounded-none ${
                      selectedCategory?.name === category.name
                        ? "bg-accent"
                        : ""
                    }`}
                    onMouseEnter={() => {
                      setSelectedCategory(category);
                      setWelcomeScreen(false);
                    }}
                  >
                    {category.name}
                  </Button>
                </Link>
              ))}
            </div>
            <div className="w-3/5">
              {welcomeScreen ? (
                <WelcomeScreen
                  title={wear.title}
                  description={wear.description}
                  url={wear.url}
                />
              ) : (
                <div>
                  {selectedCategory?.subcategories.map((subcategory) => (
                    <Link to={subcategory.url}>
                      <Button
                        key={subcategory.name}
                        variant="ghost"
                        className="w-full justify-start rounded-none"
                        onClick={() => {
                          setIsOpen(false);
                          setWelcomeScreen(true);
                          setSelectedCategory(null);
                        }}
                      >
                        {subcategory.name}
                      </Button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NewDropdownMenuComponent;
