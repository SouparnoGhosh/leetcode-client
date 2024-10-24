import { useAtom } from "jotai";
import { useLocation, useNavigate } from "react-router-dom";
import { genderAtom } from "@/utils/atoms";

const useHandleChangeGender = () => {
  const [, setGender] = useAtom(genderAtom);
  const location = useLocation();
  const navigate = useNavigate();

  const handleChangeGender = (newGender: "women" | "men") => {
    setGender(newGender);

    localStorage.setItem("lastViewedGender", newGender);

    const currentPath = location.pathname;
    const isWomenswear = currentPath.includes("womenswear");
    const isMenswear = currentPath.includes("menswear");

    if (
      (newGender === "men" && isWomenswear) ||
      (newGender === "women" && isMenswear)
    ) {
      navigate("/");
    }
  };

  return handleChangeGender;
};

export default useHandleChangeGender;
