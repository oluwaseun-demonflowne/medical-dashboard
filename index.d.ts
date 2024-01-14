import NextAuth, { DefaultSession } from "next-auth";
export interface chatType {
  chatId: number;
  message: string;
  senderEmail: string;
  receiverEmail: string;
  date: string;
  picture: string;
}

interface Data {
  data: chatType;
}

declare module "next-auth" {
  interface Session {
    user: {
      role: string;
    } & DefaultSession["user"];
  }
}
