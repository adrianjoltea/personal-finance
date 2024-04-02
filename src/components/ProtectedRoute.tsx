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

  useEffect(
    function () {
      if (!isAuthenticated && !isPending) navigate("/login");
    },
    [isAuthenticated, isPending, navigate]
  );

  if (!isAuthenticated && !isPending) navigate("/login");

  if (isPending) return <Spinner />;
  if (isAuthenticated) return <>{children}</>;
}
