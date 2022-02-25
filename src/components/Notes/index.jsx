import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import useHotkey from "../../hooks/useHotkey";
import useStyle from "./useStyle";
import Editor from "../Editor";
import Button from "../Button";

export default function Notes() {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useLocalStorage("notes", "");

  const style = useStyle({ open });

  useHotkey(
    () => setOpen(!open),
    (e) => e.ctrlKey && e.altKey && e.code === "ArrowRight"
  );

  return (
    <div style={style.root}>
      <Button onClick={() => setOpen(!open)} style={style.button}>
        {open ? "×" : "n"}
      </Button>
      {open && (
        <Editor onChange={(e) => setNotes(e.target.value)} value={notes} />
      )}
    </div>
  );
}
