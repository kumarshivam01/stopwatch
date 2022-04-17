import React, { useEffect, useState } from "react";
import "../Timer.css";
const Timer = () => {
  const [Time, setTime] = useState(0);
  const [Timeron, setTimeon] = useState(false);
  useEffect(() => {
    let interval = null;
    if (Timeron) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [Timeron]);
  return (
    <div className="main">
      <div className="timer">
        <span>{("0" + Math.floor((Time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((Time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((Time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="control">
        <button
          className="start"
          onClick={() => {
            setTimeon(true);
          }}
        >
          Start
        </button>
        <button
          className="stop"
          onClick={() => {
            setTimeon(false);
          }}
        >
          Stop
        </button>
        <button
          className="resume"
          onClick={() => {
            setTimeon(true);
          }}
        >
          Resume
        </button>
        <button
          className="reset"
          onClick={() => {
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default Timer;
