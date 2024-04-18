import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function MyCardsSkeleton() {
  const navigate = useNavigate();

  return (
    <div className="my-cards-skeleton">
      <button
        className="btn my-cards-skeleton-btn"
        onClick={() => navigate("/create-card")}
      >
        <FaPlus />
      </button>
      <h4>Create Card</h4>
    </div>
  );
}

export default MyCardsSkeleton;
