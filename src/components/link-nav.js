"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkNav({ href, children }) {
  const path = usePathname();
  const selectedPath = "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
  return (
    <Link
      href={href}
      className={`block transition-colors hover:text-gray-600 duration-300" px-4 py-3 text-grey-200 rounded ${path.startsWith(href) ? ' bg-gradient-to-r from-red-500 to-orange-500 text-yellow-200' : 'bg-slate-900 text-white'}`}
    >
      {children}
    </Link>
  );
}