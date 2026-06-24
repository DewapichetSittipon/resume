import React, { useRef, useEffect, useState } from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  animation?: string;
  threshold?: number;
}

export const AnimateIn: React.FC<Props> = ({
  children,
  delay = 0,
  animation = 'animate-fade-up',
  threshold = 0.12,
  className = '',
  style,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${visible ? animation : 'opacity-0'} ${className}`}
      style={{ animationDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </div>
  );
};
