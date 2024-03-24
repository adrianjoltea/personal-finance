import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/AppLayout/Header";
import Aside from "../components/AppLayout/Aside";
import { updateUser } from "../context/userSlice";
import { useDispatch } from "react-redux";
import { setCurrentCards } from "../context/userCardsSlice";
import getCurrentUser from "../components/User/getCurrentUser";
import { useCardsUsers } from "../components/Bank/getCardsUser";

export default function AppLayout() {
  const [navOpen, setNavOpen] = useState(true);
  const dispatch = useDispatch();
  const { cards } = useCardsUsers();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, isAuthenticated } = await getCurrentUser();

        // Ensure the user is authenticated before dispatching the update
        if (isAuthenticated) {
          dispatch(updateUser(data));
          dispatch(setCurrentCards(cards));
          // setDataCards(cards);
        } else {
          console.log("User not authenticated");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [dispatch, cards]);

  return (
    <div className={`app-layout ${navOpen ? "" : "collapsed"}`}>
      <Header />
      <Aside navOpen={navOpen} setNavOpen={setNavOpen} />

      <Outlet />
    </div>
  );
}
