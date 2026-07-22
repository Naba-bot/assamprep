import ExamCard from "@/components/exams/ExamCard";

const exams = [
  {
    title: "APSC AE Electrical",
    description:
      "Mock tests and previous year questions for APSC Assistant Engineer (Electrical).",
    questions: 500,
    mockTests: 20,
    href: "/exams/apsc-ae-electrical",
  },
  {
    title: "APSC JE Electrical",
    description:
      "Prepare for the Junior Engineer Electrical examination.",
    questions: 400,
    mockTests: 15,
    href: "/exams/apsc-je-electrical",
  },
  {
    title: "ADRE Grade III",
    description:
      "Practice for Assam Direct Recruitment Grade III examination.",
    questions: 600,
    mockTests: 25,
    href: "/exams/adre-grade-3",
  },
  {
    title: "ADRE Grade IV",
    description:
      "Prepare for Assam Direct Recruitment Grade IV examination.",
    questions: 300,
    mockTests: 12,
    href: "/exams/adre-grade-4",
  },
];

export default function ExamsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="text-4xl font-bold">Browse Exams</h1>

      <p className="mt-3 text-gray-600">
        Choose your exam and start practicing with high-quality mock tests.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {exams.map((exam) => (
          <ExamCard key={exam.title} {...exam} />
        ))}
      </div>
    </div>
  );
}