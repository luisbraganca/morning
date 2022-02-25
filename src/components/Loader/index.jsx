import { useEffect, useState } from "react";
import useStyle from "./useStyle";

export default function Loader({
  open,
  color,
  weight,
  height,
  width,
  speed = 250,
}) {
  const [angle, setAngle] = useState(0);

  const style = useStyle({
    color,
    weight,
    height,
    width,
    angle,
    speed: `0.${speed}s`,
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => setAngle(angle + 180), speed + 1);
    return () => clearTimeout(timeoutId);
  }, [angle, speed]);

  return open ? <div style={style.root}></div> : null;
}
