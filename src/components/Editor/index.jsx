import { useEffect } from "react";
import useFocus from "../../hooks/useFocus";
import useLocalStorage from "../../hooks/useLocalStorage";
import useStyle from "./useStyle";

export default function Editor({ value, onChange }) {
  const style = useStyle();
  const [ref, focus] = useFocus();
  const [caretPosition, setCaretPosition] = useLocalStorage("selection", {
    start: 0,
    end: 0,
    direction: "forward",
  });

  const updateCaretPosition = ({
    target: {
      selectionStart: start,
      selectionEnd: end,
      selectionDirection: direction,
    },
  }) => setCaretPosition({ start, end, direction });

  useEffect(() => {
    focus(caretPosition);
  }, [focus, caretPosition]);

  return (
    <textarea
      ref={ref}
      onClick={updateCaretPosition}
      onKeyUp={updateCaretPosition}
      onChange={(e) => {
        updateCaretPosition(e);
        onChange(e);
      }}
      spellCheck="false"
      style={style.root}
      value={value}
    />
  );
}
