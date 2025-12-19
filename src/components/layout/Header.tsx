import logo from "@/assets/logo.png";
import { Home, Wrench, FlaskConical, MessageCircle } from "lucide-react";

export function Header() {
  return (
    <header className="w-full border-b border-zinc-800 bg-zinc-950">
      <div className="grid grid-cols-3 items-center h-20 px-4 md:px-8">
        
        {/* ESQUERDA – LOGO */}
        <div className="flex items-center gap-3 justify-start">
          <img
            src={logo}
            alt="Minha Placa Minha Vida"
            className="h-12 w-auto object-contain"
          />
          <h1 className="text-lg md:text-2xl font-bold text-green-400 leading-none whitespace-nowrap">
            Minha Placa Minha Vida
          </h1>
        </div>

        {/* CENTRO – MENU */}
        <nav className="hidden md:flex justify-center gap-10 text-zinc-300 text-sm">
          <a
            href="#"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <Home size={18} />
            Início
          </a>

          <a
            href="#"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <Wrench size={18} />
            Serviços
          </a>

          <a
            href="#"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FlaskConical size={18} />
            Diagnóstico
          </a>
        </nav>

        {/* DIREITA – CTA */}
        <div className="flex justify-end">
          <a
            href="#"
            className="bg-green-500 hover:bg-green-400 transition text-black px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

      </div>
    </header>
  );
}
