import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../context/userSlice";
import { apiUrl2 } from "../../common/variables";

export default function Profile() {
  const user = useSelector(getUser);
  const avatarUrl = user.profilePicture;

  return (
    <div className="profile">
      <img src={`${apiUrl2}/${avatarUrl}`} />
      <p>{user.username}</p>
    </div>
  );
}
