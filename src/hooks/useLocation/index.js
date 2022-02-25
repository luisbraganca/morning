import { useState } from "react";

const { geolocation } = navigator;

export default function useLocation(options, fallbackCoordinates, mode) {
  const [coordinates, setCoordinates] = useState(
    fallbackCoordinates ?? {
      latitude: null,
      longitude: null,
    }
  );
  const [isLoading, setIsLoading] = useState(
    mode !== useManualCoordinates.ALWAYS
  );
  const [error, setError] = useState(null);

  if (mode !== useManualCoordinates.ALWAYS) {
    geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoordinates(coords);
        setIsLoading(false);
      },
      (error) => {
        !fallbackCoordinates && setError(error);
        setIsLoading(false);
      },
      options
    );
  }

  return {
    coordinates,
    isLoading,
    error,
  };
}

/**
 * This is a dirty trick in order to use this hook conditionally, also allowing it
 * to provide fallback coordinates (if some error happens when trying to get the user's
 * coordinates).
 */
export const useManualCoordinates = {
  AS_FALLBACK: 1,
  ALWAYS: 2,
};
