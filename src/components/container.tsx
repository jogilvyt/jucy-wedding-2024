interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  width: "narrow" | "medium" | "wide";
}

export function Container({ width, children, ...props }: ContainerProps) {
  const widthClass =
    width === "narrow"
      ? "max-w-[470px]"
      : width === "medium"
      ? "max-w-[870px]"
      : "max-w-[1300px]";

  return (
    <div className={`mx-auto px-8 ${widthClass}`} {...props}>
      {children}
    </div>
  );
}
