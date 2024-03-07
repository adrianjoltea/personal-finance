import { useSelector } from "react-redux";
import { getDark } from "../context/darkModeSlice";
import AccountDetails from "../components/Account/AccountDetails";

export default function Account() {
  const dark = useSelector(getDark);

  return (
    <div className={`main-page ${dark ? "dark" : ""}`}>
      <AccountDetails />
    </div>
  );
}
