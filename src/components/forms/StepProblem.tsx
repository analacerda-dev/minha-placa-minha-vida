export function StepProblem() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Descreva o problema</h2>

      <textarea
        rows={4}
        className="w-full px-4 py-3 rounded bg-zinc-900 border border-zinc-700"
        placeholder="Explique o problema do dispositivo"
      />
    </div>
  );
}
