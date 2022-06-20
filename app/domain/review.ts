export type Review = {
  userId: string;
  title: string;
  body: string;
  isPublic: boolean;
  rating?: number;
  createdAt: Date;
  updatedAt: Date;
};
