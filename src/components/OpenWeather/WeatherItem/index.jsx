import useStyle from "./useStyle";
import icons from "../icons";

export default function WeatherItem({ data: { dt, weather, main } }) {
  const { humidity } = main;
  const style = useStyle({ humidity });
  const dateTime = new Date(1000 * dt);
  return (
    <div style={style.root}>
      <h2 style={style.date}>{`Day ${dateTime.getDate()}`}</h2>
      <h3 style={style.time}>{`${dateTime.getHours()}H`}</h3>
      <img style={style.image} alt="Weather" src={icons[weather[0].icon]} />
      <p style={style.temperature}>{`${parseInt(main.temp_min)}º - ${parseInt(
        main.temp_max
      )}º`}</p>
      <img
        style={style.drop}
        src={`${process.env.PUBLIC_URL}/img/drop.png`}
        alt="Drop"
      />
      <p style={style.humidity}>{`${main.humidity}%`}</p>
    </div>
  );
}
