import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white">
      <nav className="max-w-[1400px] mx-auto px-10 h-[14vh] flex justify-between items-center ">
        {/* logo */}
        <a href="#" className="text-3xl font-bold">
          Gr<span className="text-orange-500">O</span>cify
        </a>

        {/* desktop menu */}
        <ul className="flex items-center gap-x-15">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-500 duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 duration-200"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 duration-200"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 duration-200"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
