export interface CardModel {
  id: string;
  image?: string;
  title: string;
  shortText: string;
  price: string;
}

export interface CardsInfo {
  totalCards: number,
  totalPrice: number,
  averagePrice: number
}
