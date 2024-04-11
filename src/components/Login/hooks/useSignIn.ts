import { useMutation, useQueryClient } from "@tanstack/react-query";
import { register } from "../../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { LoginResult, submitDataProps } from "../Interface/AuthInterface";
import toast from "react-hot-toast";

export function useSignIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signIn, isPending } = useMutation<
    LoginResult,
    Error,
    submitDataProps
  >({
    mutationFn: submitData => register(submitData),
    onSuccess: user => {
      queryClient.setQueryData(["user"], user);
      navigate("/login");
      toast.success("Account successfully created!", {
        className: "toast",
      });
    },
    onError: error => {
      toast.error(error.message);
      console.log(error);
    },
  });

  return { signIn, isPending };
}
