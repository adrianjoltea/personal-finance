import { NavLink } from "react-router-dom";
import { FaCompass } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

interface AsideProps {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Aside({ navOpen, setNavOpen }: AsideProps) {
  function handleClick() {
    setNavOpen(nav => !nav);
  }

  return (
    <aside className={`sidebar ${navOpen ? "" : "collapsed"}`}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="sidebar__link">
              <FaCompass /> {navOpen && <span>Overview</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/card" className="sidebar__link">
              <FaIdCard /> {navOpen && <span>Card</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/Account" className="sidebar__link">
              <IoMdPerson /> {navOpen && <span>Account</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="sidebar__link">
              <IoMdPerson /> {navOpen && <span>login</span>}
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
