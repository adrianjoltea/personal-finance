import { useEffect, useState } from "react";

export function useThreshold(thresholdWidth: number) {
  const [isThresholdMet, setIsThresholdMet] = useState(
    window.innerWidth >= thresholdWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setIsThresholdMet(window.innerWidth >= thresholdWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [thresholdWidth]);

  return isThresholdMet;
}
