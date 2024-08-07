import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiInbox2Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpBuoy } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  const [isSideMenuOn, setIsSideMenuOn] = useState(false);

  const toogleSideMenu = () => {
    if (isSideMenuOn === true) {
      console.log("if");
      setIsSideMenuOn(false);
    } else {
      console.log("else");
      setIsSideMenuOn(true);
    }
  };

  return (
    <>
      <div
        className="bg-blend-overlay bg-black w-full h-full fixed duration-500 z-10"
        style={{
          opacity: isSideMenuOn === true ? "0.3" : "0",
          visibility: isSideMenuOn === true ? "visible" : "hidden",
        }}
        onClick={toogleSideMenu}
      ></div>
      <div>
        <div
          className="h-full w-[500px] bg-white bg-blend-overlay absolute duration-[300ms] z-20"
          style={{
            left: isSideMenuOn ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header
        className="w-full justify-center flex "
        style={{ boxShadow: "0px 1px 35px rgba(0,0,0,0.1)" }}
      >
        <div className="w-[1200px] h-[80px] flex items-center">
          <div className="mx-3">
            <img
              className=" h-[70px] hover:scale-105 cursor-pointer"
              src="https://i.pinimg.com/originals/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.png"
            />
          </div>
          <div className="flex items-center">
            <div>
              <p className="border border-b-black border-white">
                <b>Guwahati</b>
              </p>
            </div>
            <div onClick={toogleSideMenu}>
              <RiArrowDropDownLine className="text-3xl ml-2 cursor-pointer" />
            </div>
          </div>
          <div className="flex ml-auto items-center list-none gap-8">
            <li className="hover:text-[#fc8019] cursor-pointer">
              <RiInbox2Fill className="inline mx-2 text-xl" />
              Swiggy Corporate
            </li>
            <li className="hover:text-[#fc8019] cursor-pointer">
              <IoSearch className="inline mx-2 text-xl" />
              Search
            </li>
            <li className="hover:text-[#fc8019] cursor-pointer">
              <BiSolidOffer className="inline mx-2 text-xl" />
              Offers
              <sup className="text-[10px] text-[#fc8019] p-1 font-bold">
                NEW
              </sup>
            </li>
            <li className="hover:text-[#fc8019] cursor-pointer">
              <IoIosHelpBuoy className="inline mx-2 text-xl" />
              Help
            </li>
            <li className="hover:text-[#fc8019] cursor-pointer">
              <BsPerson className="inline mx-2 text-xl" />
              Sign In
            </li>
            <li className="hover:text-[#fc8019] cursor-pointer">
              <IoCartOutline className="inline mx-2 text-xl" />
              Cart
            </li>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
