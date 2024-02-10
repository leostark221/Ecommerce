import React from "react";
import images from "../../services/images";
import Rating from "react-rating";

export default function ProductList({ Howmepagedata }) {
  return (
    <div className="pb-10 pt-6">
      {Howmepagedata.map((item, index) => (
        <div key={index}>
          <div className="pt-10 bg-placeholdergray flex w-18p h-72 items-center justify-center">
            <div className="relative">
              <div className="absolute bottom-48 left-48">
                <div className="flex bg-white w-10 items-center justify-center h-10 rounded-full">
                  <img src={images.heart} alt="Favorite" className="w-4 h-4" />
                </div>
              </div>
              <div className="absolute bottom-36 left-48">
                <div className="flex bg-white w-10 items-center justify-center h-10 rounded-full">
                  <img src={images.eye} alt="View" className="w-6 h-6" />
                </div>
              </div>
              <img
                src={images.controller}
                alt="Product Image"
                className="h-40"
              />
              <div className="absolute right-48 bottom-48 mb-4 bg-red-500 text-white text-sm w-32p justify-center rounded-md h-7 items-center flex">
                -40%
              </div>
            </div>
          </div>
          <h2 className="font-semibold">HAVIT HV-G92 Gamepad</h2>
          <div className="flex gap-4">
            <div className="text-red-500 font-semibold">$120</div>
            <div className="line-through opacity-60">$160</div>
          </div>
          <div className="flex gap-4">
            <div className="text-yellow-500 text-xs ">
              <Rating
                emptySymbol={<i className="far fa-star fa-2x"></i>}
                fullSymbol={<i className="fas fa-star fa-2x"></i>}
                fractions={2}
                initialRating={4}
              />
            </div>
            <div>(Review)</div>
          </div>
        </div>
      ))}
    </div>
  );
}
