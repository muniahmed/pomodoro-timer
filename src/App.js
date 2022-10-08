import React, { useEffect, useState } from "react";
import "./App.css";
import TimerControl from "./components/TimerControl";
import Display from "./components/Display";
import PlayPause from "./components/PlayPause";

const endAudio = new Audio(
  "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a"
);
const startAudio = new Audio(
  "http://scruss.com/wordpress/wp-content/uploads/2017/10/Original-Log-Commercial_The-Ren-and-Stimpy-Show.wav"
);

function App() {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [timeRemaining, setTimeRemaining] = useState(workTime * 60);
  const [timerActive, setTimerActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  function incrementWorkTime() {
    if (!timerActive) {
      let newWorkTime = workTime + 1;
      setWorkTime(newWorkTime);
      if (!isBreak) {
        setTimeRemaining(newWorkTime * 60);
      }
    }
  }

  function decrementWorkTime() {
    if (!timerActive) {
      let newWorkTime = Math.max(workTime - 1, 1);
      setWorkTime(newWorkTime);
      if (!isBreak) {
        setTimeRemaining(newWorkTime * 60);
      }
    }
  }

  function incrementBreakTime() {
    if (!timerActive) {
      let newBreakkTime = breakTime + 1;
      setBreakTime(newBreakkTime);
      if (isBreak) {
        setTimeRemaining(newBreakkTime * 60);
      }
    }
  }

  function decrementBreakTime() {
    if (!timerActive) {
      let newBreakkTime = Math.max(breakTime - 1, 1);
      setBreakTime(newBreakkTime);
      if (isBreak) {
        setTimeRemaining(newBreakkTime * 60);
      }
    }
  }

  function toggleTimer() {
    setTimerActive(!timerActive);
  }

  useEffect(() => {
    let interval = null;

    if (timerActive) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (timeRemaining === 0) {
            if (!isBreak) {
              endAudio.play();
              setIsBreak(true);
              return breakTime * 60;
            } else {
              startAudio.play();
              setIsBreak(false);
              return workTime * 60;
            }
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    } else if (!timerActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeRemaining, isBreak, breakTime, workTime]);

  function reset() {
    setWorkTime(25);
    setBreakTime(5);
    setTimeRemaining(25 * 60);
    setTimerActive(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pomodoro Timer</h1>
        <div id="Controls">
          <TimerControl
            label="Work Length"
            time={workTime}
            increment={incrementWorkTime}
            decrement={decrementWorkTime}
          ></TimerControl>
          <TimerControl
            label="Break Length"
            time={breakTime}
            increment={incrementBreakTime}
            decrement={decrementBreakTime}
          ></TimerControl>
        </div>
        <Display isBreak={isBreak} timeRemaining={timeRemaining}></Display>
        <PlayPause
          timerActive={timerActive}
          toggleTimer={toggleTimer}
          reset={reset}
        ></PlayPause>
      </header>
    </div>
  );
}

export default App;
