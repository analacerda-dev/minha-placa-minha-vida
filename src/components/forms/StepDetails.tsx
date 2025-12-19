export function StepDetails() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Seus dados</h2>

      <input
        placeholder="Nome"
        className="w-full mb-3 px-4 py-3 rounded bg-zinc-900 border border-zinc-700"
      />

      <input
        placeholder="WhatsApp"
        className="w-full px-4 py-3 rounded bg-zinc-900 border border-zinc-700"
      />
    </div>
  );
}
