interface User {
  id: string;
  username: string;
  email: string;
  profilePicture: string;
}

interface UserProps {
  user: User;
}
export type { User, UserProps };
