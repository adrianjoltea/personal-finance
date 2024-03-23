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

export type {
  LoginData,
  LoginResponse,
  AuthResponse,
  RegisterProps,
  FetchRegisterProps,
};
