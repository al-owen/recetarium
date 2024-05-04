"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "../components/image-slider";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-100 flex h-screen">
        <div className="w-80 relative">
          <Slider />
        </div>
        <div className="w-50 flex flex-col items-right text-right p-10">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
            Recetarium
          </h1>
          <p className="text-xl mt-5 mb-9">
            El sitio donde puedes encontrar las mejores recetas
          </p>
          <div className="flex-col items-center">
            <p className="text-xl flex w-50">Bon profit!</p>
            <button>
              <Link href="/meals" className="text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-red-600 to-orange-800 border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out">
                Explorar Recetas
              </Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
