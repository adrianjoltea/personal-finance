import { useTranslation } from "react-i18next";
import { MyCardsProps } from "./interface/MyCardsProps";

function MyCardsTitle() {
  const { t } = useTranslation();
  const text = t("myCards") as unknown as MyCardsProps;
  return (
    <div className="my-cards-title">
      <h2>{text.title}</h2>
      <h4>{text.subTitle}</h4>
    </div>
  );
}

export default MyCardsTitle;
