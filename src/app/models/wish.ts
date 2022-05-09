export default interface Wish {
  id: number;
  name: string;
  userId: string;
  price?: number;
  description: string;
  imageUrl?: string;
  deadline?: Date;
  quantity?: Number;
  assignedTo: string[];
  status: number;
}
