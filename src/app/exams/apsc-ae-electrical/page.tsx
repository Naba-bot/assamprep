import Link from "next/link";
import { apscAEMockTests } from "@/constants/mockTests";

export default function APSCAEElectricalPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="rounded-2xl bg-green-700 p-8 text-white">
        <span className="rounded-full bg-white/20 px-4 py-1 text-sm">
          APSC
        </span>

        <h1 className="mt-4 text-4xl font-bold">
          Assistant Engineer (Electrical)
        </h1>

        <p className="mt-3 text-lg text-green-100">
          Practice full-length mock tests based on the latest syllabus and exam
          pattern.
        </p>
      </div>

      <section className="mt-10 grid gap-6 md:grid-cols-4">
        <div className="rounded-xl border p-6 text-center">
          <h3 className="text-3xl font-bold">3</h3>
          <p className="text-gray-600">Mock Tests</p>
        </div>

        <div className="rounded-xl border p-6 text-center">
          <h3 className="text-3xl font-bold">100</h3>
          <p className="text-gray-600">Questions</p>
        </div>

        <div className="rounded-xl border p-6 text-center">
          <h3 className="text-3xl font-bold">120</h3>
          <p className="text-gray-600">Minutes</p>
        </div>

        <div className="rounded-xl border p-6 text-center">
          <h3 className="text-3xl font-bold">Latest</h3>
          <p className="text-gray-600">Exam Pattern</p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-3xl font-bold">Available Mock Tests</h2>

        <div className="mt-8 space-y-5">
          {apscAEMockTests.map((test) => (
            <div
              key={test.id}
              className="flex items-center justify-between rounded-xl border p-6"
            >
              <div>
                <h3 className="text-xl font-semibold">{test.title}</h3>

                <p className="mt-2 text-gray-600">
                  {test.questions} Questions • {test.duration} Minutes •{" "}
                  {test.difficulty}
                </p>
              </div>

              <Link
  href={`/mock-test/${test.id}/instructions`}
  className="rounded-lg bg-green-700 px-6 py-3 text-white hover:bg-green-800"
>
  Start Test
</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}