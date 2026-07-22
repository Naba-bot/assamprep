import Link from "next/link";

const exams = [
  {
    title: "APSC AE Electrical",
    description: "Assistant Engineer (Electrical)",
    href: "/exams/apsc-ae-electrical",
    available: true,
  },
  {
    title: "APSC JE Electrical",
    description: "Junior Engineer (Electrical)",
    href: "#",
    available: false,
  },
  {
    title: "ADRE Grade III",
    description: "Assam Direct Recruitment",
    href: "#",
    available: false,
  },
  {
    title: "ADRE Grade IV",
    description: "Assam Direct Recruitment",
    href: "#",
    available: false,
  },
];

export default function SupportedExams() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Supported Exams
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {exams.map((exam) => (
          <div
            key={exam.title}
            className="rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold">{exam.title}</h3>

            <p className="mt-2 text-gray-600">
              {exam.description}
            </p>

            {exam.available ? (
              <Link
                href={exam.href}
                className="mt-6 inline-block rounded-lg bg-green-700 px-4 py-2 text-white transition hover:bg-green-800"
              >
                Explore
              </Link>
            ) : (
              <button
                disabled
                className="mt-6 inline-block cursor-not-allowed rounded-lg bg-gray-400 px-4 py-2 text-white opacity-70"
              >
                Coming Soon
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}