import { BiTrash } from "react-icons/bi";
import { useState } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import { CardDetailsProps, DropdownItem } from "./Interface/CardInterface";
import { useDeleteCard } from "./hooks/useDeleteCard";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { FaHome } from "react-icons/fa";

function CardDropdown({ items }: { items: DropdownItem[] }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useOutsideClick(() => {
    setShowDropdown(false);
  });

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="card-dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="card-dropdown-btn">
        <HiEllipsisVertical />
      </button>
      {showDropdown && (
        <div className="card-dropdown-content">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                item.onClick();
                setShowDropdown(false);
              }}
              className="delete-btn card-dropdown-content-flex"
              disabled={item.disabled}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

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

  const handleDelete = async () => {
    if (!_id) {
      return;
    }

    deleteOneCard({ _id });
  };

  const handleAdd = () => {
    handleClick?.({ name, currency, balance, _id });
  };

  const dropdownItems = [
    {
      label: "Delete",
      onClick: handleDelete,
      icon: <BiTrash />,
      disabled: isDeleting,
    },
    {
      label: "Add",
      onClick: handleAdd,
      icon: <FaHome />,
      disabled: isDeleting,
    },
  ];

  return (
    <div className={`card ${hasEffects ? "card-hover" : ""}`}>
      <div className="card-name-placeholder">
        <div className="card-name">{name} </div>
        <span>{hasDelete && <CardDropdown items={dropdownItems} />}</span>
      </div>
      <div className="card-balance">
        <span>Balance </span>
        <span>{formatCurrency(balance)} </span>
      </div>
    </div>
  );
}
