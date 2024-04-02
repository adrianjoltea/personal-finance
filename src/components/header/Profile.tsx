import { apiUrl2 } from "../../common/variables";
import { useUser } from "../User/useUser";

export default function Profile() {
  const { user } = useUser();
  const avatarUrl = user?.profilePicture;

  return (
    <div className="profile">
      <img src={`${apiUrl2}/${avatarUrl}`} alt="avatar" />
      <p>{user?.username}</p>
    </div>
  );
}
