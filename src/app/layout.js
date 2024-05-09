import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Recetarium",
  description: "Página de recetas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-800 opacity-80 bg-fixed h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
