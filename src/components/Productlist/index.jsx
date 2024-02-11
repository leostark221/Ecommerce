import React from "react";
import images from "../../services/images";
import Rating from "react-rating";

export default function ProductList({ Howmepagedata, sliderPosition }) {
  return (
    <div className="pb-10 pt-6 flex overflow-x-hidden">
      {Howmepagedata.map((item, index) => (
        <div
          key={index}
          className={`slider-item ${index === sliderPosition ? "active" : ""}`}
        >
          <div className="flex flex-wrap mr-5 overflow-x-hidden">
            <div className="pt-10 bg-placeholdergray  flex relative h-80 items-center justify-center mb-8">
              <div className="">
                <div className="bg-red-500 h-8 w-16 flex justify-center items-center relative bottom-36 left-4 text-white rounded-md">
                  40%
                </div>
              </div>
              <div className="w-full overflow-hidden">
                <div className="w-80p overflow-hidden">
                  <img src={item.product} alt="" />
                </div>
              </div>
              <div className="relative bottom-28 right-4">
                <div className="bg-white w-12 h-12 flex mb-2 items-center justify-center rounded-full">
                  <img src={images.heart} alt="" className="h-6 w-6" />
                </div>
                <div className="bg-white w-12 h-12 flex items-center justify-center rounded-full">
                  <img src={images.eye} alt="" className="h-6 w-6" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-semibold">{item.name}</div>
              <div className="flex gap-4">
                <div className="text-red-500 font-semibold">{item.price}</div>
                <div className="line-through opacity-60">{item.discount}</div>
              </div>
              <div className="flex gap-4">
                <div className="text-yellow-500 text-xs">
                  <Rating
                    emptySymbol={<i className="far fa-star fa-2x"></i>}
                    fullSymbol={<i className="fas fa-star fa-2x"></i>}
                    fractions={2}
                    initialRating={item.initialrating}
                  />
                </div>
                <div>(Review)</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
