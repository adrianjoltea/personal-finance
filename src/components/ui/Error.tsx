import { ErrorProps } from "./Interface/UiInterface";

export default function Error({ children }: ErrorProps) {
  return <div className="form-error">{children}</div>;
}
