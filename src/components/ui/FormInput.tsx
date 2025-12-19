interface FormInputProps {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}

export function FormInput({
  placeholder,
  value,
  onChange,
  textarea,
}: FormInputProps) {
  const baseClass = `
    w-full
    rounded-xl
    border border-zinc-800
    bg-zinc-900/80
    px-4 py-4
    text-sm text-zinc-100
    placeholder:text-zinc-500
    focus:outline-none
    focus:border-green-500
    transition
  `;

  return textarea ? (
    <textarea
      className={`${baseClass} h-36 resize-none`}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ) : (
    <input
      className={baseClass}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
