import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { DeleteProps } from "../../../services/Interfaces/BankInterface";
import { deleteCard } from "../../../services/apiBank";

export function useDeleteCard() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteOneCard } = useMutation<
    void,
    Error,
    DeleteProps
  >({
    mutationFn: submitData => deleteCard(submitData),
    onSuccess: () => {
      toast.success("Successfully deleted a card", {
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
  return { isDeleting, deleteOneCard };
}
