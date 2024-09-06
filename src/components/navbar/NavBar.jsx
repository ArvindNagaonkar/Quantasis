import { useState, useRef, useEffect } from "react";
import NavItem from "./NavItem";
import SubService from "./subservice";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const mobileNavRef = useRef(null);

  // Close mobile navigation when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="items-center border-b-2">
      <div className="flex items-center justify-between font-medium lg:mx-12 xl:mx-36">
        <div className="z-50 mx-5 flex w-full items-center justify-between md:w-auto">
          <p className="my-2 text-2xl font-bold text-[#7E35DE] md:cursor-pointer">
            Quantasis
          </p>
          <div
            className="z-30 text-3xl md:hidden"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="hidden items-center text-lg md:flex">
          <li>
            <NavItem
              onClick={() => setDrop(true)}
              mouseEnter={() => setDrop(true)}
              mouseLeave={() => setDrop(false)}
            >
              Services
            </NavItem>
            {drop && (
              <div
                onMouseEnter={() => setDrop(true)}
                onMouseLeave={() => setDrop(false)}
              >
                <SubService />
              </div>
            )}
          </li>
          <li>
            <NavItem>Blog</NavItem>
          </li>
          <li>
            <NavItem>Career</NavItem>
          </li>
          <li>
            <NavItem>Contact us</NavItem>
          </li>
        </ul>
        {/* Mobile nav */}
        <ul
          ref={mobileNavRef}
          className={`fixed bottom-0 top-0 z-30 w-[80%] overflow-y-auto bg-white py-24 pl-4 duration-500 sm:w-[70%] md:hidden ${open ? "left-0" : "left-[-100%]"}`}
        >
          <li>
            <NavItem
              onClick={() => setDrop(true)}
              mouseEnter={() => setDrop(true)}
              mouseLeave={() => setDrop(false)}
            >
              Services
            </NavItem>
            {drop && (
              <div
                onMouseEnter={() => setDrop(true)}
                onMouseLeave={() => setDrop(false)}
              >
                <SubService className="mobile" />
              </div>
            )}
          </li>
          <li>
            <NavItem>Blog</NavItem>
          </li>
          <li>
            <NavItem>Career</NavItem>
          </li>
          <li>
            <NavItem>Contact us</NavItem>
          </li>
        </ul>
      </div>
    </header>
  );
}
