export default function useStyle({ open }) {
  return {
    root: {
      position: "fixed",
      top: 0,
      right: 0,
      transition: "0.3s",
      transitionTimingFunction: "ease-in-out",
      marginLeft: 10,
      textAlign: "center",
      boxShadow: "0 0 5px 0 #000",
      ...(open
        ? {
            zIndex: 900,
            height: "100%",
            width: "100%",
            paddingTop: 15,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }
        : {
            zIndex: 20,
            height: 55,
            width: 55,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
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
