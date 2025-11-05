import React from 'react'
// Icons
import 'material-icons/iconfont/material-icons.css'

import InfoIcon from '@mui/icons-material/Info'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import ErrorIcon from '@mui/icons-material/Error'

type AlertVariant = 'info' | 'positive' | 'negative' | 'warning'

interface AlertProps {
  title: string
  message: string
  actionText?: string
  onActionClick?: () => void
  variant?: AlertVariant
  className?: string
}

const variantStyles: Record<
  AlertVariant,
  {
    bg: string
    border: string
    iconColor: string
    iconName: string
    Icon: React.ElementType
  }
> = {
  info: {
    bg: 'bg-neutralVariant-20',
    border: 'border-lilac-50',
    iconName: 'info',
    iconColor: 'text-lilac-50',
    Icon: InfoIcon,
  },
  positive: {
    bg: 'bg-green-20',
    border: 'border-green-70',
    iconName: 'check_circle',
    iconColor: 'text-green-70',
    Icon: CheckCircleIcon,
  },
  warning: {
    bg: 'bg-yellow-20',
    border: 'border-yellow-70',
    iconName: 'warning',
    iconColor: 'text-yellow-70',
    Icon: WarningAmberIcon,
  },
  negative: {
    bg: 'bg-red-20',
    border: 'border-red-60',
    iconName: 'error',
    iconColor: 'text-red-60',
    Icon: ErrorIcon,
  },
}

export const Alert: React.FC<AlertProps> = ({
  title,
  message,
  actionText,
  onActionClick,
  variant = 'info',
  className = '',
}) => {
  const { bg, border, iconName, iconColor } = variantStyles[variant]

  return (
    <div className={`${bg} border-1 ${border} rounded-12 p-4 ${className}`}>
      <div className="flex">
        {/* Icon */}
        <i className={`material-icons-outlined mr-spacing-8 ${iconColor}`}>
          {iconName}
        </i>
        <div className="w-full">
          {/* Text */}
          <div className="md:flex md:justify-between md:items-center">
            <div className="flex flex-col gap-1">
              <span className="font-label-sm prominent">{title}</span>
              <span className="font-body-sm">{message}</span>
            </div>
            {actionText && (
              <span
                className="font-label-sm prominent underline cursor-pointer"
                onClick={onActionClick}
              >
                {actionText}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
