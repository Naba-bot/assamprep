export default function ForgotPasswordPage() {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md rounded-xl border bg-white p-8 shadow">
          <h1 className="text-3xl font-bold">
            Forgot Password
          </h1>
  
          <p className="mt-3 text-gray-600">
            Enter your email and we'll send you a password reset link.
          </p>
  
          <input
            type="email"
            placeholder="Email"
            className="mt-6 w-full rounded-lg border p-3"
          />
  
          <button
            className="mt-5 w-full rounded-lg bg-green-700 py-3 text-white"
          >
            Send Reset Link
          </button>
        </div>
      </main>
    );
  }