export default interface Wish {
  id: number;
  name: string;
  userId: string;
  price: number | null;
  description: string;
  imageUrl: string;
}
