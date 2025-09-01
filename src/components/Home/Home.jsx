import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Values from "../Values/Values";
import Products from "../Products/Products";
import Discount from "../Discount/Discount";
import Process from "../Process/Process";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Values />
      <Products />
      <Discount />
      <Process />
    </>
  );
}
