import { apiUrl2 } from "../common/variables";
import {
  AuthResponse,
  FetchRegisterProps,
  LoginData,
  RegisterProps,
} from "./Interfaces/AuthInterface";
import { fetchData } from "./reusableApi";

export const login = async (dataApi: LoginData): Promise<AuthResponse> => {
  try {
    const authResponse: AuthResponse = {
      data: { accessToken: undefined },
      isAuthenticated: false,
      loading: true,
    };

    const response = await fetchData(`${apiUrl2}/auth/login`, "POST", dataApi);

    authResponse.loading = false;

    if (response.accessToken) {
      localStorage.setItem("accessToken", response.accessToken);
    }

    return { ...authResponse, data: response, isAuthenticated: true };
  } catch (error) {
    console.error("Fetch error:", error);

    throw new Error((error as Error).message);
  }
};

export async function register(
  dataApi: RegisterProps
): Promise<FetchRegisterProps> {
  try {
    const authResponse: AuthResponse = {
      data: { accessToken: undefined },
      isAuthenticated: false,
      loading: true,
    };

    const res = await fetchData(`${apiUrl2}/auth/register`, "POST", dataApi);

    authResponse.loading = false;

    return { ...authResponse, data: res, isAuthenticated: true };
  } catch (err) {
    console.log(err);
    throw err;
  }
}
