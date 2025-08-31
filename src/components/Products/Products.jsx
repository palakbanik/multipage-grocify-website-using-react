import React, { useState } from "react";
import Heading from "../Heading/Heading";
import ProductsList from "../ProductsList/ProductsList";
import ProductsCard from "../ProductsCard/ProductsCard";
import Button from "../Button/Button";

export default function Products() {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTab, setActiveTab] = useState("All");

  let filteredItems =
    activeTab === "All"
      ? ProductsList
      : ProductsList.filter((item) => item.category === activeTab);

  const renderCard = filteredItems.slice(0, 8).map((card, index) => {
    return (
      <div key={index}>
        <ProductsCard
          id={card.id}
          name={card.name}
          price={card.price}
          image={card.image}
        />
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading orangeText={"Our"} blackText={"Products"} />

        {/* tabs */}

        <div className="grid grid-cols-3 md:flex items-center gap-3 justify-center mt-10">
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                className={`px-5 py-2 text-sm md:text-lg cursor-pointer rounded-lg ${
                  activeTab === category
                    ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                    : "bg-zinc-100"
                }`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* product listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 mt-20">
          {renderCard}
        </div>

        <div className="w-fit mx-auto mt-16">
          <Button text={"View All"} />
        </div>
      </div>
    </section>
  );
}
