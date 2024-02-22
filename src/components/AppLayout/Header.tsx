import Darkmode from "../header/Darkmode";
import MobileView from "../header/MobileView";
import SignOut from "../Login/SignOut";

export default function Header() {
  return (
    <header className="header-app">
      <Darkmode />
      <SignOut />
      <MobileView />
    </header>
  );
}
