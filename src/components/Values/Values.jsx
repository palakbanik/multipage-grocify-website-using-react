import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa";

import Basket from "../../assets/basket-full-vegetables.png";

const value = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaSeedling />,
  },
];

export default function Values() {
  const leftValue = value.slice(0, 2).map((item) => {
    return (
      <div
        key={item.id}
        className="flex md:flex-row-reverse items-center gap-7"
      >
        <div>
          <span className="w-15 h-15 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-3xl text-white">
            {item.icon}
          </span>
        </div>

        <div className="text-left md:text-right ">
          <h3 className="text-3xl font-bold text-zinc-800">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });
  const rightValue = value.slice(2, 4).map((item) => {
    return (
      <div key={item.id} className="flex items-center gap-7">
        <div>
          <span className="w-15 h-15 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-3xl text-white">
            {item.icon}
          </span>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-zinc-800">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading orangeText={"Our"} blackText={"Values"} />

        <div className="flex flex-col md:flex-row gap-10 md:gap-10 mt-15 ">
          {/* left values */}
          <div className="flex flex-col justify-between gap-5">{leftValue}</div>

          {/* center image */}
          <div className="w-1/2 hidden md:flex ">
            <img src={Basket} alt="vegetables image" />
          </div>

          {/* right values */}
          <div className="flex flex-col justify-between gap-5">
            {rightValue}
          </div>
        </div>
      </div>
    </section>
  );
}
