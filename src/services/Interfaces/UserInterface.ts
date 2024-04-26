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
  username: string;
  _id: string;
  profilePicture: string;
  role: string;
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

interface UpdateUserResponse {
  data: UpdateUserProps[];
}

export type {
  UserProps,
  FetchUserProps,
  User,
  FetchUserResponse,
  UpdateUserProps,
  UpdateUserResponse,
};
