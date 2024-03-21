import { apiUrl } from "../common/variables";
import { apiUrl2 } from "../common/variables";

interface UserProps {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface FetchUserProps {
  data: UserProps;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  _id: string;
}

interface FetchUserResponse {
  data: User;
  isAuthenticated: boolean;
  loading: boolean;
}

interface updateUserProps {
  username: string;
  profilePicture: File | null;
}

export async function fetchUser(): Promise<FetchUserProps> {
  try {
    const res = await fetch(`${apiUrl}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Could not get the curent user");

    const data: UserProps = await res.json();

    return { data };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function fetchCurrentUser(): Promise<FetchUserResponse> {
  try {
    let loading = true;
    const res = await fetch(`${apiUrl2}/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    if (!res.ok) throw new Error("Could not get the curent user");

    const data: User = await res.json();

    loading = false;

    return { data, isAuthenticated: !!data?._id, loading };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function updateUser(dataUser: updateUserProps) {
  try {
    const formData = new FormData();

    // Append JSON data
    formData.append("username", dataUser.username);

    // Append profilePicture if available
    if (dataUser.profilePicture) {
      const file = dataUser.profilePicture; // Assuming dataUser.profilePicture is a File object
      formData.append("profilePicture", file, file.name);
    }

    const res = await fetch(`${apiUrl2}/auth/update-profile`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: formData,
    });

    if (!res.ok) throw new Error("Could not update the bank account");

    const updatedData = await res.json();

    return { data: updatedData };
  } catch (err) {
    console.log(err);
    throw err;
  }
}
