export default function useStyle({ name, hover }) {
  return {
    root: {
      background: "none",
      border: "none",
      borderRadius: 3,
      margin: 15,
      display: "inline-block",
      width: 50,
      height: 50,
      transition: "0.3s",
      backgroundImage: `url('${process.env.PUBLIC_URL}/img/icons/${name}.png')`,
      boxShadow: "1px 1px 5px black",
      backgroundSize: "cover",
      cursor: "pointer",
      ...(hover ? { transform: "scale(1.2)" } : {}),
    },
  };
}
