import { Type } from "./index";

export default function useStyle({ open, type, from }) {
  let backgroundColor;
  if (type === Type.SUCCESS) {
    backgroundColor = "#a0bbb6";
  } else if (type === Type.WARNING) {
    backgroundColor = "#f4d1b8";
  } else if (type === Type.ERROR) {
    backgroundColor = "#f5c4c3";
  } else {
    // Type.INFO
    backgroundColor = "#c1d4f6";
  }
  return {
    root: {
      position: "fixed",
      minWidth: "50vw",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 2000,
      color: "#fff",
      textAlign: "center",
      borderRadius: 5,
      padding: 16,
      fontSize: 16,
      backgroundColor,
      ...(open
        ? {
            [from]: 100,
            opacity: 1,
          }
        : {
            [from]: -500,
            opacity: 0,
          }),
    },
  };
}
