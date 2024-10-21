import { menswear, womenswear } from "@/lib/constants";


import { useAtom } from "jotai";
import { genderAtom } from "@/components/utils/atoms";
import NewDropdownMenuComponent from "./NewDropdownMenuComponent";

const HeaderDropdownMenu = () => {
  const [gender, setGender] = useAtom(genderAtom);

  const handleChangeGender = (newGender: "women" | "men") => {
    console.log(`Changing gender from ${gender} to ${newGender}`);
    setGender(newGender);
    localStorage.setItem("lastViewedGender", newGender);
  };

  return (
    <>

      <NewDropdownMenuComponent wear={womenswear} gender="women" handleChangeGender={handleChangeGender} />
      <NewDropdownMenuComponent wear={menswear} gender="men" handleChangeGender={handleChangeGender} />
    </>
  );
};

export default HeaderDropdownMenu;
