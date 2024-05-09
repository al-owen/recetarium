"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkNav({ href, children, active}) {
  const path = usePathname();
  
  return (
    <Link
      href={href}
      className={`block transition-colors hover:text-gray-600 duration-300" px-4 py-3 text-grey-200 rounded ${path.startsWith(href) || active ? ' bg-gradient-to-r from-red-500 to-orange-500 text-yellow-200' : 'bg-slate-900 text-white'}`}
    >
      {children}
    </Link>
  );
}