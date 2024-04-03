import React, { useEffect, useState } from "react";
import { LazyLoaderProps } from "./Interface/UiInterface";
import Spinner from "./Spinner";

export default function LazyLoader({
  show = false,
  delay = 0,
}: LazyLoaderProps) {
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!show) {
      setShowLoader(false);
      return;
    }
    if (delay === 0) {
      setShowLoader(true);
    } else {
      timeout = setTimeout(() => setShowLoader(true), delay);
    }
    return () => clearInterval(timeout);
  }, [show, delay]);
  return showLoader ? <Spinner /> : null;
}
