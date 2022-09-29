import React from "react";
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
declare function QRCode({ onScanned, onError, style, className, value, bgColor, fgColor, size, level, }: QRCodeProps): JSX.Element;
export default QRCode;
