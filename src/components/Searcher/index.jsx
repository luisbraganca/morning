import React, { useEffect, useState } from "react";
import useStyle from "./useStyle";
import engines from "./engines";
import IconButton from "../IconButton";
import SearcherForm from "../SearcherForm";
import useFocus from "../../hooks/useFocus";
import useHotkey from "../../hooks/useHotkey";

const genericParser = (content) => {
  return content.trim();
};

export default function Searcher() {
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(engines[0]);
  const [refInput, focusInput] = useFocus();
  const [refFirstIcon, focusFirstIcon] = useFocus();
  const style = useStyle({ open });

  useEffect(() => {
    if (open) {
      focusFirstIcon();
    } else {
      focusInput();
    }
  }, [open, focusInput, focusFirstIcon]);

  useHotkey(
    () => setOpen(!open),
    (e) => e.ctrlKey && e.altKey && e.code === "ArrowUp"
  );

  useHotkey(
    () => {
      setOpen(false);
      focusInput();
    },
    (e) => e.ctrlKey && e.altKey && e.code === "Space"
  );

  const onChange = ({ target: { value } }) => {
    let key, engine;
    if (
      value[0] === "!" &&
      value.endsWith(" ") &&
      (key = value.slice(1).trim()) &&
      (engine = engines.find((engine) => engine.bang === key))
    ) {
      setSelected(engine);
      setContent("");
    } else {
      setContent(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let search = genericParser(content);
    selected.parser && (search = selected.parser(search));
    var url = selected.action;
    window.open(url.replace("{search}", search), "_self");
  };

  return (
    <>
      <IconButton
        style={style.selected}
        name={selected.name}
        onClick={() => setOpen(!open)}
      />
      <div style={style.selector}>
        {open &&
          engines.map((engine, index) => (
            <IconButton
              buttonRef={index === 0 ? refFirstIcon : null}
              key={engine.bang}
              name={engine.name}
              onClick={() => {
                setSelected(engine);
                setOpen(false);
              }}
            />
          ))}
      </div>
      <SearcherForm
        onSubmit={onSubmit}
        inputRef={refInput}
        value={content}
        onChange={onChange}
        placeholder={`Search ${selected.name}`}
        onFocus={() => setOpen(false)}
      />
    </>
  );
}
