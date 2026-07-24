"use client";

import { useEffect, useState } from "react";

interface TimerProps {
  minutes: number;
  onTimeUp?: () => void;
}

export default function Timer({
  minutes,
  onTimeUp,
}: TimerProps) {
  const totalSeconds = minutes * 60;

  const getInitialTime = () => {
    const startTime = localStorage.getItem("testStartTime");

    if (!startTime) {
      return totalSeconds;
    }

    const elapsed = Math.floor(
      (Date.now() - Number(startTime)) / 1000
    );

    return Math.max(totalSeconds - elapsed, 0);
  };

  const [timeLeft, setTimeLeft] = useState(getInitialTime);

  useEffect(() => {
    const updateTimer = () => {
      const startTime = localStorage.getItem("testStartTime");

      // Wait until MockTestPage has stored the start time.
      if (!startTime) {
        return;
      }

      const elapsed = Math.floor(
        (Date.now() - Number(startTime)) / 1000
      );

      const remaining = Math.max(totalSeconds - elapsed, 0);

      setTimeLeft(remaining);

      if (remaining <= 0) {
        onTimeUp?.();
      }
    };

    // Give MockTestPage one render cycle to create testStartTime.
    const timeout = setTimeout(() => {
      updateTimer();

      const interval = setInterval(updateTimer, 1000);

      return () => clearInterval(interval);
    }, 50);

    return () => clearTimeout(timeout);
  }, [minutes, onTimeUp, totalSeconds]);

  const hours = Math.floor(timeLeft / 3600);
  const mins = Math.floor((timeLeft % 3600) / 60);
  const secs = timeLeft % 60;

  const format = (value: number) =>
    value.toString().padStart(2, "0");

  const danger = timeLeft <= 300;

  return (
    <div
      className={`rounded-lg px-5 py-3 text-center shadow ${
        danger
          ? "bg-red-100 text-red-700"
          : "bg-green-100 text-green-700"
      }`}
    >
      <p className="text-sm font-medium">Time Remaining</p>

      <p className="mt-1 text-3xl font-bold tracking-wider">
        {format(hours)}:{format(mins)}:{format(secs)}
      </p>
    </div>
  );
}