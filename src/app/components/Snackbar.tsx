import React from "react";
// Icons
import InfoIcon from "@mui/icons-material/InfoOutline";
import CheckIcon from "@mui/icons-material/CheckCircleOutline";
import WarningIcon from "@mui/icons-material/WarningAmberOutlined";
import ErrorIcon from "@mui/icons-material/ErrorOutline";

export type SnackbarVariant = "default" | "positive" | "negative" | "warning";

interface SnackbarProps {
  message: string;
  actionText?: string;
  onActionClick?: () => void;
  variant?: SnackbarVariant;
  className?: string;
}

const snackbarVariant: Record<
  SnackbarVariant,
  {
    bg: string;
    iconColor: string;
    textColor: string;
    Icon: React.ElementType;
  }
> = {
  default: {
    bg: "bg-neutral-100",
    iconColor: "text-white",
    textColor: "text-white",
    Icon: InfoIcon,
  },
  positive: {
    bg: "bg-green-50",
    iconColor: "text-neutral-100",
    textColor: "text-neutral-100",
    Icon: CheckIcon,
  },
  warning: {
    bg: "bg-yellow-50",
    iconColor: "text-neutral-100",
    textColor: "text-neutral-100",
    Icon: WarningIcon,
  },
  negative: {
    bg: "bg-red-40",
    iconColor: "text-neutral-100",
    textColor: "text-neutral-100",
    Icon: ErrorIcon,
  },
};

export const Snackbar: React.FC<SnackbarProps> = ({
  message,
  actionText,
  onActionClick,
  variant = "default",
  className = "",
}) => {
  const { bg, Icon, iconColor, textColor } = snackbarVariant[variant];

  return (
    <div className={`${bg} rounded-12 p-4 ${className}`}>
      <div className="flex">
        {/* Icon */}
        <Icon className={`mr-spacing-8 ${iconColor}`} fontSize="small" />
        <div className="w-full">
          {/* Text */}
          <div className="md:flex md:justify-between md:items-center">
            <div className="flex flex-col gap-1">
              <span className={`${textColor} font-body-sm`}>{message}</span>
            </div>
            {actionText && (
              <span
                className={`${textColor} font-label-sm prominent underline cursor-pointer`}
                onClick={onActionClick}
              >
                {actionText}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
