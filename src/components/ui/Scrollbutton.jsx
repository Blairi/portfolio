import { Link } from "react-scroll";

export const Scrollbutton = ({ label, to, duration, offset, onClick }) => {
  return (
    <Link
      to={to}
      duration={duration}
      offset={offset}
      onClick={onClick}
      smooth={true}
      className="hover:cursor-pointer"
    >
      { label }
    </Link>
  )
}
