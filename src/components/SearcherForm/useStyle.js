import { useMediaQuery } from "react-responsive";

export default function useStyle() {
  const isSmallScreen = useMediaQuery({ maxWidth: 720 });

  return {
    root: {
      width: "100%",
      marginTop: 50,
    },
    input: {
      textAlign: "center",
      fontSize: 20,
      border: "none",
      outline: "none",
      color: "white",
      textShadow: "0px 0px 1px white",
      borderBottom: "1px solid white",
      borderRadius: 5,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      ...(isSmallScreen
        ? { width: "95%", padding: "2.5%" }
        : { width: "75%", padding: 25 }),
    },
  };
}
