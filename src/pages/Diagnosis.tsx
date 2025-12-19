import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { FormInput } from "@/components/ui/FormInput";
import { Button } from "@/components/ui/Button";

export default function DiagnosticoPage() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit() {
    const text = `Diagnóstico Online%0A%0ANome: ${name}%0AWhatsApp: ${whatsapp}%0AProblema: ${description}`;
    window.open(`https://wa.me/5511999999999?text=${text}`, "_blank");
  }

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      <Header />

      <Section className="text-center py-24">
        <span className="text-green-500 font-semibold tracking-widest">
          DIAGNÓSTICO ONLINE
        </span>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold">
          Diagnóstico Gratuito
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-zinc-400">
          Preencha as informações abaixo para receber uma avaliação inicial do
          seu dispositivo.
        </p>
      </Section>

      <Section className="pb-32">
        <div className="max-w-2xl mx-auto rounded-2xl bg-zinc-900/80 border border-zinc-800 p-8 space-y-4">
          <FormInput
            placeholder="Seu nome completo"
            value={name}
            onChange={setName}
          />

          <FormInput
            placeholder="Seu WhatsApp"
            value={whatsapp}
            onChange={setWhatsapp}
          />

          <FormInput
            placeholder="Descreva o problema do equipamento"
            value={description}
            onChange={setDescription}
            textarea
          />

          <Button
            onClick={handleSubmit}
            className="w-full bg-green-500 hover:bg-green-600 text-zinc-950 mt-4"
          >
            Enviar para diagnóstico
          </Button>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
