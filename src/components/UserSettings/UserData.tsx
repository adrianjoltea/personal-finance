import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../Ui/Input";
import { useUpdateUser } from "./useUpdateUser";
import { validateProfileToast } from "./utils/validateProfile";
export default function UserData() {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const { updateCurrentUser } = useUpdateUser();
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

    const validationError = validateProfileToast(avatar, username);

    if (!validationError) updateCurrentUser(submitData);
  }

  return (
    <>
      <h2 className="user-data-h2">Update your account</h2>
      <div className="user-data">
        <form onSubmit={onSubmit} className="form-user">
          <Input
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <Input
            id="file"
            type="file"
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
