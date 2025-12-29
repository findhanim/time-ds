import React from "react";
// Icons
import BackIcon from "@mui/icons-material/ChevronLeft";
import CloseIcon from "@mui/icons-material/CloseRounded";

interface AppBarProps {
  headlineSize?: "small" | "medium";
  headlineText?: string;
  supportingText?: string;
  leadingIcon?: boolean;
  trailingIcon?: boolean;
}

export const AppBar: React.FC<AppBarProps> = ({
  headlineSize = "small",
  headlineText = "Headline",
  supportingText,
  leadingIcon = false,
  trailingIcon = false,
}) => {
  const isSmall = headlineSize === "small";

  return (
    <div className="mb-spacing-32">
      <div className="flex justify-between items-center">
        {/* Leading Icon */}
        {leadingIcon && (
          <div className="bg-neutralVariant-20 rounded-full">
            <BackIcon className="m-spacing-8" />
          </div>
        )}

        {/* Headline Small */}
        {isSmall && (
          <h3 className="font-SOT font-headline-sm text-center">
            {headlineText}
          </h3>
        )}

        {/* Trailing Icon */}
        {trailingIcon && (
          <div className="bg-neutralVariant-20 rounded-full">
            <CloseIcon className="m-spacing-8" />
          </div>
        )}
      </div>

      {/* Headline Medium */}
      {!isSmall && (
        <h3 className="font-SOT font-headline-md mt-spacing-16">
          {headlineText}
        </h3>
      )}

      {/* Supporting text */}
      {supportingText && (
        <span className="font-body-sm mt-spacing-4">{supportingText}</span>
      )}
    </div>
  );
};
