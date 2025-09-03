import React from "react";
import Heading from "../Heading/Heading";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// images
import customer1 from "../../assets/customer1.jpg";
import customer2 from "../../assets/customer2.jpg";
import customer3 from "../../assets/customer3.jpg";
import customer4 from "../../assets/customer4.jpg";
import customer5 from "../../assets/customer5.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "Food Blogger",
    rating: 3,
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    image: customer1,
  },
  {
    id: 2,
    name: "David Smith",
    profession: "Chef",
    rating: 3,
    para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended",
    image: customer2,
  },
  {
    id: 3,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    rating: 3,
    para: "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
    image: customer3,
  },
  {
    id: 4,
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    rating: 5,
    para: "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
    image: customer4,
  },
  {
    id: 5,
    name: "Alya Zahra",
    profession: "Model",
    rating: 4,
    para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
    image: customer5,
  },
];

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading orangeText={"Customers"} blackText={"Saying"} />

        <div className="py-5 mt-3 flex items-center justify-end gap-3">
          <button className="custom-prev bg-zinc-100 w-10 h-10 rounded-lg text-md flex items-center justify-center cursor-pointer text-zinc-800 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white">
            <SlArrowLeft />
          </button>
          <button className="custom-next bg-zinc-100 w-10 h-10 rounded-lg text-md flex items-center justify-center cursor-pointer text-zinc-800 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white">
            <SlArrowRight />
          </button>
        </div>

        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
          className="mySwiper "
        >
          {reviews.map((review, index) => (
            <SwiperSlide className="bg-zinc-100 p-8 rounded-xl" key={index}>
              <div className="flex gap-5 items-center">
                <div className="w-16 h-16 rounded-full outline-2 outline-offset-4 outline-orange-500 flex items-center justify-center overflow-hidden">
                  <img
                    src={review.image}
                    alt="customer image"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h5 className="text-xl font-bold">{review.name}</h5>
                  <p className="text-zinc-600">{review.profession}</p>
                  <span className="flex items-center gap-1 text-yellow-400 text-xl mt-3">
                    {Array.from({ length: review.rating }, (_, index) => (
                      <FaStar key={index} />
                    ))}
                  </span>
                </div>
              </div>

              <div className="mt-10 min-h-[15vh]">
                <p className="text-zinc-600">{review.para}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
