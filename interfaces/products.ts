export interface IProducts {
  id: number,
  title: string,
  price: string,
  original_price?: string,
  discount_amount?: number,
  description: string,
  category: string,
  image: string,
  thumbnails: string[],
  rating: {
    rate: number,
    count: number
  }
}