import React, { useState } from "react";
import images from "../../services/images";
import Rating from "react-rating";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Productlist() {
  return (
    <div className="pb-10 pt-6">
      <div className="pt-10 bg-placeholdergray flex w-18p h-72 items-center justify-center">
        <div className="relative">
          <div className="absolute bottom-48 left-48">
            <div className="flex bg-white w-10 items-center justify-center h-10 rounded-full">
              <img src={images.heart} alt="" className="w-4 h-4" />
            </div>
          </div>
          <div className="absolute bottom-36 left-48">
            <div className="flex bg-white w-10 items-center justify-center h-10 rounded-full">
              <img src={images.eye} alt="" className="w-6 h-6" />
            </div>
          </div>
          <img src={images.controller} alt="" className="h-40" />
          <div className="absolute right-48 bottom-48 mb-4 bg-red-500 text-white text-sm w-32p justify-center rounded-md h-7 items-center flex">
            -40%
          </div>
        </div>
      </div>
      <div className="font-semibold">HAVIT HV-G92 Gamepad</div>
      <div className="flex gap-4">
        <div className="text-red-500 font-semibold">$120</div>
        <div className="line-through opacity-60">$160</div>
      </div>
      <div className="flex gap-4">
        <div>
          <Rating
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            fractions={2}
          />
        </div>
        <div>(Review)</div>
      </div>
    </div>
  );
}
