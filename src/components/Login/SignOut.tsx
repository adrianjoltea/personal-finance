import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMainCard } from "../../context/userCardsSlice";
import { useQueryClient } from "@tanstack/react-query";

export default function SignOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("mainCard");
    dispatch(setMainCard({}));
    queryClient.removeQueries();
    navigate("/login");
  }
  return (
    <button className="btn-logout" onClick={logout}>
      <HiArrowRightOnRectangle />
    </button>
  );
}
