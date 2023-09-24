import React, { useState, useEffect } from "react";
import "./microphone.scss";
import annyang from "annyang";

function Microphone({ handleSound }) {
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    if (annyang) {
      const commands = {
        "Astana Arena": () => {
          setTranscript("Astana Arena");
        },
        "open Google": () => {
          window.open("https://www.google.com", "_blank");
        },
        "Mega Slikway": () => {
          setTranscript("Mega Slikway");
        },
        // Добавьте здесь другие команды
      };
      annyang.addCommands(commands);
      annyang.addCallback("result", (phrases) => {
        setTranscript(phrases[0]);
      });

      annyang.start();
    }

    // Очистка при размонтировании компонента
    return () => {
      if (annyang) {
        annyang.removeCallback("result");
        annyang.abort();
      }
    };
  }, []);

  return (
    <div className="App">
      <h1 onClick={() => handleSound(transcript)}>Voice Recognition App</h1>
      <p>
        Голосовой текст: <span>{transcript}</span>
      </p>
    </div>
  );
}

export default Microphone;
