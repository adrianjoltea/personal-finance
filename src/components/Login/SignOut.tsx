import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function SignOut() {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("mainCard");
    navigate("/login");
  }

  return (
    <button className="btn-logout" onClick={logout}>
      <HiArrowRightOnRectangle />
    </button>
  );
}
