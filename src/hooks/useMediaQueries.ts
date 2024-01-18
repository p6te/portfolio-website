import { useState, useEffect, useLayoutEffect } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => window.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export function useBreakpoints() {
  const [isClient, setIsClient] = useState(false);

  const breakpoints = {
    isSm: useMediaQuery("(min-width: 640px) and (max-width: 767px)"),
    isMd: useMediaQuery("(min-width: 768px) and (max-width: 1023px)"),
    isLg: useMediaQuery("(min-width: 1024px)"),
    active: "SSR",
  };

  useLayoutEffect(() => {
    if (typeof window !== "undefined") setIsClient(true);
  }, []);

  if (isClient && breakpoints.isSm) breakpoints.active = "sm";
  if (isClient && breakpoints.isMd) breakpoints.active = "md";
  if (isClient && breakpoints.isLg) breakpoints.active = "lg";

  return breakpoints;
}
