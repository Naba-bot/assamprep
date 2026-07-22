import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 text-center">

      <h1 className="text-5xl font-extrabold leading-tight">
        Crack Assam Government Exams
        <span className="block text-green-700">
          with Confidence
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
        Practice full-length mock tests, analyze your
        performance, and prepare smarter for Assam
        Government recruitment exams.
      </p>

      <div className="mt-10 flex justify-center gap-4">

      <Link
  href="/exams"
  className="rounded-lg bg-green-700 px-8 py-4 text-white hover:bg-green-800"
>
  Start Practicing
</Link>

        <Link
          href="/about"
          className="rounded-lg border px-8 py-4 hover:bg-gray-100"
        >
          Learn More
        </Link>

      </div>

    </section>
  );
}