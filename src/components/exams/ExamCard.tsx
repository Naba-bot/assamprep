import Link from "next/link";

type ExamCardProps = {
  title: string;
  description: string;
  questions: number;
  mockTests: number;
  href: string;
};

export default function ExamCard({
  title,
  description,
  questions,
  mockTests,
  href,
}: ExamCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h2 className="text-2xl font-bold">{title}</h2>

      <p className="mt-3 text-gray-600">{description}</p>

      <div className="mt-5 space-y-2 text-sm text-gray-700">
        <p>📘 {questions}+ Questions</p>
        <p>📝 {mockTests} Mock Tests</p>
      </div>

      <Link
        href={href}
        className="mt-6 inline-block rounded-lg bg-green-700 px-5 py-2 text-white transition hover:bg-green-800"
      >
        Start Preparing
      </Link>
    </div>
  );
}