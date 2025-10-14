import React, { useEffect, useState } from "react";

/**
 * Wrapper component that only renders its children on the client side
 * This prevents SSR errors for browser-only components
 */
const ClientOnly = ({ children, fallback = null }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return fallback;
  }

  return <>{children}</>;
};

export default ClientOnly;

