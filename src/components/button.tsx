interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-dark-green text-beige rounded-md py-2 px-6 md:py-3 md:px-7 font-medium hover:bg-middle-green transition-all duration-300 text-lg md:text-xl disabled:opacity-60 disabled:hover:bg-lilac disabled:cursor-wait ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
