import React, { useState } from "react";
import { io } from "socket.io-client";
import QrReader from "react-web-qr-reader";

const socket = io("https://react-scanned-qr-server.herokuapp.com");

type scannedData = {
  id: string;
  value: string;
};

export interface QRScannerProps {
  onScanned: (data: scannedData) => void;
  onError: (err: any) => void;
  button?: boolean;
  buttonLabel?: string;
  buttonStyle?: React.CSSProperties;
  buttonClassName?: string | undefined;
  onLoad?: (() => void) | undefined;
  delay?: number | false | undefined;
  facingMode?: "user" | "environment" | undefined;
  legacyMode?: boolean | undefined;
  resolution?: number | undefined;
  showViewFinder?: boolean | undefined;
  videoStyle?: React.CSSProperties;
  videoClassName?: string | undefined;
  loadingComponent?: JSX.Element;
}

function QRScanner({
  onScanned,
  onError,
  onLoad,
  delay = 500,
  facingMode,
  legacyMode,
  resolution,
  showViewFinder,
  videoStyle = {
    height: 256,
    width: 256,
  },
  videoClassName,
  button,
  buttonLabel,
  buttonStyle,
  buttonClassName,
  loadingComponent = <div>Loading..</div>,
}: QRScannerProps) {
  const [showButton, setShowButton] = useState(button);
  const [loading, setLoading] = useState(false);

  async function qrScanned(data: scannedData) {
    setLoading(true);
    socket.emit("join_room", data?.id);
    socket.emit("scanned", { data: data?.value, id: data?.id });
    onScanned(data);
  }

  const handleScan = ({ data }: any) => {
    if (data) {
      if (data) {
        setTimeout(() => {
          setLoading(false);
        }, delay || 0);
        qrScanned(data);
      }
    }
  };

  return loading ? (
    loadingComponent
  ) : (
    <div>
      {showButton ? (
        <button
          style={buttonStyle}
          className={buttonClassName}
          onClick={() => setShowButton(false)}
        >
          {buttonLabel}
        </button>
      ) : (
        <QrReader
          onScan={handleScan}
          onError={onError}
          onLoad={onLoad}
          delay={delay}
          facingMode={facingMode}
          style={videoStyle}
          legacyMode={legacyMode}
          resolution={resolution}
          showViewFinder={showViewFinder}
          className={videoClassName}
        />
      )}
    </div>
  );
}

export default QRScanner;
