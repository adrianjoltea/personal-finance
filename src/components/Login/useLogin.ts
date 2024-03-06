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
): Promise<LoginResult | boolean> {
  try {
    const { isAuthenticated, loading } = await loginApi(submitData);

    // if (!isAuthenticated) {
    //   console.log("Login unsuccessful");
    // }

    return { isAuthenticated, loading };
  } catch (error) {
    // Handle errors from useLogin
    console.error("Error during login:", error);
    return false;
  }
}
