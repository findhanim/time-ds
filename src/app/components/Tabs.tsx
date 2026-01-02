import React, { useState } from "react";

interface TabsProps {
  tabs: string[];
  value?: number;
  onChange?: (index: number) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  value = 0,
  onChange,
  className = "",
}) => {
  const [selectedTab, setSelectedTab] = useState<number>(value);

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
    onChange?.(index);
  };

  return (
    <div
      className={`flex justify-center border-b-2 border-neutralVariant-40 ${className}`}
    >
      {tabs.map((label, index) => {
        const isActive = index === selectedTab;
        return (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`py-2 px-8 font-label-sm rounded-none ${
              isActive
                ? "border-b-4 border-purple-500 text-neutral-100"
                : "border-b-4 border-transparent text-neutral-70"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
