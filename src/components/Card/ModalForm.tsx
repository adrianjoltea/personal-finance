import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import Error from "../Error";
import { toggleModal } from "../../context/modalSlice";

import CreateBankAccount from "./useCreateBankAccont";

interface IFormInput {
  name: string;
  balance: number;
  currency: string;
}

interface ModalProps {
  modalId: string;
}

export default function ModalForm({ modalId }: ModalProps) {
  const { register, handleSubmit, formState } = useForm<IFormInput>();
  const dispatch = useDispatch();
  const { errors } = formState;

  console.log(errors);

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    const formatedData = {
      name: data.name,
      balance: Number(data.balance),
      currency: data.currency,
    };
    CreateBankAccount(formatedData);
    dispatch(toggleModal({ modalId, open: false }));
  };

  const validateName = (value: string) => {
    const isValid = /^[a-zA-Z]+$/.test(value) && value.trim() !== "";
    return isValid || "Invalid name format";
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-card">
        <div className="form-group">
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="form-input"
            {...register("name", {
              required: "This field is required",
              validate: validateName,
            })}
          />
          <label className="form-label"></label>

          {<Error>{errors?.name?.message}</Error>}
        </div>
        <div className="form-group">
          <input
            className="form-input"
            type="number"
            id="balance"
            placeholder="Enter your balance"
            {...register("balance", {
              required: "This field is required",
            })}
          />
          <label className="form-label">Balance</label>
          {<Error>{errors?.balance?.message}</Error>}
        </div>
        <div className="form-group">
          <input
            className="form-input"
            type="text"
            id="currency"
            placeholder="Enter your currency"
            {...register("currency", {
              required: "This field is required",
            })}
          />
          <label className="form-label">Currency</label>

          {<Error>{errors?.currency?.message}</Error>}
        </div>

        <div className="form-card-btns">
          <button
            className="form-card-btn"
            onClick={() => dispatch(toggleModal({ modalId, open: false }))}
          >
            Cancel
          </button>
          <button className="form-card-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}
