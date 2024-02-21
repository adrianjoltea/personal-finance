import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/AppLayout/Header";
import Aside from "../components/AppLayout/Aside";

import { updateUser } from "../context/userSlice";
import { updateBank } from "../context/bankSlice";
import { useDispatch } from "react-redux";

import { setCurrentCards } from "../context/userCardsSlice";
import getBanks from "../components/Bank/getBanks";
import getCardsUser from "../components/Bank/getCardsUser";
import getCurrentUser from "../components/User/getCurrentUser";
import getTransactions from "../components/Transactions/getTransactions";

export default function AppLayout() {
  const [navOpen, setNavOpen] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, isAuthenticated } = await getCurrentUser();
        const dataBank = await getBanks();
        const dataCards = await getCardsUser(data.id);
        const dataTransactions = await getTransactions();
        console.log(dataTransactions);
        // Ensure the user is authenticated before dispatching the update
        if (isAuthenticated) {
          dispatch(updateUser(data));
          dispatch(updateBank(dataBank));
          dispatch(setCurrentCards(dataCards));
        } else {
          console.log("User not authenticated");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className={`app-layout ${navOpen ? "" : "collapsed"}`}>
      <Header />
      <Aside navOpen={navOpen} setNavOpen={setNavOpen} />

      <Outlet />
    </div>
  );
}
