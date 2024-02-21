import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Error";
import { toggleModal } from "../../context/modalSlice";

import { getUser } from "../../context/userSlice";
import { getBank } from "../../context/bankSlice";
import CreateBankAccount from "./useCreateBankAccont";

interface IFormInput {
  name: string;
  balance: number;
  currency: string;
  bankId: string;
  userId: string;
}

interface bankInput {
  id?: string;
  name: string;
}

export default function ModalForm() {
  const { register, handleSubmit, formState } = useForm<IFormInput>();
  const dispatch = useDispatch();
  const { errors } = formState;
  const banks = useSelector(getBank);
  const user = useSelector(getUser);

  console.log(errors);

  const onSubmit: SubmitHandler<IFormInput> = data => {
    data.userId = user.id;

    console.log(data);
    CreateBankAccount(data);
    dispatch(toggleModal(false));
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
            placeholder="Enter your first name"
            className="form-input"
            {...register("name", {
              required: "This field is required",
              validate: validateName,
            })}
          />
          <label className="form-label">First Name</label>

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
          <label className="form-label">Last Name</label>
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
        <div className="form-group">
          <select
            className="form-select"
            id="bankid"
            {...register("bankId", {
              required: "This field is required",
            })}
          >
            {banks.map((bank: bankInput) => (
              <option key={bank.id} value={bank.id}>
                {bank.name}
              </option>
            ))}
          </select>
          <label className="form-label">Select your bank</label>

          {<Error>{errors?.bankId?.message}</Error>}
        </div>
        {/* <Input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter your username"
          value={watch("firstName")}
          {...register("firstName", { required: "ciava" })}
        /> */}

        <div className="form-card-btns">
          <button
            className="form-card-btn"
            onClick={() => dispatch(toggleModal(false))}
          >
            Cancel
          </button>
          <button className="form-card-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}
