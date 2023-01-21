import { useContext } from "react";
import { LangContext } from "../../context/LangContext"

export const LangSwitch = () => {

  const { lang, setLang } = useContext( LangContext );

  return (
    <div className="flex gap-3">

      <input type="radio" id="en" name="lang" value="en" className="hidden"></input>
      <label 
        onClick={() => setLang("EN")}
        htmlFor="en" 
        className={`bg-[#172d4f] cursor-pointer py-2 px-5 rounded-md ${ lang === "EN" ? "bg-purple-500" : "" }`}
      >EN</label>

      <input type="radio" id="es" name="lang" value="es" className="hidden"></input>
      <label 
        onClick={() => setLang("ES")}
        htmlFor="en" 
        className={`bg-[#172d4f] cursor-pointer py-2 px-5 rounded-md ${ lang === "ES" ? "bg-purple-500" : "" }`}
      >ES</label>

    </div>
  )
}
