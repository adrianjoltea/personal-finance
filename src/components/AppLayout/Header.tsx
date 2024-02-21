import Darkmode from "../header/Darkmode";
import SignOut from "../Login/SignOut";

export default function Header() {
  return (
    <header className="header-app">
      <Darkmode />
      <SignOut />
    </header>
  );
}
