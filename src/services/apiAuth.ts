import { apiUrl } from "../common/variables";

interface LoginData {
  email: string;
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
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface FetchRegisterProps {
  data: RegisterProps;
  isAuthenticated: boolean;
  loading: boolean;
}

export const login = async (dataApi: LoginData): Promise<AuthResponse> => {
  try {
    console.log(dataApi);

    const authResponse: AuthResponse = {
      data: { accessToken: undefined },
      isAuthenticated: false,
      loading: true,
    };

    const response = await fetch(`${apiUrl}/auth/login`, {
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
    // Handle the data
    console.log("Data received:", data);
    return { ...authResponse, data, isAuthenticated: response.ok };
  } catch (error) {
    // Handle errors
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

    const res = await fetch(`${apiUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataApi),
    });

    if (!res.ok) {
      throw new Error(`${res.statusText}`);
    }

    authResponse.loading = false;

    const data: RegisterProps = await res.json();

    console.log("data received", data);

    return { ...authResponse, data, isAuthenticated: res.ok };
  } catch (err) {
    console.log(err);
    throw err;
  }
}
