// import { Link } from "react-router-dom";

export default function SubElement({ children }) {
  return (
    <a className="rounded-sm px-2 py-1 hover:bg-[#7E35DE] hover:text-white">
      {children}
    </a>
  );
}
