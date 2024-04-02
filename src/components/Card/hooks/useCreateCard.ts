import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  BankAccounts,
  FetchBankAccounts,
} from "../../../services/Interfaces/BankInterface";
import { createBankAccounts } from "../../../services/apiBank";

export function useCreateCard() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createCard } = useMutation<
    FetchBankAccounts,
    Error,
    BankAccounts
  >({
    mutationFn: submitData => createBankAccounts(submitData),
    onSuccess: () => {
      toast.success("Successfully created a card", {
        className: "toast",
      });

      queryClient.invalidateQueries({
        queryKey: ["cards"],
      });
    },
    onError: err =>
      toast.error(err.message, {
        className: "toast",
      }),
  });
  return { isCreating, createCard };
}
