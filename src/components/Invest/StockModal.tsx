import Card from "../Overview/Card";
import { useDispatch, useSelector } from "react-redux";
import { getMainCard } from "../../context/userCardsSlice";
import { toggleModal } from "../../context/modalSlice";
import { useBuyStock } from "./hooks/useBuyStock";
import { StockModalInterface } from "./Interface/InvestInterface";
import { SubmitHandler, useForm } from "react-hook-form";
import InputHook from "../Ui/InputHook";
import { BuyStocks } from "../../services/Interfaces/Investitions";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslatedModal } from "../Transactions/hooks/useTranslatedModal";

const FIELD_NAME = {
  AMOUNT: "amount",
};

const SCHEMA = z.object({
  [FIELD_NAME.AMOUNT]: z.string().min(1, { message: "Required" }),
});

export default function StockModal({
  _id,
  name,
  currentValue,
}: StockModalInterface) {
  const mainCard = useSelector(getMainCard);
  const dispatch = useDispatch();
  const { isAdding, buyStock } = useBuyStock();

  const { FIELD_LABEL, amount: labelAmount } = useTranslatedModal();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BuyStocks>({
    defaultValues: {
      [FIELD_NAME.AMOUNT]: "",
    },
    resolver: zodResolver(SCHEMA),
  });

  const [amount] = watch(["amount"]);
  const formattedAmount = +amount;
  const disableButton = formattedAmount * currentValue > mainCard.balance;
  const onSubmit: SubmitHandler<BuyStocks> = data => {
    console.log(data);
    const formattedData = {
      amount: +data.amount,
      _id,
      name,
      boughtPrice: currentValue,
      cardId: mainCard._id,
    };
    buyStock(formattedData);
    dispatch(toggleModal({ modalId: "stock", open: false }));
  };

  const fieldInputs = [
    {
      name: FIELD_NAME.AMOUNT,
      label: FIELD_LABEL.AMOUNT,
      type: "number",
    },
  ];

  return (
    <div>
      <div className="card-transactions-container">
        <Card />
      </div>
      <form className="form-transactions" onSubmit={handleSubmit(onSubmit)}>
        {fieldInputs.map((field, index) => (
          <InputHook
            id={field.name}
            name={field.name as keyof BuyStocks}
            register={register}
            errors={errors}
            placeholder={field.label}
            type={field.type}
            key={index}
            label={labelAmount}
          />
        ))}

        <div className="form-stocks">
          <span
            className={
              formattedAmount * currentValue > mainCard.balance
                ? "form-error"
                : undefined
            }
          >
            {formattedAmount > 0 &&
              `Invest ${(formattedAmount * currentValue).toFixed(
                2
              )}$ in ${name}`}
          </span>
        </div>

        <div className="form-btn">
          <button
            className="btn btn-form"
            disabled={!mainCard._id || isAdding || disableButton}
          >
            Invest
          </button>
        </div>
      </form>
    </div>
  );
}
