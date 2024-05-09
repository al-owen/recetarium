import MealForm from "@/components/meals-form";
export default function Share() {
  return (
    <main className="flex min-h-screen w-100 flex-col items-center justify-between p-24">
      <h1 className="font-mono font-bold text-7xl text-center ">Comparte tu receta!</h1>
      <MealForm />
    </main>
  );
}