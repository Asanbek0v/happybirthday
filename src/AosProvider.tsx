"use client";

import { FC, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AosProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Анимациянын ылдамдыгы (1 секунд)
      once: true, // Скролл кылганда бир эле жолу иштесин
    });
  }, []);

  return <>{children}</>;
};
