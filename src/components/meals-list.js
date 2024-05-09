"use client";
import MealCard from "@/components/meal-card";
import {getMeals} from "@/lib/data";
import { useEffect, useState } from "react";
import LinkNav from "./link-nav";

export default function MealsList() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function get() {
      setMeals(...meals, await getMeals());
    }
    get()
  }, []);

  return (
    <>
      <h1 className="font-mono font-bold text-7xl text-center ">Bienvenido a recetarium!</h1>
      <h2 className="font-mono font-bold text-3xl text-center mb-3">Aquí puedes encontrar las mejores recetas</h2>
      <LinkNav active={true} href={"/meals/share"}>Comparte tus recetas!</LinkNav>

      <div className="container mx-auto p-8 lg:h-screen flex items-start justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {meals.map((meal) => (
            <MealCard key={meal.id} id = {meal.id} name={meal.name} time={meal.time} description={meal.description}/>
          ))}
        </div>
      </div>
    </>
  );
}