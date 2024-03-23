import { useDispatch } from "react-redux";
import getCardsUser from "../Bank/getCardsUser";
import { setCurrentCards } from "../../context/userCardsSlice";

export const useCards = async () => {
  const dispatch = useDispatch();
  try {
    const cards = await getCardsUser();
    dispatch(setCurrentCards(cards));
  } catch (error) {
    console.error("Error fetching cards data:", error);
  }
};
