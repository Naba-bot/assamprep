interface StatsCardProps {
    title: string;
    value: string | number;
    bgColor?: string;
  }
  
  export default function StatsCard({
    title,
    value,
    bgColor = "bg-white",
  }: StatsCardProps) {
    return (
      <div className={`${bgColor} rounded-xl p-6 shadow`}>
        <p className="text-gray-600 text-sm">{title}</p>
  
        <h2 className="mt-3 text-4xl font-bold">
          {value}
        </h2>
      </div>
    );
  }