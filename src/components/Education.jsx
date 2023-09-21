
export const Education = () => {
  return (
    <div
      name="experience"
      className="bg-[#102037] py-36"
    >
      <div className="grid place-items-center gap-5 w-full">
        <h2 className='text-4xl text-white font-bold inline border-b-4 border-pink-600'>
          Education
        </h2>
        <div className="w-[80%] md:w-[50%]">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-1 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                August 2022 -
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Computer engineering
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, iure obcaecati? Eaque cupiditate accusantium dicta consequatur id. Voluptatum dicta molestias consequuntur voluptates iusto debitis quo deleniti numquam aliquam libero? Eligendi!
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                August 2017 - July 2020
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Programmer Technician
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iusto nesciunt assumenda est non libero placeat culpa incidunt delectus doloremque quia illum, cumque corporis distinctio possimus temporibus officia minima repellendus.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
