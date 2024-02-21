import { apiUrl } from "../common/variables";

interface UserProps {
  id: string;
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
  id: string;
}

interface FetchUserResponse {
  data: User;
  isAuthenticated: boolean;
  loading: boolean;
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

    console.log(data);
    return { data };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function fetchCurrentUser(): Promise<FetchUserResponse> {
  try {
    let loading = true;
    const res = await fetch(`${apiUrl}/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    if (!res.ok) throw new Error("Could not get the curent user");

    const data: User = await res.json();

    console.log(data, !!data.id);
    loading = false;

    return { data, isAuthenticated: !!data?.id, loading };
  } catch (err) {
    console.log(err);
    throw err;
  }
}
