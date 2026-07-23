"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Bar,
} from "recharts";

interface HistoryItem {
  percentage: number;
  accuracy: number;
  timeTaken: number;
}

interface DashboardChartProps {
  history: HistoryItem[];
  type: "performance" | "accuracy" | "time";
}

export default function DashboardChart({
  history,
  type,
}: DashboardChartProps) {
  const chartData = history
    .slice(-10)
    .map((item, index) => ({
      test: `T${index + 1}`,
      percentage: item.percentage,
      accuracy: item.accuracy,
      time: Math.round(item.timeTaken / 60), // minutes
    }));

  const title =
    type === "performance"
      ? "Performance Trend"
      : type === "accuracy"
      ? "Accuracy Trend"
      : "Time Per Test";

  return (
    <div className="rounded-xl border bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-semibold">{title}</h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          {type === "time" ? (
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="test" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="time" radius={[5, 5, 0, 0]} />
            </BarChart>
          ) : (
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="test" />
              <YAxis domain={[0, 100]} />
              <Tooltip />

              <Line
                type="monotone"
                dataKey={
                  type === "performance"
                    ? "percentage"
                    : "accuracy"
                }
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}