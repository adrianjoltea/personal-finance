import React from "react";
import Modal from "../components/Card/Modal";
import { toggleModal } from "../context/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import ModalForm from "../components/Card/ModalForm";
import CardDetailsContainer from "../components/Card/CardDetailsContainer";

import { getUser } from "../context/userSlice";

export default function Card() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const userID = user.id;
  console.log(userID);
  return (
    <div className="main-page">
      <CardDetailsContainer />
      <Modal>
        {" "}
        <ModalForm />
      </Modal>
      <button onClick={() => dispatch(toggleModal(true))}>ciava</button>
    </div>
  );
}
