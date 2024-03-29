
export const TimelineItem = ({ item }) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {item.date}
      </time>
      <span className="my-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 block">
        {item.place}
      </span>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {item.title}
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {item.subtitle}
      </time>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {item.desc}
      </p>
    </li>
  )
}
