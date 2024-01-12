"use client";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

type SocketContextType = {
  socket: Socket | null;
  isConnected: boolean;
};

const SocketContext = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
});

export const useSocket = () => {
  return useContext(SocketContext);
};



export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const { data: session, status } = useSession()
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    const socket: Socket = io("http://localhost:5001");

    socket.on("connect", () => {
      setIsConnected(true);
    });
    
    socket.emit("new-online", session?.user?.email);
    socket.on("get-users", (user) => {

    })

    socket.emit("connectUsers", session?.user?.email )
    //  socket?.on("receive_Publicfile", (data:FileData) => {
    //     toast.success(`${data?.email.replace(/@gmail\.com$/, '')} sent a .${data?.fileExtension} file `)
    //   })

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    setSocket(socket);
    return () => {
      socket.disconnect();
    };
  }, [session]);

  return (
    <SocketContext.Provider value={{ socket, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
};
