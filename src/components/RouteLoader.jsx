import { useEffect, useState } from "react";

export default function RouteLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1000);

    if (typeof window !== "undefined" && window.plexify) {
      window.plexify().init();
    }

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      id="loading-area"
      className="preloader-wrapper fixed inset-0 z-[999999] flex items-center justify-center bg-white dark:bg-secondary"
    >
      <div className="preloader">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 21 -7"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
