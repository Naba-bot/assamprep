import Link from "next/link";
import { navigation } from "@/constants/navigation";

export default function NavLinks() {
  return (
    <nav className="flex items-center gap-6">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-gray-700 hover:text-green-700 transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}