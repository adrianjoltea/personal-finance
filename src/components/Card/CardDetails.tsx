import { BiTrash } from "react-icons/bi";
import { useState } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import { CardDetailsProps } from "./Interface/CardInterface";
import { useDeleteCard } from "./hooks/useDeleteCard";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { FaHome } from "react-icons/fa";

export default function CardDetails({
  balance,
  currency,
  name,
  _id,
  handleClick,
  hasEffects,
  hasDelete,
}: CardDetailsProps) {
  const { isDeleting, deleteOneCard } = useDeleteCard();
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useOutsideClick(() => {
    setShowDropdown(false);
  });

  const handleDelete = async () => {
    if (!_id) {
      return;
    }
    setShowDropdown(false);
    deleteOneCard({ _id });
  };

  const handleAdd = () => {
    handleClick?.({ name, currency, balance, _id });
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={`card ${hasEffects ? "card-hover" : ""}`}>
      <div className="card-name-placeholder">
        <div className="card-name">{name} </div>
        <span>
          {hasDelete && (
            <div className="card-dropdown" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="card-dropdown-btn">
                <HiEllipsisVertical />
              </button>
              {showDropdown && (
                <div className="card-dropdown-content">
                  <button
                    onClick={handleDelete}
                    className="delete-btn card-dropdown-content-flex"
                    disabled={isDeleting}
                  >
                    <BiTrash />
                    <span>Delete</span>
                  </button>

                  <button
                    className="delete-btn card-dropdown-content-flex"
                    onClick={handleAdd}
                    disabled={isDeleting}
                  >
                    <FaHome />
                    <span>Add</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </span>
      </div>
      <div className="card-balance">
        <span>Balance </span>
        <span>{formatCurrency(balance)} </span>
      </div>
    </div>
  );
}
