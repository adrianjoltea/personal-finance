import { fetchCurrentUser } from "../../services/apiUser";

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
export default async function getCurrentUser(): Promise<FetchUserResponse> {
  try {
    const { data, isAuthenticated, loading } = await fetchCurrentUser();
    console.log(data);
    return { data, isAuthenticated, loading };
  } catch (err) {
    console.error(err);
    throw err;
  }
}
