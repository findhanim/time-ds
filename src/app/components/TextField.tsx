import React from "react";

// Icons
import InfoIcon from "@mui/icons-material/InfoOutline";
import PersonIcon from "@mui/icons-material/Person";
import DropdownIcon from "@mui/icons-material/ChevronRight";

interface TextFieldProps {
  variant?: "outlined" | "filled";
  state?: "default" | "disabled" | "focused" | "error";
  margin?: number;
  labelText?: string;
  inputText?: string;
  supportingText?: string;
  leadingIcon?: boolean;
  trailingIcon?: boolean;
  infoIcon?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
  variant = "outlined",
  state = "default",
  margin = 0,
  labelText,
  inputText = "",
  supportingText,
  leadingIcon = false,
  trailingIcon = false,
  infoIcon = false,
}) => {
  const isOutlined = variant === "outlined";
  const isDisabled = state === "disabled";
  const isFocused = state === "focused";
  const isError = state === "error";

  const borderColor = isError
    ? "border-red-50"
    : isDisabled
    ? "border-neutral-20"
    : isFocused
    ? "border-pink-50"
    : isOutlined
    ? "border-neutral-100"
    : "border-neutralVariant-40";

  const textColor = isDisabled ? "text-neutral-100" : "text-neutral-100";
  const labelColor = isDisabled ? "text-neutral-70" : "text-neutral-70";
  const supportingColor = isError ? "text-red-50" : "text-neutralVariant-80";

  return (
    <div className={`mb-spacing-${margin}`}>
      {/* Top Label (only if labelText is passed and outlined variant) */}
      {isOutlined && labelText && (
        <div className="flex items-center pb-spacing-4">
          <span className={`font-label-sm ${labelColor}`}>{labelText}</span>
          {infoIcon && (
            <InfoIcon
              fontSize="xsmall"
              className="ml-spacing-4 text-lightBlue-80"
            />
          )}
        </div>
      )}

      {/* Container */}
      <div
        className={`border-[1.5px] rounded-12 p-spacing-16 ${
          isOutlined ? "py-spacing-16" : "py-spacing-8"
        } ${borderColor} ${isDisabled ? "bg-neutral-20" : "bg-neutral-0"}`}
      >
        <div className="flex items-center">
          {/* Leading Icon */}
          {leadingIcon && (
            <PersonIcon
              fontSize="small"
              className={`mr-spacing-8 ${
                isDisabled ? "text-neutral-80" : "text-neutral-80"
              }`}
            />
          )}

          <div className="w-full">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                {/* Inside Label (filled variant) */}
                {!isOutlined && labelText && (
                  <span className={`font-label-xs ${labelColor}`}>
                    {labelText}
                  </span>
                )}

                {/* Input Text */}
                <span className={`font-body-md ${textColor}`}>{inputText}</span>
              </div>

              {/* Trailing Icon */}
              {trailingIcon && (
                <DropdownIcon
                  fontSize="small"
                  className={`ml-spacing-8 transform rotate-90 ${
                    isError ? "text-error" : "text-neutral-80"
                  }`}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Supporting Text */}
      {supportingText && (
        <span className={`font-body-xs pt-spacing-4 block ${supportingColor}`}>
          {supportingText}
        </span>
      )}
    </div>
  );
};
