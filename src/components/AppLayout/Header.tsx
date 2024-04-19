import Darkmode from "../Header/Darkmode";
import LanguageSelector from "../Header/LanguageSelector";
import MobileView from "../Header/MobileView";
import Profile from "../Header/Profile";
import SignOut from "../Login/SignOut";

export default function Header() {
  return (
    <header className="header-app">
      <LanguageSelector />
      <Profile />
      <Darkmode />
      <SignOut />
      <MobileView />
    </header>
  );
}
