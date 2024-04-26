import React, { useEffect } from "react";
import { useUser } from "../components/User/useUser";
import { useNavigate } from "react-router-dom";

function Admin() {
  const { user } = useUser();
  const navigate = useNavigate();
  const isAdmin = user?.role === "admin";

  useEffect(() => {
    if (!isAdmin) navigate(-1);
  }, [navigate, isAdmin]);

  return <div>This is page is not done yet</div>;
}

export default Admin;
