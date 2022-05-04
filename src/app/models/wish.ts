export default interface Wish {
  id: number;
  name: string;
  userId: string;
  price?: number;
  description: string;
  imageUrl?: string;
}
