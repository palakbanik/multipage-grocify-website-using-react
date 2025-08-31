import React from "react";

export default function Button({ text }) {
  return (
    <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg text-base md:text-lg transition-all duration-300 hover:scale-105 hover:from-orange-500 hover:to-orange-400  cursor-pointer">
      {text}
    </button>
  );
}
