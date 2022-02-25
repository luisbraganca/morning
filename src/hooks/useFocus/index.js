import { useRef } from "react";

export default function useFocus() {
  const ref = useRef();
  const focus = (selection) => {
    const element = ref.current;
    if (element) {
      element.focus();
      selection &&
        element.setSelectionRange(
          selection.start,
          selection.end,
          selection.direction
        );
    }
  };
  return [ref, focus];
}
