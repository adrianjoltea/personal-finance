import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { LoginResult, submitDataProps } from "./Interface/AuthInterface";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation<
    LoginResult,
    Error,
    submitDataProps
  >({
    mutationFn: submitData => loginApi(submitData),
    onSuccess: user => {
      queryClient.setQueryData(["user"], user);
      navigate("/", { replace: true });
    },
    onError: err => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorect", {
        className: "toast",
      });
    },
  });
  return { login, isPending };
}
