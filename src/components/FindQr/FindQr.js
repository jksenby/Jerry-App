import React, { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import ListGroup from "react-bootstrap/ListGroup";

function QRCodeGenerator({ sound }) {
  const [link, setLink] = useState(
    "https://2gis.kz/astana/geo/70000001018082455"
  );
  useEffect(() => {
    switch (sound) {
      case "Expo":
        setLink("https://2gis.kz/astana/geo/9570836402930131");
        break;
      case "Promenade":
        setLink("https://2gis.kz/astana/geo/9570836402930141");
        break;
      case "Mega silk way":
        setLink("https://2gis.kz/astana/geo/70000001026995330");
        break;
      case "Astana Arena":
        setLink("https://2gis.kz/astana/geo/70000001018082455");
        break;
      default:
        break;
    }
  }, [sound]);
  return (
    <div>
      <ListGroup vertical>
        <ListGroup.Item
          action
          variant="info"
          onClick={() =>
            setLink("https://2gis.kz/astana/geo/70000001018082455")
          }
        >
          Astana Arena
        </ListGroup.Item>
        <ListGroup.Item
          action
          variant="info"
          onClick={() => setLink("https://2gis.kz/astana/geo/9570836402930131")}
        >
          Expo
        </ListGroup.Item>
        <ListGroup.Item
          action
          variant="info"
          onClick={() => setLink("https://2gis.kz/astana/geo/9570836402930141")}
        >
          Naberezhka
        </ListGroup.Item>
        <ListGroup.Item
          action
          variant="info"
          onClick={() =>
            setLink("https://2gis.kz/astana/geo/70000001026995330")
          }
        >
          Mega Silkway
        </ListGroup.Item>
      </ListGroup>
      <QRCode value={link} />
    </div>
  );
}

export default QRCodeGenerator;
