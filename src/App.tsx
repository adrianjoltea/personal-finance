import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import { useSelector } from "react-redux";
import { getDark } from "./context/darkModeSlice";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import AppOffline from "./AppOffline";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LazyLoader from "./components/Ui/LazyLoader";
import LandingPage from "./pages/LandingPage";

const Transactions = lazy(() => import("./pages/Transactions"));
const Overview = lazy(() => import("./pages/Overview"));
const Invest = lazy(() => import("./pages/Invest"));
const Settings = lazy(() => import("./pages/Settings"));
const MyCards = lazy(() => import("./pages/MyCards"));
const Admin = lazy(() => import("./pages/Admin"));
const CreateCardPage = lazy(() => import("./pages/CreateCardPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

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
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />

            <BrowserRouter>
              <Suspense fallback={<LazyLoader show={true} delay={0} />}>
                <Routes>
                  <Route
                    element={
                      <ProtectedRoute>
                        <AppLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route path="/" element={<Overview />} />
                    <Route path="transactions" element={<Transactions />} />
                    <Route path="my-cards" element={<MyCards />} />
                    <Route path="create-card" element={<CreateCardPage />} />
                    <Route path="invest" element={<Invest />} />
                    <Route path="admin" element={<Admin />} />
                    <Route path="settings" element={<Settings />} />
                  </Route>
                  <Route path="*" element={<PageNotFound />} />
                  <Route path="/landing-page" element={<LandingPage />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
            <Toaster
              position="top-center"
              toastOptions={{
                style: {
                  background: "var(--color-grey-50)",
                  color: "var(--color-grey-800)",
                  textAlign: "center",
                },
              }}
            />
          </QueryClientProvider>
        </>
      ) : (
        <AppOffline />
      )}
    </>
  );
}
