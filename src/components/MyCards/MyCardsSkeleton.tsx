import { useTranslation } from "react-i18next";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MyCardsProps } from "./interface/MyCardsProps";

function MyCardsSkeleton() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const text = t("myCards") as unknown as MyCardsProps;
  return (
    <div className="my-cards-skeleton">
      <button
        className="btn my-cards-skeleton-btn"
        onClick={() => navigate("/create-card")}
      >
        <FaPlus />
      </button>
      <h4>{text.create}</h4>
    </div>
  );
}

export default MyCardsSkeleton;
