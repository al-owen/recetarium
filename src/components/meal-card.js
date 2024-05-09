import Image from "next/image";
import logo from "@/app/icon.png";
import Link from "next/link";

export default function MealCard(params) {
  let description = params.description;
  if (!params.preview && description.length > 100) {
    description = params.description.substring(0, 100) + '...';
  }
  
  return (
    <Link href={`/meals/${params.id}`} className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
      <Image src={logo.src} alt="" width={500} height={500}/>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
        <h1 className="text-2xl font-semibold">{params.name}</h1>
        <p className="text-sm">{`${params.time}''`}</p>
        <p className="mt-2">{description}</p>

      </div>
    </Link>
  )
}