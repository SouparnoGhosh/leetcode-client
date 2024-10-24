import { menswear, womenswear } from "@/utils/constants";

import DropdownMenuComponent from "@/components/header/DropdownMenuComponent";
import useHandleChangeGender from "@/hooks/useHandleChangeGender";

const HeaderDropdownMenu = () => {
  const handleChangeGender = useHandleChangeGender();

  return (
    <>
      <DropdownMenuComponent
        wear={womenswear}
        gender="women"
        handleChangeGender={handleChangeGender}
      />
      <DropdownMenuComponent
        wear={menswear}
        gender="men"
        handleChangeGender={handleChangeGender}
      />
    </>
  );
};

export default HeaderDropdownMenu;
