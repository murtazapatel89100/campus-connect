import React from "react";

type Variant = "primary" | "secondary" | "success" | "danger" | "neutral";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-blue-100 text-blue-700 border-blue-200",
  secondary: "bg-slate-100 text-slate-800 border-slate-200",
  success: "bg-green-100 text-green-700 border-green-200",
  danger: "bg-red-100 text-red-700 border-red-200",
  neutral: "bg-slate-600 text-white border-transparent",
};

export function Badge({
  variant = "primary",
  children,
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
