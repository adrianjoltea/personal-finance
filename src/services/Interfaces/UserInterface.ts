interface UserProps {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface FetchUserProps {
  data: UserProps;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  _id: string;
}

interface FetchUserResponse {
  data: User;
  isAuthenticated: boolean;
  loading: boolean;
}

interface UpdateUserProps {
  username: string;
  profilePicture: File | null;
}

export type {
  UserProps,
  FetchUserProps,
  User,
  FetchUserResponse,
  UpdateUserProps,
};
