"use client";
// components/MealForm.js
import { useState } from 'react';
import { createMeal } from '@/lib/data';
import { useRouter } from 'next/navigation';


export default function MealForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    ingredients: '',
    time: 0
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: (e.target.name === 'time' ? parseInt(value) : value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await createMeal(formData);
    router.push('/meals', { scroll: false })
  };

  return (
    <div className="bg-orange-400 p-20 w-5/6 min-h-screen ">
      <div className="bg-white p-10 h-3/4 md:w-10 lg:w-5/6 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-5">
            <label htmlFor="name" className="inline-block w-20 mr-6 text-right 
                                  font-bold text-gray-600">Nombre</label>
            <input onChange={handleChange} type="text" id="name" name="name" placeholder="Name"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                        text-gray-600 placeholder-gray-400
                        outline-none"/>
          </div>
          <div className="flex items-center mb-5">
            <label htmlFor="description" className="inline-block w-20 mr-6 text-right 
                                  font-bold text-gray-600">Descripción</label>
            <textarea onChange={handleChange} type="text" id="description" name="description" placeholder="Descripción" rows={4}
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                        text-gray-600 placeholder-gray-400
                        outline-none"/>
          </div>
          <div className="flex items-center mb-5">
            <label htmlFor="ingredients" className="inline-block w-20 mr-6 text-right 
                                  font-bold text-gray-600">Ingredientes</label>
            <textarea onChange={handleChange} type="text" id="ingredients" name="ingredients" placeholder="Ingredientes" rows={4}
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                        text-gray-600 placeholder-gray-400
                        outline-none"/>
          </div>

          <div className="flex items-center mb-5">
            <label htmlFor="time" className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Tiempo de preparación</label>
            <input onChange={handleChange} type="number" id="time" name="time" placeholder='1' min={1}
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
          </div>

          <div className="flex items-center mb-5">
            <label htmlFor="image" className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Tiempo de preparación</label>
            <input onChange={handleChange} type="file" id="image" name="image"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
          </div>

          <div className="text-right">
            <button className="py-3 px-8 bg-green-400 text-white font-bold">Compartir</button>
          </div>

        </form>
      </div>
    </div>
  );
}
