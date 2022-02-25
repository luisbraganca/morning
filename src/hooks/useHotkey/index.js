import { useEffect } from "react";

export default function useHotkey(callback, condition) {
  useEffect(() => {
    const hotkeyHandler = (e) => condition(e) && callback();
    window.addEventListener("keydown", hotkeyHandler);
    return () => window.removeEventListener("keydown", hotkeyHandler);
  }, [callback, condition]);
}
