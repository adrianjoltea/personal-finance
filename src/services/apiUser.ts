import { apiUrl2 } from "../common/variables";
import {
  FetchUserResponse,
  UpdateUserProps,
  User,
} from "./Interfaces/UserInterface";
import { fetchData } from "./reusableApi";

export async function fetchCurrentUser(): Promise<FetchUserResponse> {
  try {
    const data: User = await fetchData(`${apiUrl2}/auth/me`, "GET");

    const isAuthenticated: boolean = !!data?._id;
    const loading: boolean = false;

    return { data, isAuthenticated, loading };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function updateUser(dataUser: UpdateUserProps) {
  try {
    const formData = new FormData();
    formData.append("username", dataUser.username);
    if (dataUser.profilePicture) {
      const file = dataUser.profilePicture;
      formData.append("profilePicture", file, file.name);
    }

    const res = await fetch(`${apiUrl2}/auth/update-profile`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: formData,
    });

    if (!res.ok) throw new Error("Could not update the user profile");

    const updatedData = await res.json();

    return { data: updatedData };
  } catch (err) {
    console.log(err);
    throw err;
  }
}
