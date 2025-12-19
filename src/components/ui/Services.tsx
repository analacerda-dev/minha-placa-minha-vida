import { Card } from "./Card";
import { Smartphone, Laptop, Tv, Cpu } from "lucide-react";

export function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
      <h2 className="text-center text-green-500 mb-2">
        Nossos Serviços
      </h2>

      <h3 className="text-center text-3xl md:text-4xl font-bold mb-6">
        O que <span className="text-green-500">consertamos</span>
      </h3>

      <p className="text-center text-zinc-400 max-w-2xl mx-auto mb-12">
        Somos especialistas em reparo de placas eletrônicas de todos os tipos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          title="Celulares"
          description="Reparo de placas iPhone, Samsung, Xiaomi e outras marcas. Micro-soldagem BGA e substituição de CI."
          icon={<Smartphone size={20} />}
        />

        <Card
          title="Notebooks"
          description="Diagnóstico e reparo de placas-mãe, substituição de chips gráficos e problemas de energia."
          icon={<Laptop size={20} />}
        />

        <Card
          title="TVs & Monitores"
          description="Reparo de placas LED/LCD, problemas de backlight e T-CON."
          icon={<Tv size={20} />}
        />

        <Card
          title="Placas-mãe"
          description="Diagnóstico avançado e reparo de placas-mãe desktop com equipamentos de ponta."
          icon={<Cpu size={20} />}
        />
      </div>
    </section>
  );
}
