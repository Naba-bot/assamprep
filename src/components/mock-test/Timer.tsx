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
  const [timeLeft, setTimeLeft] = useState(minutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

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
      <p className="text-sm font-medium">
        Time Remaining
      </p>

      <p className="mt-1 text-3xl font-bold tracking-wider">
        {format(hours)}:{format(mins)}:{format(secs)}
      </p>
    </div>
  );
}