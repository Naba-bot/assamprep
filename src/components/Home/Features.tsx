const features = [
  {
    title: "Real Exam Pattern",
    description: "Mock tests designed to match actual exam patterns.",
  },
  {
    title: "Instant Results",
    description: "Get your score and detailed analysis immediately.",
  },
  {
    title: "Performance Tracking",
    description: "Monitor your progress across every attempt.",
  },
  {
    title: "Detailed Review",
    description: "Review every question and learn from mistakes.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <h2 className="mb-12 text-center text-4xl font-bold">
        Why Choose AssamPrep?
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >
            <h3 className="mb-3 text-xl font-semibold">
              {feature.title}
            </h3>

            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}