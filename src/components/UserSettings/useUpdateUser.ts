import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUser } from "../../services/apiUser";
import {
  UpdateUserProps,
  UpdateUserResponse,
} from "../../services/Interfaces/UserInterface";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateCurrentUser, isPending } = useMutation<
    UpdateUserResponse,
    Error,
    UpdateUserProps
  >({
    mutationFn: submitData => updateUser(submitData),
    onSuccess: () => {
      toast.success("User updated succesfully", {
        className: "toast",
      });

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: err =>
      toast.error(err.message, {
        className: "toast",
      }),
  });
  return { isPending, updateCurrentUser };
}
