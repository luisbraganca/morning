export default function useStyle() {
  return {
    root: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    paginator: {
      fontWeight: "bold",
      cursor: "pointer",
      textDecoration: "none",
      display: "block",
      transition: "0.3s",
      background: "none",
      border: "none",
      fontSize: 40,
    },
  };
}
