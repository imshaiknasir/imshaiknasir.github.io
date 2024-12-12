import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export function IconButton({ icon, label, className = '', ...props }: IconButtonProps) {
  return (
    <button
      className={`
        p-2 rounded-full hover:bg-gray-100 transition-colors
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${className}
      `}
      aria-label={label}
      {...props}
    >
      {icon}
    </button>
  );
}