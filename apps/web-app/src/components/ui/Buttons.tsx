// components/ui/Buttons.tsx
import { cva, type VariantProps } from "class-variance-authority";

const bannerButton = cva(
  "px-8 py-3 font-bold font-sans border-2 rounded-md transition duration-300",
  {
    variants: {
      variant: {
        primary:
          "border-[#369392] text-white hover:text-black hover:bg-[#369392]",
        secondary:
          "border-[#C06522] text-white hover:text-black hover:bg-[#C06522]",
        tertiary: "border-white text-white hover:bg-white hover:text-black",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

type BannerButtonProps = {
  text: string;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
} & VariantProps<typeof bannerButton>;

export function BannerButton({
  text,
  variant,
  className = "",
  type = "button",
  onClick,
}: BannerButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={bannerButton({ variant, className })}
    >
      {text}
    </button>
  );
}
