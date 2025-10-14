import React from "react";

/**
 * ClientOnlyWrapper - Only renders children on the client side, not during SSR
 * Usage: <ClientOnlyWrapper>{children}</ClientOnlyWrapper>
 */
const ClientOnlyWrapper = ({ children }) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnlyWrapper;

