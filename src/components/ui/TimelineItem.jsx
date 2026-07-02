
export const TimelineItem = ({ item }) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-xl bg-white p-2 shadow-sm shadow-black/20 ring-1 ring-black/5 flex-shrink-0 overflow-hidden">
          <img
            src={item.icon}
            alt={item.title + ' logo'}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
            {item.title}
          </h3>
          <time className="block mt-1 mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {item.subtitle}
          </time>
          <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 block">
            {item.date}
          </span>
          <span className="mb-3 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 block">
            {item.place}
          </span>
        </div>
      </div>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {item.desc}
      </p>
    </li>
  )
}
