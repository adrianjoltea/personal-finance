interface submitDataProps {
  username: string;
  password: string;
}

interface LoginResult {
  isAuthenticated: boolean;
  loading: boolean;
  error?: string;
}

export type { submitDataProps, LoginResult };
