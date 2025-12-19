import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="
        bg-yellow-500
        hover:bg-yellow-400
        text-black
        font-semibold
        px-6
        py-3
        rounded-full
        transition
      "
    >
      {children}
    </button>
  );
}
