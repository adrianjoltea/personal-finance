import {
  Query,
  QueryKey,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addTransaction } from "../../../services/apiTransanctions";
import {
  TransactionsRespose,
  transactionProps,
} from "../../../services/Interfaces/TransactionsInterface";

export function useAddTransaction() {
  const queryClient = useQueryClient();

  const { mutate: addTransactions, isPending } = useMutation<
    TransactionsRespose,
    Error,
    transactionProps
  >({
    mutationFn: submitData => addTransaction(submitData),
    onSuccess: () => {
      toast.success("Transaction made successfully", {
        className: "toast",
      });

      queryClient.invalidateQueries({
        predicate: (query: Query<unknown, Error, unknown, QueryKey>) => {
          const queryKeyArray = query.queryKey as string[];
          return ["cards", "transactions"].includes(queryKeyArray[0]);
        },
      });
    },
    onError: err =>
      toast.error(err.message, {
        className: "toast",
      }),
  });
  return { isPending, addTransactions };
}
