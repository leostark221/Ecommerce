import React from "react";
import images from "../../services/images";
import Productlist from "../../components/Productlist";

export default function Home() {
  const Howmepagedata = [
    {
      product: images.controller,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      discount: "160",
      initialrating: 4,
      reviews: "(88)",
    },
    {
      product: images.keyboard,
      name: "AK-900 Wired Keyboard",
      price: "$960",
      discount: "$1160",
      initialrating: 4,
      reviews: "(75)",
    },
    {
      product: images.Monitor,
      name: "IPS LCD Gaming Monitor",
      price: "$370",
      discount: "$400",
      initialrating: 4,
      reviews: "(99)",
    },
    {
      product: images.Chair,
      name: "S-Series Comfort Chair",
      price: "$375",
      discount: "$400",
      initialrating: 4,
      reviews: "(99)",
    },
  ];

  return (
    <div className=" w-full  ml-32 ">
      <div className="flex">
        <div className=" w-20p">
          <div className="flex-col flex  border-r pt-10 space-y-6">
            <div className="flex w-full justify-between  items-center  ">
              <div className="text-xl">Woman's Fashion</div>
              <div className=" w-32p flex  justify-center">
                <img src={images.arrowright} alt="" className="h-4" />
              </div>
            </div>
            <div className="flex w-full justify-between  items-center  ">
              <div className="text-xl">Men’s Fashion</div>
              <div className=" w-32p flex  justify-center">
                <img src={images.arrowright} alt="" className="h-4" />
              </div>
            </div>
            <div className="flex w-full justify-between  items-center  ">
              <div className="text-xl">Electronics</div>
              <div className=" w-32p flex  justify-center">
                <img src={images.arrowright} alt="" className="h-4" />
              </div>
            </div>
            <div className="flex w-full justify-between  items-center  ">
              <div className="text-xl">Home & Lifestyle</div>
              <div className=" w-32p flex  justify-center">
                <img src={images.arrowright} alt="" className="h-4" />
              </div>
            </div>
            <div className="flex w-full justify-between  items-center  ">
              <div className="text-xl">Medicine</div>
              <div className=" w-32p flex  justify-center">
                <img src={images.arrowright} alt="" className="h-4" />
              </div>
            </div>
            <div className="flex w-full justify-between  items-center  ">
              <div className="text-xl">Sports & Outdoor</div>
              <div className=" w-32p flex  justify-center">
                <img src={images.arrowright} alt="" className="h-4" />
              </div>
            </div>
            <div className="flex w-full justify-between  items-center  ">
              <div className="text-xl">Baby’s & Toys</div>
              <div className=" w-32p flex  justify-center">
                <img src={images.arrowright} alt="" className="h-4" />
              </div>
            </div>
            <div className="flex w-full justify-between  items-center  ">
              <div className="text-xl">Groceries & Pets</div>
              <div className=" w-32p flex  justify-center">
                <img src={images.arrowright} alt="" className="h-4" />
              </div>
            </div>
            <div className="flex w-full justify-between  items-center  ">
              <div className="text-xl">Health & Beauty</div>
              <div className=" w-32p flex  justify-center">
                <img src={images.arrowright} alt="" className="h-4" />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full p-10">
          <div className="pb-10  bg-black w-88p pb-14">
            <img src={images.phoneadd} alt="" className="h-96 w-full pr-48  " />
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-40">
        <div className="w-full items-center gap-4  flex">
          <div className="bg-red-500 text-red-500 rounded-md w-5 h-10 "> .</div>
          <div className="text-red-500 font-semibold text-lg"> Today's</div>
        </div>
        <div className="flex items-center w-full">
          <div className="pt-4 text-3xl font-semibold">Flash Sales</div>
          <div>Timer</div>
        </div>
        <div>
          <Productlist Howmepagedata={Howmepagedata}/>
        </div>
      </div>
    </div>
  );
}
