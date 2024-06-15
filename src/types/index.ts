import { type Socket } from "socket.io";

export type Online = {
  email: string;
  socketId: string;
  socket:Socket
  typing:boolean
}

export type newSocket = Socket & {
  id: string;
};

