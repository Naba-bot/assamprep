import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center lg:flex-row lg:text-left">
        <div className="flex-1">
          <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
            Assam Government Exam Preparation
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            Crack Assam Government Exams with Confidence
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600">
            Practice realistic mock tests, analyze your performance, track your
            progress, and prepare smarter for APSC, ADRE, Assam Police, TET,
            Grade III, Grade IV and more.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/mock-tests"
              className="rounded-lg bg-green-700 px-6 py-3 font-medium text-white hover:bg-green-800"
            >
              Start Practicing
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-green-700 px-6 py-3 font-medium text-green-700 hover:bg-green-50"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-1 justify-center lg:mt-0">
          <div className="flex h-80 w-80 items-center justify-center rounded-3xl border-2 border-dashed border-green-300 bg-green-100 text-center text-gray-500">
            Illustration Coming Soon
          </div>
        </div>
      </div>
    </section>
  );
}