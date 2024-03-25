import { useMutation, useQueryClient } from "@tanstack/react-query";
import { register } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { LoginResult, submitDataProps } from "./Interface/AuthInterface";
import toast from "react-hot-toast";

// export default async function Register(
//   submitData: submitDataProps
// ): Promise<RegisterResult> {
//   try {
//     const { isAuthenticated, loading } = await register(submitData);

//     if (!isAuthenticated) console.log("Register unsuccessfull");

//     return { isAuthenticated, loading };
//   } catch (error) {
//     if (error instanceof Error) {
//       console.log(error);
//       return {
//         isAuthenticated: false,
//         loading: false,
//         error: error.message,
//       };
//     } else {
//       return {
//         isAuthenticated: false,
//         loading: false,
//         error: "An unknown error occurred during registration",
//       };
//     }
//   }
// }

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
      navigate("/");
      toast.success("Account succesfully created!", {
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
