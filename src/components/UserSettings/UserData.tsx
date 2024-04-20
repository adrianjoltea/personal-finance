import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../Ui/Input";
import { useUpdateUser } from "./useUpdateUser";
import { validateProfileToast } from "./utils/validateProfile";
import toast from "react-hot-toast";
import ProfilePreview from "./ProfilePreview";
import { useUser } from "../User/useUser";
import { useTranslation } from "react-i18next";

export default function UserData() {
  const { user } = useUser();
  const { t } = useTranslation();
  const originalUsername = user?.username;
  const [originalFirstName, originalLastName] =
    originalUsername?.split(" ") || [];
  const [firstName, setFirstName] = useState(originalFirstName);
  const [lastName, setLastName] = useState(originalLastName);
  const [avatar, setAvatar] = useState<File | null>(null);
  const { updateCurrentUser } = useUpdateUser();
  const username = `${firstName} ${lastName}`;
  const submitData = {
    username,
    profilePicture: avatar,
  };
  const text = t("settings") as unknown as { title: string };
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
      <h2 className="user-data-h2">{text.title}</h2>
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
