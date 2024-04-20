import { useDispatch, useSelector } from "react-redux";
import { getMainCard } from "../../context/userCardsSlice";
import Card from "../Overview/Card";
import { toggleModal } from "../../context/modalSlice";
import { useAddTransaction } from "./hooks/useAddTransaction";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import InputHook from "../Ui/InputHook";
import { transactionProps } from "../../services/Interfaces/TransactionsInterface";
import { useTranslatedModal } from "./hooks/useTranslatedModal";
import { translateData } from "../../utils/translateData";
import { FIELD_NAME, SCHEMA } from "./common/FormCommon";

const FORM_OPTIONS = [
  "Utilities",
  "Groceries",
  "Entertainment",
  "Travel",
  "Miscellaneous",
];

export default function WithdrawForm() {
  const dispatch = useDispatch();
  const mainCard = useSelector(getMainCard);
  const { isPending, addTransactions } = useAddTransaction();
  const { FIELD_LABEL, modal } = useTranslatedModal();
  const options = translateData(FORM_OPTIONS, modal.categories);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<transactionProps>({
    defaultValues: {
      [FIELD_NAME.AMOUNT]: "",
      [FIELD_NAME.DESCRIPTION]: "",
      [FIELD_NAME.CATEGORY]: "Utilities",
    },
    resolver: zodResolver(SCHEMA),
  });

  const fieldInputs = [
    {
      name: FIELD_NAME.AMOUNT,
      label: FIELD_LABEL.AMOUNT,
      type: "number",
    },
    {
      name: FIELD_NAME.DESCRIPTION,
      label: FIELD_LABEL.DESCRIPTION,
    },
    {
      name: FIELD_NAME.CATEGORY,
      label: FIELD_LABEL.CATEGORY,
      type: "select",
      options: options,
    },
  ];

  const onSubmit: SubmitHandler<transactionProps> = data => {
    console.log(data);
    const formattedData = {
      amount: -+data.amount,
      description: data.description,
      bankAccountId: mainCard._id,
      category: data.category,
    };
    addTransactions(formattedData);
    dispatch(toggleModal({ modalId: "withdraw", open: false }));
  };

  return (
    <>
      <div className="card-transactions-container">
        <Card />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fieldInputs.map((field, index) => (
          <InputHook
            id={field.name}
            name={field.name as keyof transactionProps}
            register={register}
            errors={errors}
            placeholder={field.label}
            type={field.type}
            key={index}
            options={field.options}
          />
        ))}

        <div className="form-btn">
          <button className="btn btn-form" disabled={isPending}>
            {modal.withdraw}
          </button>
        </div>
      </form>
    </>
  );
}
