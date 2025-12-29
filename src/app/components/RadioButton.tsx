"use client";
import React from "react";

interface RadioButtonProps {
  label: string;
  value: string;
  name: string;
  checked: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  name,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <label
      className={`flex items-center cursor-pointer
        ${disabled ? "text-neutral-50 cursor-not-allowed" : ""}
      `}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(value)}
        className="hidden"
      />

      {/* Border */}
      <span
        className={`w-5 h-5 border rounded-full flex items-center justify-center
          ${disabled ? "border-neutral-50" : "border-neutral-70"}
        `}
      >
        {checked && (
          // Indicator
          <span
            className={`w-3 h-3 rounded-full
              ${disabled ? "bg-neutral-50" : "bg-pink-500"}
            `}
          />
        )}
      </span>

      <span className="ml-2">{label}</span>
    </label>
  );
};
