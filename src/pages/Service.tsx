import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Smartphone, Laptop, Monitor, Cpu, MessageCircle } from "lucide-react";

function ServiceCard({ icon: Icon, title, description }: any) {
  return (
    <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 hover:border-green-500/40 transition">
      <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
        <Icon className="text-green-500" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-zinc-400 mb-4">{description}</p>
      <span className="text-sm text-orange-400 cursor-pointer">
        Ver detalhes →
      </span>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-zinc-950 text-white">
      <Header />

      <Section className="text-center py-24">
        <span className="text-green-500 font-semibold tracking-widest">
          NOSSOS SERVIÇOS
        </span>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-zinc-100">
          Especialistas em reparo de placas
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-zinc-400">
          Utilizamos equipamentos de última geração e técnicas avançadas de
          micro-soldagem para recuperar dispositivos que outros disseram ser
          impossível.
        </p>
      </Section>

      <Section className="pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <ServiceCard
            icon={Smartphone}
            title="Celulares"
            description="Reparo de placas iPhone, Samsung e outras marcas. Micro-soldagem e substituição de CI."
          />

          <ServiceCard
            icon={Laptop}
            title="Notebooks"
            description="Correção de falhas em placas, curto-circuitos, troca de componentes e reparos avançados."
          />

          <ServiceCard
            icon={Monitor}
            title="TVs & Monitores"
            description="Reparo de placas LED/LCD, problemas de backlight e T-CON."
          />

          <ServiceCard
            icon={Cpu}
            title="Placas-mãe"
            description="Diagnóstico avançado e reparo de placas-mãe desktop com equipamentos de ponta."
          />
        </div>
      </Section>

      <Section className="pb-32">
        <div className="max-w-5xl mx-auto rounded-2xl bg-zinc-900/80 border border-zinc-800 p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">
            Não encontrou seu dispositivo?
          </h2>
          <p className="text-zinc-400 mb-6">
            Entre em contato conosco. Avaliamos qualquer tipo de equipamento
            eletrônico e oferecemos diagnóstico gratuito.
          </p>

          <div className="flex justify-center">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 transition text-black px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}