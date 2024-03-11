export interface Author {
  name: string;
  avatarPath: string;
}

export interface Message {
  id: number;
  author: Author;
  sendDate: string;
  text: string;
}

export interface Chat {
  id: number;
  name: string;
  isOpened: boolean;
  messages: Message[];
}
