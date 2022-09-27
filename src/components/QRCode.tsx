import React, { useState, useEffect } from "react";
import Code from "react-qr-code";
import { v4 as uuidv4 } from "uuid";
import { io } from "socket.io-client";
const socket = io("https://react-scanned-qr-server.herokuapp.com");

export interface QRCodeProps {
  onScanned: (data: string | null) => void;
  onError: (err: any) => void;
  style?: React.CSSProperties;
  className?: string;
  value: string;
  bgColor?: string;
  fgColor?: string;
  size?: number;
  level?: "L" | "M" | "Q" | "H";
}

function QRCode({
  onScanned,
  onError,
  style,
  className,
  value,
  bgColor,
  fgColor,
  size,
  level,
}: QRCodeProps) {
  const [id] = React.useState("");

  useEffect(() => {
    joinRoom();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("scanned", (data) => {
        if (data?.id === id) {
          onScanned(data);
        }
      });
    }
  }, [socket]);

  function joinRoom() {
    socket.emit("join_room", id);
  }

  return (
    <div style={style} className={className}>
      <Code
        value={`{ "value":"${value}" , "id":"${id}"}`}
        bgColor={bgColor}
        fgColor={fgColor}
        size={size}
        level={level}
      />
    </div>
  );
}

export default QRCode;
