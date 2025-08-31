import React from "react";
import Grocery from "../../assets/grocery.png";
import Button from "../Button/Button";

export default function Hero() {
  return (
    <section>
      <div className=" min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center pt-35 md:pt-25">
        {/* hero content */}
        <div className="flex-1">
          <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full">
            Export Best Quality...
          </span>

          <h1 className="text-5xl/14 sm:text-6xl/16 md:text-7xl/20 font-bold mt-4">
            Tasty Organic <span className="text-orange-500">Fruits</span> &
            <span className="text-orange-500">Veggies</span>
            <br /> In Your City
          </h1>

          <p className="text-zinc-600 text-base md:text-lg max-w-[530px] mt-5 mb-10">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>

          <Button text="Shop Now" />
        </div>

        {/* hero image */}
        <div className="flex-1">
          <img src={Grocery} alt="grocery image" />
        </div>
      </div>
    </section>
  );
}
