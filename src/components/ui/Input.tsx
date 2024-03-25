import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { InputProps } from "./Interface/UiInterface";

export default function Input({
  type,
  name,
  id,
  placeholder,
  content,
  value,
  onChange,
  autoComplete,
  forPassword,
  handleShow,
  showPassword,
}: InputProps) {
  return (
    <div className="form-group">
      {type !== "file" ? (
        <input
          className="form-input"
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value as string}
          onChange={onChange}
          autoComplete={autoComplete}
        />
      ) : (
        <input
          className="form-input"
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete={autoComplete}
        />
      )}
      <label className="form-label" htmlFor={name}>
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
