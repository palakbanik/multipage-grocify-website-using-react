import React from "react";
import Heading from "../Heading/Heading";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1 />,
    title: "Sourcing",
    para: "It is a long established fact that a reader",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2 />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3 />,
    title: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4 />,
    title: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <BsTruck />,
  },
];

export default function Process() {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="w-fit mr-auto">
          <Heading orangeText={"Our"} blackText={"Process"} />
        </div>

        <div className="lg:flex items-center justify-center mt-10 md:pt-20 lg:pt-50">
          {steps.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col items-center gap-6 ${
                item.id % 2 === 0 ? "md:-mt-70" : ""
              }`}
            >
              <span className="text-8xl text-zinc-800 w-18 h-18 rounded-full border-2 border-dashed flex items-center justify-center mt-10 ">
                {item.number}
              </span>

              <div className="flex items-center gap-7">
                <span className="flex items-center justify-center w-15 h-15 rounded-full text-3xl bg-gradient-to-b from-orange-400 to-orange-500 text-white">
                  {item.icon}
                </span>

                <div className="flex-1">
                  <h4 className="text-zinc-800 text-2xl font-bold">
                    {item.title}
                  </h4>
                  <p className="text-zinc-600 mt-2">{item.para}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
