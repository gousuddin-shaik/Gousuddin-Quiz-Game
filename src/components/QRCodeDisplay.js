import React from 'react';
import {QRCodeSVG} from 'qrcode.react';

const QRCodeDisplay = () => {
  const appUrl = window.location.href; // Get the current URL

  return (
    <div>
      <h3>Scan the QR Code to Join the Game</h3>
      <QRCodeSVG value={appUrl} size={256} />
    </div>
  );
};

export default QRCodeDisplay;
