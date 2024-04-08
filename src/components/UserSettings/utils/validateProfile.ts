import toast from "react-hot-toast";

export default function validateProfile(
  avatar: File | null,
  username?: string
) {
  if (!avatar || !username) {
    return "Please select an avatar and fill the username";
  }
}
export function validateProfileToast(avatar: File | null, username?: string) {
  const validationError = validateProfile(avatar, username);

  if (validationError) {
    toast.error(validationError, {
      className: "toast",
    });
    return true;
  }
  return false;
}
