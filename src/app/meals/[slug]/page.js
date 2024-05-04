export default function Meals({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-mono font-bold text-7xl text-center">Hello {params.slug}!</h1>
    </main>
  );
}