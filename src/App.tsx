import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Overview from "./pages/Overview";
import Card from "./pages/Card";
import Account from "./pages/Account";
import PageNotFound from "./pages/PageNotFound";
import { useSelector } from "react-redux";
import { getDark } from "./context/darkModeSlice";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import Settings from "./pages/Settings";
import AppOffline from "./AppOffline";

export default function App() {
  const dark = useSelector(getDark);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  useEffect(
    function () {
      if (dark) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.remove("dark-mode");
        document.documentElement.classList.add("light-mode");
      }
    },
    [dark]
  );
  return (
    <>
      {isOnline ? (
        <>
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="/" element={<Overview />} />
                <Route path="card" element={<Card />} />
                <Route path="account" element={<Account />} />
                <Route path="settings" element={<Settings />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "var(--color-grey-50)",
                color: "var(--color-grey-800)",
              },
            }}
          />
        </>
      ) : (
        <AppOffline />
      )}
    </>
  );
}
