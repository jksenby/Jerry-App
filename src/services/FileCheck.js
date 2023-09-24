import React, { Component } from "react";

const fileCheck = () => {
  return fetch("http://localhost:3000/")
    .then((response) => response.json())
    .then((data) => {
      return data.exists;
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
};

export default fileCheck;
