import { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu3 } from "react-icons/tb";
import { RiCloseLargeLine } from "react-icons/ri";

export default function Navbar() {
  const navLists = ["Home", "About Us", "Process", "Contact Us"];

  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "shadow-xl" : ""
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">
        {/* logo */}
        <a href="#" className="text-3xl font-bold">
          Gr<span className="text-orange-500">O</span>cify
        </a>

        {/* desktop menu */}
        <ul className="md:flex items-center gap-x-15 hidden">
          {navLists.map((list, index) => {
            return (
              <li key={index}>
                <a
                  href="#"
                  className="font-semibold tracking-wider hover:text-orange-500  duration-200"
                >
                  {list}
                </a>
              </li>
            );
          })}
        </ul>

        {/* nav action */}
        <div className="flex items-center gap-x-5">
          {/* input field */}
          <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 rounded-full focus:outline-none text-zinc-700"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 hover:bg-gradient-to-b hover:from-orange-500 hover:to-orange-400 text-white text-xl w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-alls duration-300">
              <IoSearch />
            </button>
          </div>

          {/* heart icon */}
          <a href="#">
            <GoHeartFill className="text-2xl text-zinc-800" />
          </a>
          {/* shopping bag icon */}
          <a href="#">
            <HiShoppingBag className="text-2xl text-zinc-800" />
          </a>
          {/* hamburger */}
          <a
            href="#"
            className="text-zinc-800 text-2xl md:hidden"
            onClick={toggleMenu}
          >
            {showMenu ? <RiCloseLargeLine /> : <TbMenu3 />}
          </a>
        </div>

        {/* mobile menu */}
        <ul
          className={`flex flex-col gap-y-12 bg-orange-600/15 backdrop-blur-xl rounded-xl  p-10 items-center gap-x-15 md:hidden absolute top-30 transition-all duration-200 ${
            showMenu ? "left-1/2" : "-left-full"
          }  transform -translate-x-[50%] shadow-xl`}
        >
          {navLists.map((list, index) => {
            return (
              <li key={index}>
                <a
                  href="#"
                  className="font-semibold tracking-wider hover:text-orange-500 duration-200"
                >
                  {list}
                </a>
              </li>
            );
          })}

          <li className="flex p-1 border-2 border-orange-500 rounded-full md:hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 rounded-full focus:outline-none text-zinc-700"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 hover:bg-gradient-to-b hover:from-orange-500 hover:to-orange-400 text-white text-xl w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-alls duration-300">
              <IoSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
