import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

export default function Footer() {
  const company = ["About", "FAQ's"];
  const support = ["Support center", "Feedback", "Contact us"];

  return (
    <footer className="bg-zinc-100">
      <div className="max-w-[1400px] mx-auto py-20 px-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-10 md:gap-10 lg:gap-20">
          <div className="flex flex-col gap-5">
            <a href="#" className="text-3xl font-bold">
              Gr<span className="text-orange-500">O</span>cify
            </a>

            <p className="text-zinc-600 md:mt-6 max-w-[350px]">
              Bred for a high content of beneficial substances. Our products are
              all fresh and healthy.
            </p>

            <p className="text-zinc-800 md:mt-6">
              2025 &copy; All Right Reserved
            </p>
          </div>

          <ul className="flex flex-col gap-5 md:-mt-3 lg:-mt-9">
            <li>
              <h4 className="text-2xl font-bold text-zinc-800">Company</h4>
            </li>

            {company.map((item, index) => (
              <li
                key={index}
                className="text-zinc-800 hover:text-orange-500 cursor-pointer md:mt-8"
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-5 mt-1">
            <li>
              <h4 className="text-2xl font-bold text-zinc-800">Support</h4>
            </li>

            {support.map((item, index) => (
              <li
                key={index}
                className="text-zinc-800 hover:text-orange-500 cursor-pointer md:mt-5"
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-5 md:-mt-13">
            <li>
              <h4 className="text-2xl font-bold text-zinc-800">
                Stay Connected
              </h4>
            </li>

            <p className="text-zinc-800">
              Questions of Feedback? <br />
              we'd love to hear from you.
            </p>

            <div className="flex items-center gap-5 w-[60%] md:w-[80%] lg:w-full bg-white rounded-lg">
              <input
                type="text"
                className="w-full h-12 border-none outline-none px-3 text-zinc-800"
                placeholder="Email address"
              />
              <button className="bg-orange-500 rounded-lg mr-1 text-xl p-2 cursor-pointer text-white">
                <MdArrowForwardIos className=" " />
              </button>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}
