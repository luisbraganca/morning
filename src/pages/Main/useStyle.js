export default function useStyle() {
  return {
    root: {
      boxSizing: "border-box",
      background: `url('${process.env.PUBLIC_URL}/img/background.jpg') no-repeat center center fixed`,
      backgroundSize: "cover",
      width: "100%",
      height: "100%",
      paddingTop: "7%",
    },
  };
}
