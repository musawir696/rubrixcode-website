import React from "react";

const Cursor = () => {
  // Skip rendering during SSR
  if (typeof window === "undefined") {
    return null;
  }

  React.useEffect(() => {
    // Dynamically import and execute mouseEffect only on client
    import("common/mouseEffect").then((module) => {
      if (module.default) {
        module.default();
      }
    }).catch(() => {
      // Silently fail if mouseEffect can't load
    });
  }, []);

  return (
    <>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </>
  );
};

export default Cursor;
