import { register } from "../../services/apiAuth";

interface submitDataProps {
  username: string;
  password: string;
}

interface RegisterResult {
  isAuthenticated: boolean;
  loading: boolean;
  error?: string;
}

export default async function Register(
  submitData: submitDataProps
): Promise<RegisterResult> {
  try {
    const { isAuthenticated, loading } = await register(submitData);

    if (!isAuthenticated) console.log("Register unsuccessfull");

    return { isAuthenticated, loading };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return {
        isAuthenticated: false,
        loading: false,
        error: error.message,
      };
    } else {
      return {
        isAuthenticated: false,
        loading: false,
        error: "An unknown error occurred during registration",
      };
    }
  }
}
