import { useQuery } from "@tanstack/react-query";
import { fetchCurrentUser } from "../../services/apiUser";

interface User {
  username: string;
  profilePicture: string;
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
    return { data, isAuthenticated, loading };
  } catch (err) {
    console.error(err);
    throw err;
  }
}
export function useUser() {
  const { isPending, data: user } = useQuery<FetchUserResponse>({
    queryKey: ["user"],
    queryFn: fetchCurrentUser,
  });

  return {
    isPending,
    user: user?.data,
    isAuthenticated: user?.isAuthenticated,
  };
}
