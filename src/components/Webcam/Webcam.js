import React, { useEffect, useRef, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";

async function loadModel() {
  await tf.ready();
  return await cocoSsd.load();
}

function VideoRecognition() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [isDetectionRunning, setIsDetectionRunning] = useState(true);

  useEffect(() => {
    const runObjectDetection = async () => {
      const net = await loadModel();
      console.log("Model loaded");

      const webcam = webcamRef.current;
      const canvas = canvasRef.current;
      canvas.width = webcam.video.width;
      canvas.height = webcam.video.height;

      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      while (isDetectionRunning) {
        const predictions = await net.detect(webcam.video);
        console.log("Predictions:", predictions);

        requestAnimationFrame(() => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          predictions.forEach((prediction) => {
            const [x, y, width, height] = prediction.bbox;
            ctx.beginPath();
            ctx.rect(x, y, width, height);
            ctx.lineWidth = 2;
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
            ctx.stroke();
            ctx.fillText(
              `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
              x,
              y - 5
            );
          });
        });
      }
    };

    runObjectDetection();
  }, [isDetectionRunning]);

  // Добавьте кнопку или другой способ для остановки обнаружения
  const stopDetection = () => {
    setIsDetectionRunning(false);
  };

  return (
    <div style={{ marginBottom: "100px" }}>
      <Webcam
        ref={webcamRef}
        videoConstraints={{
          facingMode: "environment",
        }}
      />
      <canvas ref={canvasRef} />
      <button onClick={stopDetection}>Остановить обнаружение</button>
    </div>
  );
}

export default VideoRecognition;
