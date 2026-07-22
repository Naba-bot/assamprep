import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-2xl font-bold text-green-700 hover:text-green-800 transition-colors"
    >
      AssamPrep
    </Link>
  );
}