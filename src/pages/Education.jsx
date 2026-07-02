import { useContext } from "react"
import { LangContext } from "../context/LangContext";
import { Timeline } from "../components/ui";
import unamIcon from "../assets/UNAM.png"
import cecytemIcon from "../assets/cecytem2.png"

export const Education = () => {

  const { lang_dict } = useContext(LangContext);

  const educationData = lang_dict.education.educationList.map((item, index) => ({
      ...item,
      icon: [unamIcon, cecytemIcon][index],
    }))

  return (
    <div
      name="education"
      className="bg min-h-screen grid place-items-center"
    >

      <div className="bg-[#102037] p-10 custom-container rounded-lg space-y-5">

        <h2 className='text-4xl text-white font-bold inline border-b-4 border-pink-600'>
          {lang_dict.education.education}
        </h2>

        {
          <Timeline data={educationData} />
        }

      </div>

    </div>
  )
}
