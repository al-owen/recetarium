import Image from 'next/image'
import { useState, useEffect } from 'react'

// Tus imágenes importadas
import Abominacion from '../assets/images/abominacion.jpg'
import Arroz from '../assets/images/arroz-toppings.jpg'
import Berenjenas from '../assets/images/berenjenas-rellenas.jpg'
import Ensalada from '../assets/images/ensalada.jpg'
import Paella from '../assets/images/paella.jpg'
import Pasta from '../assets/images/pasta.jpg'
import Sushi from '../assets/images/sushi.jpg'

const images = [Abominacion, Arroz, Berenjenas, Ensalada, Paella, Pasta, Sushi]

export default function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoaded(false); // Inicia el fade-out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setLoaded(true); // Inicia el fade-in
      }, 800); // Espera 800 milisegundos antes de cambiar la imagen
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-60 w-full overflow-hidden">
      <div className={`absolute inset-0 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Image priority src={images[currentImageIndex]} alt="Imagen de prueba" onLoad={() => setLoaded(true)} />
      </div>
    </div>
  );
}
