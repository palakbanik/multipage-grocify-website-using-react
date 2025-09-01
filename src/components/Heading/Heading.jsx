import React from "react";

export default function Heading({ orangeText, blackText }) {
  return (
    <div className="w-fit mx-auto">
      <h2 className="text-zinc-800 text-3xl md:text-5xl font-bold">
        <span className="text-orange-500">{orangeText}</span> {blackText}
      </h2>
      <div className="w-24 md:w-34 h-1 bg-orange-300 mt-2 md:mt-6 ml-auto"></div>
    </div>
  );
}
