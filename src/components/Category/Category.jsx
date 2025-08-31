import React from "react";
import Heading from "../Heading/Heading";

import FruitsCat from "../../assets/fruits-and-veggies.png";
import DairyCat from "../../assets/dairy-and-eggs.png";
import SeaFoodCat from "../../assets/meat-and-seafood.png";
import Button from "../Button/Button";

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitsCat,
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyCat,
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: SeaFoodCat,
  },
];

const renderCards = category.map((card) => {
  return (
    <div className="flex-1 basis-[300px] mt-10" key={card.id}>
      {/* card image */}
      <div className="w-full h-[10vh] md:h-[30vh] relative">
        <img
          src={card.image}
          alt="category image"
          className="absolute -bottom-12"
        />
      </div>

      {/* card content */}
      <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
        <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
        <p className="text-zinc-600 mt-3 mb-6 md:mb-9">{card.description}</p>
        <Button text="See All" />
      </div>
    </div>
  );
});

export default function Category() {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20 ">
        <Heading orangeText={"Shop"} blackText={"by Category"} />

        {/* category cards */}
        <div className="flex flex-wrap items-center gap-10 mt-12 md:mt-15">
          {renderCards}
        </div>
      </div>
    </section>
  );
}
