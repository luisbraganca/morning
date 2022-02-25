import { useEffect, useState } from "react";
import useHotkey from "../../../hooks/useHotkey";
import useOpenWeather from "../../../hooks/useOpenWeather";
import Button from "../../Button";
import Loader from "../../Loader";
import WeatherItem from "../WeatherItem";
import useStyle from "./useStyle";

export default function DetailedWeather({
  apiKey,
  latitude,
  longitude,
  units,
  count,
  onError,
}) {
  const { data, isLoading, error } = useOpenWeather("forecast", {
    apiKey,
    latitude,
    longitude,
    units: units ?? "metric",
    count: count ?? 40,
  });
  const length = data?.list.length;
  const [index, setIndex] = useState(0);
  const style = useStyle();

  useEffect(() => {
    onError(error);
  }, [onError, error]);

  useHotkey(
    () => index !== length - 1 && setIndex(index + 1),
    (e) => e.code === "ArrowRight"
  );

  useHotkey(
    () => index !== 0 && setIndex(index - 1),
    (e) => e.code === "ArrowLeft"
  );

  return (
    <div style={style.root}>
      <Loader height="100%" width="100%" color="#ddd" open={isLoading} />
      {data && (
        <>
          <Button
            disabled={index === 0}
            style={style.paginator}
            onClick={() => setIndex(index - 1)}
          >
            {"<"}
          </Button>
          <WeatherItem data={data.list[index]} />
          <Button
            disabled={index === length - 1}
            style={style.paginator}
            onClick={() => setIndex(index + 1)}
          >
            {">"}
          </Button>
        </>
      )}
      {error && <p>{error.message}</p>}
    </div>
  );
}
