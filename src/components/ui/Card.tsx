interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function Card({ title, description, icon }: CardProps) {
  return (
    <div
      className="
        relative
        rounded-2xl
        border border-zinc-800
        bg-gradient-to-b from-zinc-900 to-zinc-950
        p-6
        transition-all
        hover:border-zinc-700
        hover:translate-y-[-2px]
      "
    >
      {/* Ícone */}
      <div
        className="
          mb-4
          w-10 h-10
          rounded-lg
          bg-zinc-800
          flex items-center justify-center
          text-green-500
        "
      >
        {icon}
      </div>

      {/* Título */}
      <h4 className="text-lg font-semibold text-white mb-2">
        {title}
      </h4>

      {/* Descrição */}
      <p className="text-sm text-zinc-400 leading-relaxed">
        {description}
      </p>

      {/* Link */}
      <span className="inline-flex items-center gap-1 mt-4 text-sm text-yellow-400 hover:text-yellow-300 transition">
        Ver detalhes →
      </span>
    </div>
  );
}
