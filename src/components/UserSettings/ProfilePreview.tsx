import { useEffect, useState } from "react";
import { useUser } from "../User/useUser";
import { apiUrl2 } from "../../common/variables";
import { BiCamera } from "react-icons/bi";
export default function ProfilePreview({
  avatar,
  firstName,
  lastName,
  handleFileChange,
}: {
  firstName: string;
  lastName: string;
  avatar: File | null;
  handleFileChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  const { user } = useUser();
  const originalAvatarUrl = user?.profilePicture;
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const originalImageUrl = `${apiUrl2}/${originalAvatarUrl || ""}`;
  const originalUsername = user?.username;
  useEffect(() => {
    if (avatar) {
      const reader = new FileReader();
      reader.onload = e => {
        if (typeof e.target?.result === "string") {
          setAvatarUrl(e.target.result);
        }
      };
      reader.readAsDataURL(avatar);
    } else {
      setAvatarUrl(null);
    }
  }, [avatar]);
  return (
    <div className="profile-preview">
      <div className="profile-preview-container">
        {avatarUrl || originalAvatarUrl ? (
          <label className="profile-preview-container-img">
            <input
              id="avatarInput"
              type="file"
              className="profile-preview-container-btn-input"
              onChange={handleFileChange}
            />
            <BiCamera className="profile-preview-container-btn-camera" />
            <img src={avatarUrl || originalImageUrl} alt="avatar" />
          </label>
        ) : (
          <p>No avatar selected</p>
        )}

        <p>{!firstName ? originalUsername : `${firstName} ${lastName}`}</p>
      </div>
    </div>
  );
}
