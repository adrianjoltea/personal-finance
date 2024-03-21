import { apiUrl2 } from "../common/variables";

interface LoginData {
  username: string;
  password: string;
}
interface LoginResponse {
  accessToken?: string;
}

interface AuthResponse {
  data: LoginResponse;
  isAuthenticated: boolean;
  loading: boolean;
}

interface RegisterProps {
  username: string;
  password: string;
}

interface FetchRegisterProps {
  data: RegisterProps;
  isAuthenticated: boolean;
  loading: boolean;
}

export const login = async (dataApi: LoginData): Promise<AuthResponse> => {
  try {
    const authResponse: AuthResponse = {
      data: { accessToken: undefined },
      isAuthenticated: false,
      loading: true,
    };

    const response = await fetch(`${apiUrl2}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataApi),
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    authResponse.loading = false;

    const data: LoginResponse = await response.json();
    if (data.accessToken) {
      localStorage.setItem("accessToken", data.accessToken);
    }

    return { ...authResponse, data, isAuthenticated: response.ok };
  } catch (error) {
    console.error("Fetch error:", error);

    return {
      data: { accessToken: undefined },
      isAuthenticated: false,
      loading: false,
    };
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

    const res = await fetch(`${apiUrl2}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataApi),
    });

    if (!res.ok) {
      const errorResponse = await res.json();
      const errorMessage = errorResponse.message;
      throw new Error(errorMessage);
    }

    authResponse.loading = false;

    const data: RegisterProps = await res.json();

    return { ...authResponse, data, isAuthenticated: res.ok };
  } catch (err) {
    console.log(err);
    throw err;
  }
}
