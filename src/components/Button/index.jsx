import React, { useState } from "react";
import useStyle from "./useStyle";

export default function Button({
  onClick,
  style: parentStyle,
  children,
  disabled,
}) {
  const [hover, setHover] = useState(false);
  const style = useStyle({ hover, disabled });
  return (
    <button
      style={{ ...style.root, ...parentStyle }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={disabled ? null : onClick}
    >
      {children}
    </button>
  );
}
