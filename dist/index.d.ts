import React from 'react';

declare type scannedData = {
    id: string;
    value: string;
};
interface QRScannerProps {
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
    buttonComponent?: JSX.Element | null | undefined;
}
declare function QRScanner({ onScanned, onError, onLoad, delay, facingMode, legacyMode, resolution, showViewFinder, videoStyle, videoClassName, buttonComponent, button, buttonLabel, buttonStyle, buttonClassName, loadingComponent, }: QRScannerProps): JSX.Element;

interface QRCodeProps {
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

export { QRCode, QRScanner };
