const stats = [
    {
      value: "500+",
      label: "Previous Year Questions",
    },
    {
      value: "50+",
      label: "Mock Tests",
    },
    {
      value: "4+",
      label: "Assam Govt. Exams",
    },
    {
      value: "100%",
      label: "Instant Results",
    },
  ];
  
  export default function Stats() {
    return (
      <section className="bg-green-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <h3 className="text-4xl font-bold text-green-700">
                  {stat.value}
                </h3>
                <p className="mt-2 text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }