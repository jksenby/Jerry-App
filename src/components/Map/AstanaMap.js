import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.scss";
import BusService from "../../services/BusService";

const AstanaMap = () => {
  const [position, setPosition] = useState([51.1605, 71.4704]);
  const { getResource } = BusService();

  useEffect(() => {
    getResource().then((res) => console.log(res));
    // Проверяем поддержку геолокации
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (userPosition) {
          const { latitude, longitude } = userPosition.coords;
          setPosition([latitude, longitude]); // Обновляем координаты при получении местоположения
        },
        function (error) {
          console.log("Ошибка при получении местоположения: " + error.message);
        }
      );
    } else {
      console.log("Геолокация не поддерживается в вашем браузере.");
    }
  }, []); // Пустой массив зависимостей означает, что useEffect вызовется только после монтирования компонента

  const centerMapToUserLocation = () => {
    // Центрируем карту на текущем местоположении пользователя
    navigator.geolocation.getCurrentPosition(
      function (userPosition) {
        const { latitude, longitude } = userPosition.coords;
        setPosition([latitude, longitude]); // Обновляем координаты
      },
      function (error) {
        console.log("Ошибка при получении местоположения: " + error.message);
      }
    );
  };

  return (
    <div className="map-container">
      <button onClick={centerMapToUserLocation}>Center on My Location</button>
      <MapContainer
        center={position}
        zoom={13}
        style={{ width: "100%", height: "1080px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Your Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default AstanaMap;
