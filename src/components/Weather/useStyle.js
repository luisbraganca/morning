export default function useStyle({ open }) {
  return {
    root: {
      position: "fixed",
      top: 0,
      left: 0,
      transition: "0.3s",
      transitionTimingFunction: "ease-in-out",
      marginRight: 10,
      textAlign: "center",
      boxShadow: "0 0 5px 0 #000",
      ...(open
        ? {
            zIndex: 900,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }
        : {
            zIndex: 5,
            height: 55,
            width: 55,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }),
    },
    button: {
      width: "100%",
      fontWeight: "bold",
      cursor: "pointer",
      textDecoration: "none",
      display: "block",
      transition: "0.3s",
      background: "none",
      border: "none",
      fontSize: 40,
      height: 50,
      ...(open
        ? { padding: "2px 1%", textAlign: "right" }
        : { padding: 2, textAlign: "center" }),
    },
  };
}
