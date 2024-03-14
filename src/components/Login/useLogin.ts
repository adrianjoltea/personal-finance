import { login as loginApi } from "../../services/apiAuth";

interface submitDataProps {
  username: string;
  password: string;
}

interface LoginResult {
  isAuthenticated: boolean;
  loading: boolean;
}

export default async function Login(
  submitData: submitDataProps
): Promise<LoginResult> {
  try {
    const { isAuthenticated, loading } = await loginApi(submitData);

    return { isAuthenticated, loading };
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
}
