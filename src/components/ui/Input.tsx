import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { InputProps } from "./Interface/UiInterface";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

export default function Input({
  type = "text",
  id,
  value,

  onChange,
  autoComplete,
  placeholder,
  forPassword,
  handleShow,
  showPassword,
}: InputProps) {
  const content = capitalizeFirstLetter(id);
  const defaultPlaceholder = `Enter your ${id}`;
  return (
    <div className="form-group">
      {type !== "file" ? (
        <input
          className="form-input"
          type={type}
          id={id}
          placeholder={!placeholder ? defaultPlaceholder : placeholder}
          value={value as string}
          onChange={onChange}
          autoComplete={autoComplete}
        />
      ) : (
        <input
          className="form-input"
          type={type}
          name={id}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete={autoComplete}
        />
      )}
      <label className="form-label" htmlFor={id}>
        {content}
      </label>
      {forPassword && (
        <button type="button" onClick={handleShow} className="btn-password">
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
      )}
    </div>
  );
}
