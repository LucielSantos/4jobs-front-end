export interface IMessageJobResponse {
  author: string;
  message: string;
  date: string;
}

export interface IMessageJobResponseRequest {
  messages: IMessageJobResponse[];
}

export interface INewMessage {
  message: string;
}

export interface IResponse {
  title: string;
  value: string;
}

export interface IGetJobResponse {
  id: string;
  response: IResponse[];
}
