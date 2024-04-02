import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  BuyStocks,
  BuyStocksResponse,
} from "../../../services/Interfaces/Investitions";
import { buyStocks } from "../../../services/apiInvestitions";

export function useBuyStock() {
  const queryClient = useQueryClient();

  const { isPending: isAdding, mutate: buyStock } = useMutation<
    BuyStocksResponse,
    Error,
    BuyStocks
  >({
    mutationFn: submitData => buyStocks(submitData),
    onSuccess: () => {
      toast.success("Use them wisely", {
        className: "toast",
      });

      queryClient.invalidateQueries({
        queryKey: ["stocks"],
      });
    },
    onError: err =>
      toast.error(err.message, {
        className: "toast",
      }),
  });
  return { isAdding, buyStock };
}
