import React, { useState } from "react";
import useStyle from "./useStyle";
import apps from "./apps";
import IconButton from "../IconButton";
import useHotkey from "../../hooks/useHotkey";
import Button from "../Button";

const onClick = (href) => {
  window.open(href, "_blank");
};

export default function AppMenu() {
  const [open, setOpen] = useState(false);
  const style = useStyle({ open });

  useHotkey(
    () => setOpen(!open),
    (e) => e.ctrlKey && e.altKey && e.code === "ArrowDown"
  );

  return (
    <div style={style.root}>
      <Button style={style.menu} onClick={() => setOpen(!open)}>
        {open ? "×" : "menu"}
      </Button>
      {open && (
        <div style={style.apps}>
          {apps.map(({ name, href }) => (
            <IconButton key={name} name={name} onClick={() => onClick(href)} />
          ))}
        </div>
      )}
    </div>
  );
}
