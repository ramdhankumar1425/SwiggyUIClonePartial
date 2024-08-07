import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "./Card";

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
  {
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Raajbagh Restaurant",
    offer: "60% OFF UPTO ₹110",
    rating: 3.8,
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
    rating: 3.9,
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
    rating: 4.1,
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
    rating: 4.2,
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
    rating: 4.3,
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
    rating: 4.4,
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
    rating: 4.5,
    minTime: 30,
    maxTime: 35,
    cat: "North Indian, Biryani, Tandoor",
    location: "Chindwara Locality",
  },
];

function OnlineDelivery() {
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
          <div className="w-[90%]">
            <h2 className="font-extrabold max-h-28px text-2xl">
              Restaurants with online food delivery in Chhindwara
            </h2>
          </div>
          <div className=" grid grid-cols-4 mt-5 overflow-hidden gap-5">
            {resData.map((res, index) => {
              return <Card obj={res} left={left} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default OnlineDelivery;
