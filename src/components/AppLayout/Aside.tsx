import { NavLink } from "react-router-dom";
import { FaCompass } from "react-icons/fa";
import { FaGear, FaIdCard } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { getNav, toggleNav } from "../../context/darkModeSlice";
import { IoMdPerson } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";
import { useTranslation } from "react-i18next";

interface AsideProps {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Sidebar {
  overview: string;
  transactions: string;
  myCards: string;
  invest: string;
  settings: string;
}

export default function Aside({ navOpen, setNavOpen }: AsideProps) {
  const navigationMobile = useSelector(getNav);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const sidebar: Sidebar = t("sidebar") as unknown as Sidebar;

  const { overview, transactions, myCards, invest, settings } = sidebar;

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
              <FaCompass /> {navOpen && <span>{overview}</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/transactions" className="sidebar__link">
              <GrTransaction /> {navOpen && <span>{transactions}</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-cards" className="sidebar__link">
              <FaIdCard /> {navOpen && <span>{myCards}</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/invest" className="sidebar__link">
              <IoMdPerson /> {navOpen && <span>{invest}</span>}
            </NavLink>
          </li>

          <li>
            <NavLink to="/settings" className="sidebar__link">
              <FaGear /> {navOpen && <span>{settings}</span>}
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
