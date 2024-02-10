import React from "react";
import images from "../../services/images";

export default function Header() {
  return (
    <div>
      <div className="bg-black flex p-4">
        <div className="w-full flex justify-center text-white gap-2">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <div className="font-bold border-b h-5">ShopNow</div>
        </div>
        <div className="w-12p text-white flex gap-4 flex items-center ">
          English
          <img src={images.whitearrowndown} alt="" className="w-4 h-3 " />
        </div>
      </div>
      <div className=" pt-10 pb-10 items-center flex border-b">
        <div
          className=" w-20p font-bold text-2xl
      flex justify-center "
        >
          <div className="text-3xl">Exclusive</div>
        </div>
        <div className=" w-50p flex justify-center gap-10 text-2xl">
          <div className="">Home</div>
          <div className="">Contact</div>
          <div className=""> About</div>
          <div className="">Sign up</div>
        </div>
        <div className="flex w-25p justify-end  items-center gap-10">
          <div className="bg-placeholdergray w-70p flex items-center gap-2 shadow-custom">
            <input
              type="text"
              className="h-10 w-full bg-placeholdergray focus:outline-none ml-4 pb-1 "
              placeholder="What are you Looking for  "
            />
            <img src={images.search} alt="" className="w-5 h-5 mr-4" />
          </div>
          <img src={images.heart} alt="" className="h-6 w-7" />
          <img src={images.Cart} alt="" className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
}
