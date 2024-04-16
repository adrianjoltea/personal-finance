import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { InputPropsHook } from "./Interface/UiInterface";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { FieldValues } from "react-hook-form";
import Error from "./Error";

export default function InputHook<T extends FieldValues>({
  type = "text",
  id,
  name,
  register,
  errors,
  autoComplete,
  placeholder,
  forPassword,
  handleShow,
  showPassword,
  options,
}: InputPropsHook<T>) {
  const content = capitalizeFirstLetter(id);
  const defaultPlaceholder = `Enter your ${id}`;

  if (type === "select") {
    return (
      <div className="form-group">
        <label htmlFor="category" className="form-label">
          Category:
        </label>
        <select id="category" {...register(name)} className="form-input">
          {options?.map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        {errors[id] && <Error>{errors[id].message}</Error>}
      </div>
    );
  }

  return (
    <div className="form-group">
      <input
        className="form-input"
        type={type}
        id={id}
        placeholder={!placeholder ? defaultPlaceholder : placeholder}
        autoComplete={autoComplete}
        {...register(name)}
        style={type === "color" ? { height: "4rem", padding: "0.25rem" } : {}}
      />

      <label className="form-label" htmlFor={id}>
        {content}
      </label>
      {forPassword && (
        <button type="button" onClick={handleShow} className="btn-password">
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
      )}
      {errors[id] && <Error>{errors[id].message}</Error>}
    </div>
  );
}
