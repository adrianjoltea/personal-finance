import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../context/modalSlice";
import { useCreateCard } from "./hooks/useCreateCard";
import CardDetails from "./CardDetails";
import { IFormInput, ModalFormProps } from "./Interface/CardInterface";
import InputHook from "../Ui/InputHook";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const FIELD_NAME = {
  NAME: "name",
  BALANCE: "balance",
  CURRENCY: "currency",
  FIRST_COLOR: "firstColor",
  SECOND_COLOR: "secondColor",
};
const FIELD_LABEL = {
  NAME: "Enter your name",
  BALANCE: "Enter your balance",
  CURRENCY: "Enter your currency",
  FIRST_COLOR: "Enter your first color",
  SECOND_COLOR: "Enter your second color",
};

const SCHEMA = z.object({
  [FIELD_NAME.NAME]: z.string().min(5, { message: "Required" }),
  [FIELD_NAME.BALANCE]: z.string().min(1, { message: "Required" }),
  [FIELD_NAME.CURRENCY]: z.string().min(3, { message: "Required" }),
  [FIELD_NAME.FIRST_COLOR]: z.string().min(1, { message: "Required" }),
  [FIELD_NAME.SECOND_COLOR]: z.string().min(1, { message: "Required" }),
});

export default function ModalForm({ modalId }: ModalFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      [FIELD_NAME.NAME]: "",
      [FIELD_NAME.BALANCE]: "",
      [FIELD_NAME.CURRENCY]: "",
      [FIELD_NAME.FIRST_COLOR]: "#4f46e5",
      [FIELD_NAME.SECOND_COLOR]: "#312e81",
    },
    resolver: zodResolver(SCHEMA),
  });

  const fieldInputs = [
    {
      name: FIELD_NAME.NAME,
      label: FIELD_LABEL.NAME,
    },
    {
      name: FIELD_NAME.BALANCE,
      label: FIELD_LABEL.BALANCE,
      type: "number",
    },
    {
      name: FIELD_NAME.CURRENCY,
      label: FIELD_LABEL.CURRENCY,
    },
    {
      name: FIELD_NAME.FIRST_COLOR,
      label: FIELD_LABEL.FIRST_COLOR,
      type: "color",
    },
    {
      name: FIELD_NAME.SECOND_COLOR,
      label: FIELD_LABEL.SECOND_COLOR,
      type: "color",
    },
  ];

  const [name, currency, balance, firstColor, secondColor] = watch([
    "name",
    "currency",
    "balance",
    "firstColor",
    "secondColor",
  ]);

  const dispatch = useDispatch();
  const { isCreating, createCard } = useCreateCard();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    const formattedData = {
      name: data.name,
      balance: Number(data.balance),
      currency: data.currency,
      firstColor: data.firstColor,
      secondColor: data.secondColor,
    };
    createCard(formattedData);
    dispatch(toggleModal({ modalId, open: false }));
  };

  return (
    <>
      <div className="card-transactions-container">
        <div className="main-card-container">
          <CardDetails
            name={!name ? "Enter your name" : name}
            currency={!currency ? "Enter your currency" : currency}
            balance={!balance ? 0 : Number(balance)}
            _id={undefined}
            firstColor={firstColor}
            secondColor={secondColor}
          />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-transactions">
        {fieldInputs.map((field, index) => (
          <InputHook
            id={field.name}
            name={field.name as keyof IFormInput}
            placeholder={field.label}
            register={register}
            errors={errors}
            type={field.type}
            key={index}
          />
        ))}

        <div className="form-card-btns">
          <button
            className="btn btn-form"
            onClick={() => dispatch(toggleModal({ modalId, open: false }))}
          >
            Cancel
          </button>
          <button className="btn btn-form" disabled={isCreating}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
