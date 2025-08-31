import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

export default function ProductsCard({ id, name, price, image }) {
  return (
    <div key={id} className="bg-zinc-100 p-5 rounded-xl">
      {/* icon part */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-3xl text-zinc-300">
          <FaHeart />
        </span>

        <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white py-2 px-2 rounded-md text-xl">
          <FaPlus />
        </button>
      </div>

      {/* img part */}
      <div className="w-full h-50">
        <img src={image} className="w-full h-full object-contain" />
      </div>

      {/* description part */}
      <div className="flex flex-col items-center gap-2 mt-4">
        <h3 className="text-2xl">{name}</h3>
        <p className="text-2xl font-bold">$ {price.toFixed(2)}</p>
        <Button text={"Shop Now"} />
      </div>
    </div>
  );
}
