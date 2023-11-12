import { useContext } from "react"
import { LangContext } from "../context/LangContext"
import { Timeline } from "../components/ui";

export const Experience = () => {

  const { lang_dict } = useContext(LangContext);

  return (
    <div
      name="laboralExperience"
      className="bg-[#102037] min-h-screen grid place-items-center"
    >

      <div className="p-10 container rounded-lg space-y-5">

        <h2 className='text-4xl text-white font-bold inline border-b-4 border-pink-600'>
          {lang_dict.laboralExperience.laboralExperience}
        </h2>

        {
          <Timeline data={lang_dict.laboralExperience.laboralExperienceList} />
        }
      </div>

    </div>
  )
}
