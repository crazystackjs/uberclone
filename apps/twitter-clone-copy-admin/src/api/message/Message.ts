export type Message = {
  createdAt: Date;
  id: string;
  recipientUserId: string | null;
  senderUserId: string | null;
  text: string | null;
  updatedAt: Date;
};
