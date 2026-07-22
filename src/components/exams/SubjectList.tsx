type SubjectListProps = {
    subjects: string[];
  };
  
  export default function SubjectList({ subjects }: SubjectListProps) {
    return (
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Subjects Covered</h2>
  
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <div
              key={subject}
              className="rounded-lg border bg-white p-4 shadow-sm"
            >
              {subject}
            </div>
          ))}
        </div>
      </section>
    );
  }