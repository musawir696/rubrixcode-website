import React, { useEffect, useState } from "react";

/**
 * Lazy loads Swiper components only in the browser to avoid SSR errors
 * Usage: Wrap your Swiper component with this
 */
export const SwiperLazyLoader = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Don't render Swiper during SSR
  }

  return <>{children}</>;
};

export default SwiperLazyLoader;

