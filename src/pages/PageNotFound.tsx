import { useTranslation } from "react-i18next";
import { useMoveBack } from "../hooks/useMoveBack";
export default function PageNotFound() {
  const { t } = useTranslation();
  const text = t("pageNotFound") as unknown as { title: string };
  return (
    <div className="page-not-found">
      <div className="page-not-found-container">
        <h3>{text.title}</h3>
        <button onClick={useMoveBack()}>&larr;</button>
      </div>
    </div>
  );
}
