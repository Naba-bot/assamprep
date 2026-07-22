const features = [
    {
      title: "Real Exam Mock Tests",
      description:
        "Practice with exam-like questions designed for Assam Government recruitment exams.",
    },
    {
      title: "Performance Analytics",
      description:
        "Track your strengths, weaknesses, accuracy, and improvement over time.",
    },
    {
      title: "Detailed Solutions",
      description:
        "Understand every answer with clear explanations and improve your concepts.",
    },
    {
      title: "Anytime, Anywhere",
      description:
        "Access your mock tests from desktop, laptop, tablet, or mobile.",
    },
  ];
  
  export default function Features() {
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose AssamPrep?
            </h2>
  
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to prepare efficiently for Assam Government
              examinations.
            </p>
          </div>
  
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl">
                  📘
                </div>
  
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
  
                <p className="mt-3 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }