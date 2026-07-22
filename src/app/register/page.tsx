import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="mx-auto flex min-h-[80vh] max-w-md items-center px-6">
      <div className="w-full rounded-2xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-center">
          Create Account
        </h1>

        <form className="mt-8 space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border p-3"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border p-3"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-green-700 py-3 text-white hover:bg-green-800"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-green-700"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}