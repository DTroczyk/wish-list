export default interface Wish {
  id: number;
  name: string;
  userId: string;
  price?: number;
  description: string;
  imageUrl?: string;
  deadline?: Date;
  quantity: number;
  assignedTo: Assigned[];
  status: number;
  visibility?: string[] | boolean;
  isMaxOne: boolean;
}

export interface Assigned {
  user: string;
  value: number;
}
