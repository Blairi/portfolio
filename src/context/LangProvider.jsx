import { useState } from "react";

import { LangContext } from "./LangContext";

const ES = require('../lang/spanish.json');
const EN = require('../lang/english.json');

const lang_dict = {
  "ES": ES,
  "EN": EN
}

export default function LangProvider({ children }) {

  const [lang, setLang] = useState("ES");

  return (
    <LangContext.Provider value={{ lang_dict: lang_dict[lang], setLang, lang }}>
      { children }
    </LangContext.Provider>
  )
}
