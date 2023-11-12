import { useContext } from "react"
import { LangContext } from "../context/LangContext";
import { Timeline } from "../components/ui";

export const Education = () => {

  const { lang_dict } = useContext(LangContext);

  return (
    <div
      name="education"
      className="bg min-h-screen grid place-items-center px-3"
    >

      <div className="bg-[#102037] p-10 container rounded-lg space-y-5">

        <h2 className='text-4xl text-white font-bold inline border-b-4 border-pink-600'>
          {lang_dict.education.education}
        </h2>

        {
          <Timeline data={lang_dict.education.educationList} />
        }

      </div>

    </div>
  )
}
