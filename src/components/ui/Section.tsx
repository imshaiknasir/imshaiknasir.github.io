import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'mono' | 'gradient';
}

export function Section({ children, className = '', background = 'white' }: SectionProps) {
  const getBgClass = () => {
    switch (background) {
      case 'mono':
        return 'bg-mono-50';
      case 'gradient':
        return 'bg-gradient-to-b from-mono-50 to-white';
      default:
        return 'bg-white';
    }
  };

  return (
    <section className={`section ${getBgClass()} ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}