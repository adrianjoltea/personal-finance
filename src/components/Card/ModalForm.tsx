import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import Error from "../Error";
import { toggleModal } from "../../context/modalSlice";

import CreateBankAccount from "./useCreateBankAccont";
import CardDetails from "./CardDetails";

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

  const [username, setUsername] = useState("");
  const [balance, setBalance] = useState("");
  const [currency, setCurrency] = useState("");

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

  return (
    <div>
      <div className="card-transactions-container">
        <CardDetails
          name={!username ? "Enter your name" : username}
          currency={!currency ? "Enter your curency" : currency}
          balance={!balance ? 0 : Number(balance)}
          _id={undefined}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-transactions">
        <div className="form-group">
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="form-input"
            value={username}
            {...register("name", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9]*$/,
                message: "Name can only contain letters and numbers",
              },
            })}
            onChange={e => setUsername(e.target.value)}
          />
          <label className="form-label"></label>

          {<Error>{errors?.name?.message}</Error>}
        </div>
        <div className="form-group">
          <input
            className="form-input"
            type="number"
            id="balance"
            value={balance}
            placeholder="Enter your balance"
            {...register("balance", {
              required: "This field is required",
            })}
            onChange={e => setBalance(e.target.value)}
          />
          <label className="form-label">Balance</label>
          {<Error>{errors?.balance?.message}</Error>}
        </div>
        <div className="form-group">
          <input
            className="form-input"
            type="text"
            id="currency"
            value={currency}
            placeholder="Enter your currency"
            {...register("currency", {
              required: "This field is required",
            })}
            onChange={e => setCurrency(e.target.value)}
          />
          <label className="form-label">Currency</label>

          {<Error>{errors?.currency?.message}</Error>}
        </div>

        <div className="form-card-btns">
          <button
            className="btn btn-form"
            onClick={() => dispatch(toggleModal({ modalId, open: false }))}
          >
            Cancel
          </button>
          <button className="btn btn-form">Submit</button>
        </div>
      </form>
    </div>
  );
}
