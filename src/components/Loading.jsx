export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <div className="pokeball" aria-label="Loading" role="status" />
      <p className="text-slate-600">Catching Pokémon…</p>
    </div>
  );
}
