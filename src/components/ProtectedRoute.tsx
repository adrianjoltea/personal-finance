import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Ui/Spinner";
import { useUser } from "./User/useUser";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const { isPending, isAuthenticated } = useUser();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    } else if (!isAuthenticated && !isPending) {
      navigate("/login");
    }
  }, [accessToken, isAuthenticated, isPending, navigate]);

  if (isPending) return <Spinner />;
  if (isAuthenticated) return <>{children}</>;

  return null;
}
