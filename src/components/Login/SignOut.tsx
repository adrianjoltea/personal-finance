import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMainCard } from "../../context/userCardsSlice";

export default function SignOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("mainCard");
    dispatch(setMainCard({}));
    navigate("/login");
  }

  return (
    <button className="btn-logout" onClick={logout}>
      <HiArrowRightOnRectangle />
    </button>
  );
}
