import Darkmode from "../header/Darkmode";
import MobileView from "../header/MobileView";
import Profile from "../header/Profile";
import SignOut from "../Login/SignOut";

export default function Header() {
  return (
    <header className="header-app">
      <Profile />
      <Darkmode />
      <SignOut />
      <MobileView />
    </header>
  );
}
