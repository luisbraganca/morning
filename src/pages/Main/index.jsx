import React from "react";
import AppMenu from "../../components/AppMenu";
import CurrentDateTime from "../../components/CurrentDateTime";
import Notes from "../../components/Notes";
import Searcher from "../../components/Searcher";
import Weather from "../../components/Weather";
import useStyle from "./useStyle";
import { weather as weatherConfig } from "../../config";

export default function Main() {
  const style = useStyle();
  return (
    <div style={style.root}>
      {weatherConfig && <Weather />}
      <Notes />
      <Searcher />
      <CurrentDateTime />
      <AppMenu />
    </div>
  );
}
