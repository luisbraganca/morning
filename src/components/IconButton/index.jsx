import React, { useState } from "react";
import useStyle from "./useStyle";

export default function IconButton({
  name,
  onClick,
  style: parentStyle,
  buttonRef,
}) {
  const [hover, setHover] = useState(false);
  const style = useStyle({ name, hover });
  return (
    <button
      ref={buttonRef}
      style={{ ...style.root, ...parentStyle }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    />
  );
}
