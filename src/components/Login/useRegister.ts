import { register } from "../../services/apiAuth";

interface submitDataProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface RegisterResult {
  isAuthenticated: boolean;
  loading: boolean;
}

export default async function Register(
  submitData: submitDataProps
): Promise<RegisterResult | boolean> {
  try {
    const { isAuthenticated, loading } = await register(submitData);

    if (!isAuthenticated) console.log("Register unsuccessfull");

    return { isAuthenticated, loading };
  } catch (err) {
    console.error(err);
    return false;
  }
}
