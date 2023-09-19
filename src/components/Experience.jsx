
export const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-[#102037] py-36"
    >
      <div className="grid place-items-center gap-5 w-full">
        <h2 className='text-4xl text-white font-bold inline border-b-4 border-pink-600'>
          Experience
        </h2>
        <div className="w-[80%] md:w-[50%]">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                June 2023 - August 2023
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Frontend Developer in Remote Laboratory Development Project
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                IIMAS UNAM, Ciudad Universitaria, México.
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                The project consists in remote laboratory of digital design sistems, the core of this laboratory basically are create circuits with "drag-and-drop" components and connect them.
              </p>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Helped to implement the early stages of the project as a frontend developer on a project at one institution of my university (IIMAS) and worked with Javascript, HTML, and CSS; and used tools such as TailwindCSS, React, Redux, react-diagrams, etc...
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
