import { useDispatch, useSelector } from "react-redux";
import { getDark, toggleDarkMode } from "../../context/darkModeSlice";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
export default function Darkmode() {
  const dispatch = useDispatch();
  const dark = useSelector(getDark);
  console.log(dark);
  return (
    <div className="dark-mode">
      <button
        onClick={() => dispatch(toggleDarkMode())}
        className="dark-mode-btn"
      >
        {dark ? <FiSun /> : <FaMoon />}
      </button>
    </div>
  );
}
