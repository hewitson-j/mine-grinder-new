import { useEffect, useState } from "react";

export default function Countdown() {
  const [isCounting, setIsCounting] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (isCounting) {
      const countdown = setInterval(() => {
        if (seconds === 0 && minutes === 0) {
          clearInterval(countdown);
          setIsCounting(false);
          setIsFinished(true);
        } else {
          if (seconds === 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            setSeconds(seconds - 1);
          }
        }
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [isCounting, minutes, seconds]);

  const minutesText =
    minutes < 10 ? `0${minutes.toString()}` : minutes.toString();
  const secondsText =
    seconds < 10 ? `0${seconds.toString()}` : seconds.toString();

  return (
    <div className="countdown">
      {!isFinished ? <div>Time to Lights Out:</div> : <div>Time's up...</div>}
      <div className="countdown-time">
        {minutesText}:{secondsText}
      </div>
      <button
        onClick={() => {
          setIsCounting(!isCounting);
        }}
      >
        {isCounting ? "Stop Countdown" : "Resume Countdown"}
      </button>
    </div>
  );
}
