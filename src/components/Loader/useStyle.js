export default function useStyle({
  weight,
  color,
  width,
  height,
  angle,
  speed,
}) {
  return {
    root: {
      borderRadius: "50%",
      borderTopColor: color ?? "#000",
      borderTopStyle: "solid",
      borderTopWidth: weight ?? 2,
      width: width ?? 64,
      height: height ?? 64,
      transition: speed ?? "0.25s",
      transitionTimingFunction: "linear",
      transform: `rotate(${angle}deg)`,
    },
  };
}
