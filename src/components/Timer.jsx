import { useEffect, useState } from "react";

export default function Timer({ onExpire, questionIndex }) {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    setTimeLeft(60);
  }, [questionIndex]);

  useEffect(() => {
    if (timeLeft === 0) {
      onExpire();
      return;
    }
    const interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft, onExpire]);

  const pct = (timeLeft / 60) * 100;
  const color = timeLeft > 30 ? "#4ade80" : timeLeft > 10 ? "#facc15" : "#ef4444";

  return (
    <div className="timer-wrapper">
      <div className="timer-bar-bg">
        <div
          className="timer-bar-fill"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <span className="timer-text" style={{ color }}>
        {timeLeft}s
      </span>
    </div>
  );
}