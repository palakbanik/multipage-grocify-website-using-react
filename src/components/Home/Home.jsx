import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Values from "../Values/Values";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Values />
    </>
  );
}
