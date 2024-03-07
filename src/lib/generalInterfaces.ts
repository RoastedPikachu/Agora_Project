export interface Message {
    id: number;
    author: string;
    sendDate: string;
    text: string;
}

export interface Chat {
    id: number;
    name: string;
    isOpened: boolean;
    messages: Message[];
}