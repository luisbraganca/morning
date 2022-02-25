import { useMediaQuery } from "react-responsive";

export default function useStyle({ open }) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 720px)" });
  return {
    root: {
      width: "100%",
      position: "fixed",
      bottom: 0,
      transition: "0.3s",
      transitionTimingFunction: "ease-in-out",
      marginTop: 10,
      textAlign: "center",
      boxShadow: "0 0 5px 0 #000",
      ...(open
        ? {
            zIndex: 1000,
            height: "100%",
            paddingTop: 20,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }
        : {
            zIndex: 20,
            height: 55,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }),
    },
    menu: {
      width: "100%",
      fontWeight: "bold",
      cursor: "pointer",
      textDecoration: "none",
      display: "block",
      transition: "0.3s",
      background: "none",
      border: "none",
      padding: "2px",
      fontSize: 40,
      height: 50,
    },
    apps: {
      padding: isSmallScreen ? "40px 0 0 0" : "40vh 17vw 0 17vw",
    },
  };
}
