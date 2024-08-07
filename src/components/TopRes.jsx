import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "./Card";

const data = [
  {
    name: "Pure-veg",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/22/d94f8a12-6cb9-4b49-ab4d-7e4f452a0f09_PCTile.png",
  },
  {
    name: "Biryani",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
  },
  {
    name: "Pizzas",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
  },
  {
    name: "Cakes",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
  },
  {
    name: "Pav Bhaji",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav%20Bhaji.png",
  },
  {
    name: "Chole Bhature",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole%20bhature.png",
  },
  {
    name: "Gulab Jamun",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Gulab%20jamun.png",
  },
  {
    name: "Kebabs",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Kebabs.png",
  },
  {
    name: "Ice-cream",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chocolate%20icecream.png",
  },
  {
    name: "Rolls",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png",
  },
  {
    name: "Pastry",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png",
  },
  {
    name: "Rasgulla",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Rasgulla.png",
  },
  {
    name: "Paratha",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
  },
  {
    name: "Tea",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/cb5669c8-d6f1-46ab-b24d-3da99b9fa32c_tea.png",
  },
];

const resData = [
  {
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Raajbagh Restaurant",
    offer: "60% OFF UPTO ₹110",
    rating: 3.1,
    minTime: 30,
    maxTime: 35,
    cat: "North Indian, Biryani, Tandoor",
    location: "Chindwara Locality",
  },
  {
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Raajbagh Restaurant",
    offer: "60% OFF UPTO ₹110",
    rating: 3.2,
    minTime: 30,
    maxTime: 35,
    cat: "North Indian, Biryani, Tandoor",
    location: "Chindwara Locality",
  },
  {
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Raajbagh Restaurant",
    offer: "60% OFF UPTO ₹110",
    rating: 3.3,
    minTime: 30,
    maxTime: 35,
    cat: "North Indian, Biryani, Tandoor",
    location: "Chindwara Locality",
  },
  {
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Raajbagh Restaurant",
    offer: "60% OFF UPTO ₹110",
    rating: 3.4,
    minTime: 30,
    maxTime: 35,
    cat: "North Indian, Biryani, Tandoor",
    location: "Chindwara Locality",
  },
  {
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Raajbagh Restaurant",
    offer: "60% OFF UPTO ₹110",
    rating: 3.5,
    minTime: 30,
    maxTime: 35,
    cat: "North Indian, Biryani, Tandoor",
    location: "Chindwara Locality",
  },
  {
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Raajbagh Restaurant",
    offer: "60% OFF UPTO ₹110",
    rating: 3.6,
    minTime: 30,
    maxTime: 35,
    cat: "North Indian, Biryani, Tandoor",
    location: "Chindwara Locality",
  },
  {
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Raajbagh Restaurant",
    offer: "60% OFF UPTO ₹110",
    rating: 3.7,
    minTime: 30,
    maxTime: 35,
    cat: "North Indian, Biryani, Tandoor",
    location: "Chindwara Locality",
  },
];

function TopRes() {
  const [left, setLeft] = useState(0);

  const slide = (dir) => {
    console.log(dir);
    if (dir === "left" && left < 0) setLeft(left + 200);
    else if (dir === "right" && left > -1000) setLeft(left - 200);
  };

  return (
    <>
      <div className="w-[100%] flex justify-center h-[256px] mt-10 mb-[100px]">
        <div className="p-4 w-[1143px] items-center h-full ">
          <div className="mb-4 flex">
            <div className="w-[90%]">
              <h2 className="font-extrabold max-h-28px text-2xl">
                Top restaurant chains in Chhindwara
              </h2>
            </div>
            <div className="flex items-center mx-auto  gap-6">
              <div
                className="bg-[#02060c26] w-[30px] h-[30px] flex justify-center rounded-full items-center cursor-pointer "
                onClick={() => slide("left")}
              >
                <FaArrowLeft />
              </div>
              <div
                className="bg-[#02060c26] w-[30px] h-[30px] flex justify-center rounded-full items-center cursor-pointer "
                onClick={() => slide("right")}
              >
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className=" flex overflow-hidden gap-5">
            {resData.map((res, index) => {
              return <Card obj={res} left={left} key={index} />;
            })}
          </div>
        </div>
      </div>
      <div className="w-[1100px] text-center mx-auto mt-[150px] border max-h-[1px]"></div>
    </>
  );
}

export default TopRes;
