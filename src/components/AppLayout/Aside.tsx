import { NavLink } from "react-router-dom";
import { FaCompass } from "react-icons/fa";
import { FaGear, FaIdCard } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { getNav, toggleNav } from "../../context/darkModeSlice";
import { IoMdPerson } from "react-icons/io";

interface AsideProps {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Aside({ navOpen, setNavOpen }: AsideProps) {
  const navigationMobile = useSelector(getNav);
  const dispatch = useDispatch();
  function handleClick() {
    setNavOpen(nav => !nav);
  }

  return (
    <aside
      className={`sidebar ${navOpen ? "" : "collapsed"}${
        navigationMobile ? "active__nav" : ""
      }`}
    >
      <nav>
        <ul onClick={() => dispatch(toggleNav(false))}>
          <li>
            <NavLink to="/" className="sidebar__link">
              <FaCompass /> {navOpen && <span>Overview</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/card" className="sidebar__link">
              <FaIdCard /> {navOpen && <span>Cards</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/invest" className="sidebar__link">
              <IoMdPerson /> {navOpen && <span>Invest</span>}
            </NavLink>
          </li>

          <li>
            <NavLink to="/settings" className="sidebar__link">
              <FaGear /> {navOpen && <span>settings</span>}
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar-collapse">
        {navOpen ? (
          <FaArrowLeft className="sidebar-collapse-btn" onClick={handleClick} />
        ) : (
          <FaArrowRight
            className="sidebar-collapse-btn"
            onClick={handleClick}
          />
        )}
      </div>
    </aside>
  );
}
