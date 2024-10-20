import {
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import ListItem from "./ListItem";

type DropdownMenuComponentProps = {
  title: string;
  gender: "women" | "men";
  handleChangeGender: (newGender: "men" | "women") => void;
  collectionTitle: string;
  collectionDescription: string;
  items: { title: string; href: string; description: string }[];
};

const DropdownMenuComponent = ({
  title,
  gender,
  handleChangeGender,
  collectionTitle,
  collectionDescription,
  items,
}: DropdownMenuComponentProps) => {
  return (
    <NavigationMenuContent id={title}>
      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
        <li className="row-span-3">
          <NavigationMenuLink asChild>
            <button
              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
              // to={collectionLink}
              onClick={() => handleChangeGender(gender)}
            >
              <div className="mb-2 mt-4 text-lg font-medium">
                {collectionTitle}
              </div>
              <p className="text-sm leading-tight text-muted-foreground">
                {collectionDescription}
              </p>
            </button>
          </NavigationMenuLink>
        </li>
        {items.map((item) => (
          <ListItem key={item.title} title={item.title} to={item.href}>
            {item.description}
          </ListItem>
        ))}
      </ul>
    </NavigationMenuContent>
  );
};

export default DropdownMenuComponent;
