import { Section } from "./Section";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Empresário",
    text: "Meu MacBook Pro foi dado como perdido por duas assistências. Aqui, em 3 dias, estava funcionando perfeitamente. Serviço excepcional!",
  },
  {
    name: "Ana Rodrigues",
    role: "Designer",
    text: "iPhone com problema de placa, não ligava mais. Recuperaram todos os meus arquivos e o celular está como novo. Muito profissionais!",
  },
  {
    name: "Pedro Santos",
    role: "Gamer",
    text: "PS5 com problema de HDMI. Consertaram rapidamente e com garantia. Preço justo e atendimento top no WhatsApp.",
  },
];

export function Testimonials() {
  return (
    <Section className="py-24">
      <h2 className="text-center text-green-500 mb-2">
        Depoimentos
      </h2>

      <h3 className="text-center text-3xl md:text-4xl font-bold mb-12">
        O que nossos{" "}
        <span className="text-green-500">clientes dizem</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="
              relative
              rounded-2xl
              bg-gradient-to-b from-zinc-900 to-zinc-950
              border border-zinc-800
              p-6
            "
          >
            {/* Aspas */}
            <span className="absolute top-4 right-4 text-green-500 text-4xl opacity-20">
              “
            </span>

            {/* Estrelas */}
            <div className="flex gap-1 mb-4 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            {/* Texto */}
            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              "{item.text}"
            </p>

            {/* Autor */}
            <div>
              <p className="font-semibold text-white">
                {item.name}
              </p>
              <p className="text-xs text-zinc-400">
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
