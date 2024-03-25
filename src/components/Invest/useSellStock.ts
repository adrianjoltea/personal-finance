import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sellStocks } from "../../services/apiInvestitions";
import toast from "react-hot-toast";
import {
  SellStocks,
  SellStocksResponse,
} from "../../services/Interfaces/Investitions";

export function useSellStock() {
  const queryClient = useQueryClient();

  const { isPending: isSelling, mutate: sellStock } = useMutation<
    SellStocksResponse,
    Error,
    SellStocks
  >({
    mutationFn: submitData => sellStocks(submitData),
    onSuccess: () => {
      toast.success("Stocks sold successfully", {
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
  return { isSelling, sellStock };
}
