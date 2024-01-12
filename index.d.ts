export interface chatType {
  chatId: number,  
  message: string;
  senderEmail: string;
  receiverEmail: string;
  date: string;
  picture: string;
}

interface Data {
    data: chatType
}