// import { Children } from "react";

export default function NavItem({ mouseEnter, mouseLeave, children }) {
  if (children !== "Services") {
    return (
      <button className="relative bg-transparent px-5 py-3 font-medium text-gray-500 transition-colors before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[#7E35DE] before:transition-all before:duration-300 before:content-[''] hover:text-white before:hover:h-full before:hover:w-full">
        {children}
      </button>
    );
  }
  return (
    <button
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className="relative bg-transparent px-5 py-3 font-medium text-gray-500 transition-colors before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[#7E35DE] before:transition-all before:duration-300 before:content-[''] hover:text-white before:hover:h-full before:hover:w-full"
    >
      {children}
    </button>
  );
}
