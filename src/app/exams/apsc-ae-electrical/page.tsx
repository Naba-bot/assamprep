import { exams } from "@/data/exams";
import SubjectList from "@/components/exams/SubjectList";
import MockTestCard from "@/components/exams/MockTestCard";

const subjects = [
  "Electrical Machines",
  "Power Systems",
  "Network Theory",
  "Measurements",
  "Control Systems",
  "Power Electronics",
  "Electrical Circuits",
];

const exam = exams.find(
  (e) => e.slug === "apsc-ae-electrical"
);

export default function ApscAeElectricalPage() {
  if (!exam) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-3xl font-bold">Exam Not Found</h1>
        <p className="mt-4 text-gray-600">
          The requested exam could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="text-4xl font-bold">{exam.title}</h1>

      <p className="mt-4 max-w-3xl text-gray-600">
        {exam.description}
      </p>

      <SubjectList subjects={subjects} />

      <section className="mt-14">
        <h2 className="text-2xl font-bold">Available Mock Tests</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {exam.mockTests.map((test) => (
            <MockTestCard
              key={test.id}
              title={test.title}
              questions={test.questions}
              duration={test.duration}
              href={`/mock-test/${test.id}/instructions`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}