export default function useStyle({ hover, disabled }) {
  let color = "#ccc";
  if (disabled) {
    color = "#222";
  } else if (hover) {
    color = "#fff";
  }
  return {
    root: {
      background: "none",
      border: "none",
      transition: "0.3s",
      cursor: "pointer",
      color,
    },
  };
}
