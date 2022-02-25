export default function useStyle({ humidity }) {
  return {
    root: {
      color: "#222",
      backgroundColor: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      margin: "2%",
      padding: "5%",
      borderRadius: 15,
    },
    date: {
      margin: 0,
      fontWeight: 400,
    },
    time: {
      margin: 0,
      fontSize: 20,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
    temperature: {
      margin: "0 0 20px 0",
      fontWeight: "bold",
      fontSize: 25,
    },
    humidity: {
      margin: 0,
      fontSize: 25,
    },
    drop: {
      filter: `grayscale(${100 - humidity}%)`,
    },
  };
}
