import Link from "next/link";

type MockTestCardProps = {
  title: string;
  questions: number;
  duration: number;
  href: string;
};

export default function MockTestCard({
  title,
  questions,
  duration,
  href,
}: MockTestCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-2 text-gray-600">
        {questions} Questions • {duration} Minutes
      </p>

      <Link
        href={href}
        className="mt-5 inline-block rounded-lg bg-green-700 px-4 py-2 text-white hover:bg-green-800"
      >
        Start Test
      </Link>
    </div>
  );
}