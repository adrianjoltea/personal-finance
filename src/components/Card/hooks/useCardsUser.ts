import { fetchCardsUser } from "../../../services/apiBank";
import { useQuery } from "@tanstack/react-query";

export function useCardsUsers() {
  const {
    data: cardsData,
    isLoading: isLoading,
    refetch: refetchCards,
  } = useQuery({ queryKey: ["cards"], queryFn: fetchCardsUser });

  const cards = cardsData?.data;

  return {
    cards,
    loading: isLoading,
    refetchCards,
  };
}
