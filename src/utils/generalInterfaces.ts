export interface Author {
  uid: string;
  name: string;
  avatarPath: string;
}

export interface Message {
  id: number;
  author: Author;
  sendTime: string;
  text: string;
}

export interface Chat {
  id: number;
  name: string;
  isOpened: boolean;
  messages: Message[];
}
