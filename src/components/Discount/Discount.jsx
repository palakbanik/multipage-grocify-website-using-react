import React from "react";
import Button from "../Button/Button";
import FreshFruits from "../../assets/fresh-fruits.png";

export default function Discount() {
  return (
    <section
      className="bg-zinc-100 overflow-hidden bg-right bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${FreshFruits})` }}
    >
      <div className="bg-zinc-100 md:bg-transparent flex flex-col md:flex-row max-w-[1400px] mx-auto p-10">
        <span className="text-6xl md:text-7xl lg:text-9xl font-bold text-orange-500 transform md:-rotate-90 h-fit md:self-center">
          20%
        </span>

        <div className="max-w-[400px] lg:max-w-[700px]">
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-800">
            First Order Discount!
          </h3>
          <p className="text-zinc-600 my-6 ">
            Enjoy an exclusive first order discount on our grocery website! Shop
            fresh essentials and save big on your first purchase. Fast delivery
            and quality guaranteed.
          </p>
          <Button text={"Get a Discount"} />
        </div>
      </div>
    </section>
  );
}
