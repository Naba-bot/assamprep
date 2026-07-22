import Link from "next/link";
import { exams } from "@/constants/exams";

export default function PopularExams() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Available Mock Tests
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Start preparing with our currently supported examinations.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {exams.map((exam) => (
            <div
              key={exam.id}
              className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">📘</div>

              <h3 className="mt-5 text-2xl font-bold">
                {exam.name}
              </h3>

              <p className="mt-2 text-gray-600">
                {exam.subtitle}
              </p>

              <Link
                href={`/exams/apsc-ae-electrical`}
                className="mt-6 inline-block rounded-lg bg-green-700 px-5 py-3 text-white hover:bg-green-800"
              >
                View Mock Tests
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}