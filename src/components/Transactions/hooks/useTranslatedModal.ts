import { useTranslation } from "react-i18next";
import { ModalTransactionProps } from "../interface/TransactionOverview";
export function useTranslatedModal() {
  const { t } = useTranslation();

  const modal = t("modal") as unknown as ModalTransactionProps;

  const {
    enterAmount,
    enterDescription,
    enterCategory,
    amount,
    description,
    category,
  } = modal;

  const FIELD_LABEL = {
    AMOUNT: enterAmount,
    DESCRIPTION: enterDescription,
    CATEGORY: enterCategory,
  };

  return { FIELD_LABEL, modal, amount, description, category };
}
