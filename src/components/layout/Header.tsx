import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Home, Wrench, FlaskConical, MessageCircle } from "lucide-react";

export function Header() {
  return (
    <header className="w-full border-b border-zinc-800 bg-zinc-950">
      <div className="grid grid-cols-3 items-center h-20 px-4 md:px-8">

        <div className="flex items-center gap-3 justify-start">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Minha Placa Minha Vida"
              className="h-12 w-auto object-contain"
            />
            <h1 className="text-lg md:text-2xl font-bold text-green-400 leading-none whitespace-nowrap">
              Minha Placa Minha Vida
            </h1>
          </Link>
        </div>

        <nav className="hidden md:flex justify-center gap-10 text-zinc-300 text-sm">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <Home size={18} />
            Início
          </Link>

          <Link
            to="/servicos"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <Wrench size={18} />
            Serviços
          </Link>

          <Link
            to="/diagnostico"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FlaskConical size={18} />
            Diagnóstico
          </Link>
        </nav>

        <div className="flex justify-end">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
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