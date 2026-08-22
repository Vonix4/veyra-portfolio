import { useEffect, useRef, useState } from "react";


export const ScrollReveal = ({
  children,
  animation = "fade-up", 
  delay = 0,
  duration = 800,
  threshold = 0.1,
  className = "",
}) => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        // Trigger slightly before/as the element enters the viewport for a smoother feel
        rootMargin: "0px 0px -50px 0px",
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
  }, [threshold]);

  const getAnimationClasses = () => {
    switch (animation) {
      case "fade-up":
        return isIntersecting
          ? "opacity-100 translate-y-0 filter-none"
          : "opacity-0 translate-y-12 blur-sm";
      case "fade-down":
        return isIntersecting
          ? "opacity-100 translate-y-0 filter-none"
          : "opacity-0 -translate-y-12 blur-sm";
      case "fade-left":
        return isIntersecting
          ? "opacity-100 translate-x-0 filter-none"
          : "opacity-0 -translate-x-12 blur-sm";
      case "fade-right":
        return isIntersecting
          ? "opacity-100 translate-x-0 filter-none"
          : "opacity-0 translate-x-12 blur-sm";
      case "scale-up":
        return isIntersecting
          ? "opacity-100 scale-100 filter-none"
          : "opacity-0 scale-90 blur-sm";
      case "blur-in":
        return isIntersecting
          ? "opacity-100 blur-none"
          : "opacity-0 blur-lg";
      default:
        return isIntersecting ? "opacity-100" : "opacity-0";
    }
  };

  const style = {
    transitionProperty: "opacity, transform, filter",
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // Premium cubic-bezier transition
  };

  return (
    <div
      ref={ref}
      style={style}
      className={`transition-all ${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
};
