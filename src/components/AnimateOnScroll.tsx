
import { useEffect, useRef, useState } from "react";

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'slide-up';

type Props = {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
  type?: AnimationType;
  className?: string;
};

export default function AnimateOnScroll({ 
  children, 
  threshold = 0.1,
  delay = 0,
  type = 'fade-up',
  className = ''
}: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  const getAnimationClass = () => {
    switch (type) {
      case 'fade-up':
        return 'opacity-0 translate-y-8';
      case 'fade-down':
        return 'opacity-0 -translate-y-8';
      case 'fade-left':
        return 'opacity-0 translate-x-8';
      case 'fade-right':
        return 'opacity-0 -translate-x-8';
      case 'zoom-in':
        return 'opacity-0 scale-95';
      case 'slide-up':
        return 'opacity-0 translate-y-16';
      default:
        return 'opacity-0 translate-y-8';
    }
  };

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-out ${getAnimationClass()} ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
