import { useEffect, useState } from "react";

const useResponsiveStyles = () => {
  const [screenSize, setScreenSize] = useState("medium");

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("small");
      } else if (window.innerWidth < 1200) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize();
    
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return screenSize;
};

export default useResponsiveStyles;
