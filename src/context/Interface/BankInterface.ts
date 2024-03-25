interface Card {
  _id: string;
  name: string;
  balance: number;
  currency: string;
}

interface CardProps {
  cards: Card[];
  mainCard: Card;
}

export type { Card, CardProps };
