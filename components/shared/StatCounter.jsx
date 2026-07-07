import { useEffect, useRef, useState } from "react";

export default function StatCounter({ target, formatted = false, suffix = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            animate();
            observer.unobserve(el);
          }
        });
      },
      { threshold: formatted ? 0.5 : 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animate = () => {
    const speed = formatted ? 50 : 200;
    const step = () => {
      setValue((current) => {
        const increment = formatted ? Math.ceil(target / speed) : target / speed;
        const nextVal = current + increment > target ? target : current + increment;
        if (nextVal < target) {
          setTimeout(step, formatted ? 30 : 10);
        }
        return nextVal;
      });
    };
    step();
  };

  const display = formatted
    ? Math.ceil(value).toLocaleString("en-IN") + (target !== 41 ? "+" : "")
    : Math.ceil(value);

  return (
    <span ref={ref} className={formatted ? "mh-stat-number" : "counter"}>
      {display}
      {suffix}
    </span>
  );
}
