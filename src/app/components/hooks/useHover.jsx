import React from "react";

export function useHover() {
  const [hovered, setHovered] = React.useState(false);
  const ref = React.useRef(null);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  React.useEffect(() => {
    const item = ref.current;
    if (item) {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (item) {
        item.addEventListener("mouseenter", handleMouseEnter);
        item.addEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return {
    hovered,
    ref,
  };
}
