import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../Ui/Input";
import { updateUser } from "../../services/apiUser";
import toast from "react-hot-toast";

export default function UserData() {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);

  const submitData = {
    username,
    profilePicture: avatar,
  };

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    setAvatar(file || null);
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!username || !avatar) toast.error("Please fill out atleast one field");

    updateUser(submitData);
  }

  return (
    <>
      <h2 className="user-data-h2">Update your account</h2>
      <div className="user-data">
        <form onSubmit={onSubmit} className="form-user">
          <Input
            id="username"
            type="text"
            placeholder="Enter your username"
            content="Enter your username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <Input
            id="file"
            type="file"
            placeholder="Choose your profile picture"
            content="Choose your profile picture"
            value={avatar}
            onChange={handleFileChange}
          />
          <div className="form-btn">
            <button className="btn btn-form">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
