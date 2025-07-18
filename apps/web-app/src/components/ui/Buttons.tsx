// components/ui/Buttons.tsx

type BannerButtonProps = {
  text: string;
  variant?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
};

export function BannerButton({
  text,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
}: BannerButtonProps) {
  const variants = {
    primary: "border-[#369392] text-white hover:bg-[#369392]",
    secondary: "border-[#C06522] text-white hover:bg-[#C06522]",
    tertiary: "border-white text-white hover:bg-white hover:text-black",
  };

  const baseStyles =
    "px-8 py-3 font-bold font-sans border-2 rounded-md transition duration-300";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {text}
    </button>
  );
}
