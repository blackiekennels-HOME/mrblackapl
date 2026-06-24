import { useState } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonWithLoaderProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export function ButtonWithLoader({
  onClick,
  children,
  className = '',
  variant = 'primary',
  disabled = false,
}: ButtonWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    onClick();
    // Reset loading state after 2 seconds (in case redirect fails)
    setTimeout(() => setIsLoading(false), 2000);
  };

  const baseClasses = variant === 'primary' 
    ? 'dual-cta-primary' 
    : 'dual-cta-secondary';

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${className} relative transition-all duration-250`}
      style={{
        opacity: isLoading ? 0.8 : 1,
      }}
    >
      {isLoading ? (
        <div className="flex items-center justify-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Redirecting...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
