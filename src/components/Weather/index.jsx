import { useState } from "react";
import { CurrentWeatherIcon, DetailedWeather } from "../OpenWeather";
import useHotkey from "../../hooks/useHotkey";
import config from "./config";
import useStyle from "./useStyle";
import useLocation, { useManualCoordinates } from "../../hooks/useLocation";
import Button from "../Button";
import Loader from "../Loader";
import Toast, { Type } from "../Toast";

export default function Weather() {
  const { apiKey, units, tryNavigation } = config;
  const [open, setOpen] = useState(false);
  const style = useStyle({ open });
  const [weatherError, setWeatherError] = useState(null);

  const {
    coordinates: { latitude, longitude },
    isLoading,
    error,
  } = useLocation(
    null,
    {
      latitude: config.latitude,
      longitude: config.longitude,
    },
    tryNavigation
      ? useManualCoordinates.AS_FALLBACK
      : useManualCoordinates.ALWAYS
  );

  useHotkey(
    () => setOpen(!open),
    (e) => e.ctrlKey && e.altKey && e.code === "ArrowLeft"
  );

  let buttonChild;
  if (isLoading) {
    buttonChild = <Loader height="100%" width="100%" open={isLoading} />;
  } else if (error) {
    buttonChild = null;
  } else if (open) {
    buttonChild = "×";
  } else {
    buttonChild = (
      <CurrentWeatherIcon
        apiKey={apiKey}
        latitude={latitude}
        longitude={longitude}
        onError={setWeatherError}
      />
    );
  }

  if (weatherError) {
    return (
      <Toast type={Type.ERROR} open={!!weatherError}>
        {`Error fetching weather info (${weatherError?.message}).`}
      </Toast>
    );
  }

  return (
    <div style={style.root}>
      <Button onClick={() => setOpen(!open)} style={style.button}>
        {buttonChild}
      </Button>
      {open && (
        <DetailedWeather
          apiKey={apiKey}
          latitude={latitude}
          longitude={longitude}
          units={units}
          onError={setWeatherError}
        />
      )}
    </div>
  );
}
