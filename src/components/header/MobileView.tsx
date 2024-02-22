import { GiCrossedBones, GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { getNav, toggleNav } from "../../context/darkModeSlice";

export default function MobileView() {
  const navigation = useSelector(getNav);
  const dispatch = useDispatch();

  return (
    <div>
      <button className="toggle-mobile" onClick={() => dispatch(toggleNav())}>
        {navigation ? <GiCrossedBones /> : <GiHamburgerMenu />}
      </button>
    </div>
  );
}
