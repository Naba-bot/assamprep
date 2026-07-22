"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Mail, Lock } from "lucide-react";

import AuthCard from "@/components/auth/AuthCard";
import { signInWithGoogle } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect") || "/";

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      router.push(redirect);
    } catch (error) {
      console.error(error);
      alert("Google Sign-In failed.");
    }
  };

  return (
    <AuthCard
      title="Login"
      subtitle="Login to continue your preparation"
    >
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="mb-6 flex w-full items-center justify-center gap-3 rounded-lg border py-3 font-medium transition hover:bg-gray-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="20"
          height="20"
        >
          <path
            fill="#FFC107"
            d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.4-.4-3.5z"
          />
          <path
            fill="#FF3D00"
            d="M6.3 14.7l6.6 4.8C14.7 15.4 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.4 4.3-17.7 10.7z"
          />
          <path
            fill="#4CAF50"
            d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.2C29.3 35.1 26.8 36 24 36c-5.2 0-9.6-3.3-11.2-8l-6.6 5.1C9.5 39.6 16.2 44 24 44z"
          />
          <path
            fill="#1976D2"
            d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.4 5.5-6.7 6.8l6.3 5.2C38.5 36.4 44 31 44 24c0-1.3-.1-2.4-.4-3.5z"
          />
          <path fill="none" d="M0 0h48v48H0z" />
        </svg>

        Continue with Google
      </button>

      <div className="mb-6 flex items-center">
        <div className="h-px flex-1 bg-gray-300"></div>
        <span className="px-4 text-sm text-gray-500">OR</span>
        <div className="h-px flex-1 bg-gray-300"></div>
      </div>

      <form className="space-y-5">
        <div className="relative">
          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border py-3 pl-11 pr-4 outline-none focus:border-green-700"
          />
        </div>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border py-3 pl-11 pr-4 outline-none focus:border-green-700"
          />
        </div>

        <div className="text-right">
          <Link
            href="/forgot-password"
            className="text-sm text-green-700 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800"
        >
          Login
        </button>
      </form>

      <p className="mt-8 text-center text-gray-600">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-green-700 hover:underline"
        >
          Create Account
        </Link>
      </p>
    </AuthCard>
  );
}