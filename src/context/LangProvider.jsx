import { useState } from "react";

import { LangContext } from "./LangContext";

import ES from '../lang/spanish.json';
import EN from '../lang/english.json';

const lang_dict = {
  "ES": ES,
  "EN": EN
}

export default function LangProvider({ children }) {

  const [lang, setLang] = useState("EN");

  return (
    <LangContext.Provider value={{ lang_dict: lang_dict[lang], setLang, lang }}>
      { children }
    </LangContext.Provider>
  )
}
