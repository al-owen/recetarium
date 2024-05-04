import Image from "next/image";
import logo from "../icon.png";

export default function CommunityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl text-center font-bold text-orange-800 mb-6">
        Bienvenido a nuestra comunidad
      </h1>
      <p className="text-xl text-center text-red-500 mb-4">
        Recetarium es una página para compartir recetas.
      </p>
      <div className="flex flex-col items-center space-y-4 w-100 h-100">
        <Image 
          src={logo} 
          alt="Comunidad de Recetarium" 
          className="rounded-lg shadow-lg"
        />
        <p className="text-gray-400">
          Únete a nosotros y explora, comparte y descubre nuevas recetas todos los días.
        </p>
      </div>
    </div>
  );
}