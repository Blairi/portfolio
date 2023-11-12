import { TimelineItem } from "./";

export const Timeline = ({ data = [] }) => {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      {
        data.map((item, i) => (
          <TimelineItem 
            key={i}
            item={item}
          />
        ))
      }
    </ol>
  )
}
