import QRCodeGenerator from "../FindQr/FindQr";
import Microphone from "../Microphone/Microphone";
import { useState } from "react";

const QRpage = () => {
  const [sound, setSound] = useState("Astana Arena");
  const handleSound = (value) => {
    setSound(value);
  };
  return (
    <>
      <QRCodeGenerator sound={sound} />
      <Microphone handleSound={handleSound} />
    </>
  );
};
export default QRpage;
