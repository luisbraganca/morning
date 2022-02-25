import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialData) {
  const storageData = localStorage.getItem(key);
  const [data, setData] = useState(
    storageData ? JSON.parse(storageData) : initialData
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData];
}
