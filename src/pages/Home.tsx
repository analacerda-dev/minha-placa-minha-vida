import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Services } from "@/components/ui/Services";
import { Testimonials } from "@/components/ui/Testimonials";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="bg-zinc-950 text-white">
      <Header />

      <Section className="text-center py-24">
        <h1 className="text-5xl font-bold">
          Seu dispositivo{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent">
            tem conserto
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-zinc-400">
          Especialistas em{" "}
          <span className="text-green-500">micro-soldagem</span>, reparo de placas e
          <span className="text-green-500"> diagnósticos avançados</span>.
          Recuperamos o que outros disseram ser impossível.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button>Garantia 90 dias</Button>
          <Button>+5.000 reparos</Button>
          <Button>Respostas rápidas</Button>
        </div>
      </Section>

      <Services />

      <Testimonials />

      <Footer />
    </div>
  );
}
