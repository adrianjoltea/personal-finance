import { apiUrl2 } from "../../common/variables";
import { useUser } from "../User/useUser";

import defaultProfilePicture from "../../../public/profileDefault.png";
export default function Profile() {
  const { user } = useUser();
  const avatarUrl = user?.profilePicture;

  const imageUrl = avatarUrl
    ? `${apiUrl2}/${avatarUrl}`
    : defaultProfilePicture;

  return (
    <div className="profile">
      <img src={imageUrl} alt="avatar" />
      <p>{user?.username}</p>
    </div>
  );
}
