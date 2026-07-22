const steps = [
    {
      number: "01",
      title: "Choose Your Exam",
      description:
        "Select the Assam Government exam you're preparing for.",
    },
    {
      number: "02",
      title: "Take Mock Tests",
      description:
        "Attempt exam-pattern mock tests with a real test experience.",
    },
    {
      number: "03",
      title: "Analyze Performance",
      description:
        "View detailed results, accuracy, and question-wise review.",
    },
    {
      number: "04",
      title: "Improve Your Score",
      description:
        "Track your progress and strengthen weak areas over time.",
    },
  ];
  
  export default function HowItWorks() {
    return (
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold">
            How AssamPrep Works
          </h2>
  
          <p className="mt-4 text-center text-gray-600">
            Start preparing in just four simple steps.
          </p>
  
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-xl font-bold text-white">
                  {step.number}
                </div>
  
                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>
  
                <p className="mt-3 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }