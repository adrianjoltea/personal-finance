import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/AppLayout/Header";
import Aside from "../components/AppLayout/Aside";
import { updateUser } from "../context/userSlice";
import { useDispatch } from "react-redux";
import { setCurrentCards } from "../context/userCardsSlice";
import { useCardsUsers } from "../components/Card/hooks/useCardsUser";
import { useUser } from "../components/User/useUser";

export default function AppLayout() {
  const [navOpen, setNavOpen] = useState(true);
  const { user, isAuthenticated } = useUser();

  const dispatch = useDispatch();
  const { cards } = useCardsUsers();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isAuthenticated) {
          dispatch(updateUser(user));
          dispatch(setCurrentCards(cards));
        } else {
          console.log("User not authenticated");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [isAuthenticated, user, cards, dispatch]);

  return (
    <div className={`app-layout ${navOpen ? "" : "collapsed"}`}>
      <h1></h1>
      <Header />
      <Aside navOpen={navOpen} setNavOpen={setNavOpen} />

      <Outlet />
    </div>
  );
}
