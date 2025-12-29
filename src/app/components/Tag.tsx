"use client";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";

type TagVariant = "default" | "info" | "success" | "warning" | "error";
type TagStyle = "subtle" | "bold";
type TagSize = "sm" | "md" | "lg";

interface TagProps {
  label: string;
  variant?: TagVariant;
  style?: TagStyle;
  size?: TagSize;
  leadingIcon?: boolean;
  trailingIcon?: boolean;
}

const VARIANT_STYLES: Record<
  TagVariant,
  {
    subtle: string;
    bold: string;
  }
> = {
  default: {
    subtle: "bg-neutralVariant-40 text-neutral-100",
    bold: "bg-black text-white",
  },
  info: {
    subtle: "bg-blue-20 text-neutral-100",
    bold: "bg-blue-50 text-white",
  },
  success: {
    subtle: "bg-green-20 text-neutral-100",
    bold: "bg-green-60 text-white",
  },
  warning: {
    subtle: "bg-yellow-20 text-neutral-100",
    bold: "bg-yellow-60 text-white",
  },
  error: {
    subtle: "bg-red-20 text-neutral-100",
    bold: "bg-red-50 text-white",
  },
};

const SIZE_STYLES: Record<TagSize, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-md",
};

export const Tag: React.FC<TagProps> = ({
  label,
  variant = "default",
  style = "subtle",
  size = "md",
  leadingIcon = false,
  trailingIcon = false,
}) => {
  return (
    <div
      className={`inline-flex items-center rounded-8 gap-1
        ${VARIANT_STYLES[variant][style]}
        ${SIZE_STYLES[size]}
      `}
    >
      {leadingIcon && <CheckIcon fontSize="small" className="mr-1" />}

      <span className="whitespace-nowrap">{label}</span>

      {trailingIcon && <CheckIcon fontSize="small" className="ml-1" />}
    </div>
  );
};
