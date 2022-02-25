import { useEffect } from "react";
import useOpenWeather from "../../../hooks/useOpenWeather";
import Loader from "../../Loader";
import icons from "../icons";
import useStyle from "./useStyle";

export default function CurrentWeatherIcon({
  apiKey,
  latitude,
  longitude,
  units,
  onError,
}) {
  const { data, isLoading, error } = useOpenWeather("weather", {
    apiKey,
    latitude,
    longitude,
    units,
  });
  const style = useStyle();

  useEffect(() => {
    onError(error);
  }, [onError, error]);

  return (
    <div style={style.root}>
      <Loader height="100%" width="100%" open={isLoading} />
      {data && (
        <img
          style={style.image}
          alt="Weather"
          src={icons[data.weather[0].icon]}
        />
      )}
    </div>
  );
}
