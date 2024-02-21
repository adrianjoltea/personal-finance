import React, { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Spinner from "./Spinner";
import getCurrentUser from "./User/getCurrentUser";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("accessToken");

  console.log(isAuthenticated);

  const [ifLoading, setIfLoading] = useState(true);
  // setIfLoading(loading);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { loading } = await getCurrentUser();
        setIfLoading(loading);
      } catch (err) {
        console.error(err);
        setIfLoading(true);
      }
    };

    fetchData();
    if (!isAuthenticated) navigate("/login");
  }, [isAuthenticated, navigate]);

  if (ifLoading) return <Spinner />;
  if (isAuthenticated) return <>{children}</>;
}
