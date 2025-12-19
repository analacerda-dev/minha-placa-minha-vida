export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-4">Links Rápidos</h3>
          <ul className="space-y-2 text-zinc-400">
            <li>Início</li>
            <li>Serviços</li>
            <li>Diagnóstico</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contato</h3>
          <p className="text-zinc-400">(11) 99999-9999</p>
          <p className="text-zinc-400">contato@minhaplacaminhavida.com</p>
          <p className="text-zinc-400">São Paulo, SP</p>
        </div>
      </div>
    </footer>
  );
}
