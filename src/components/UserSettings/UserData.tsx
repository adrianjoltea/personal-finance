import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../Ui/Input";
import { useUpdateUser } from "./useUpdateUser";
import { validateProfileToast } from "./utils/validateProfile";
import toast from "react-hot-toast";
import ProfilePreview from "./ProfilePreview";

export default function UserData() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const { updateCurrentUser } = useUpdateUser();
  const username = `${firstName} ${lastName}`;
  const submitData = {
    username,
    profilePicture: avatar,
  };

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      setAvatar(file);
    } else {
      toast.error("Please choose a .png/.jpg file type", {
        className: "toast",
      });
      setAvatar(null);
    }
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
        <div className="user-data-preview">
          <ProfilePreview
            firstName={firstName}
            lastName={lastName}
            avatar={avatar}
            handleFileChange={handleFileChange}
          />
        </div>

        <form onSubmit={onSubmit} className="form-user">
          <Input
            id="first name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <Input
            id="last name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />

          <div className="form-btn">
            <button className="btn btn-form">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
