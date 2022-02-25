import { useMediaQuery } from "react-responsive";

export default function useStyle({ open, visible }) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 720px)" });
  return {
    selected: {
      width: 60,
      height: 60,
      margin: 0,
    },
    selector: {
      display: "block",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      transition: "0.4s",
      transitionTimingFunction: "ease-in-out",
      padding: isSmallScreen ? "0 5px" : "0 150px",
      maxHeight: open ? "100%" : 0,
      opacity: open ? 0.8 : 0.0,
    },
  };
}
