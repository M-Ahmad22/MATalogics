import React from "react";
import MapLayer from "../../assets/MapLayer.png";
import PakFlag from "../../assets/PakFlag.svg";

const Map = () => {
  return (
    <section className="Map w-full h-[399px] relative bg-[#fff] flex justify-center items-center relative">
      <div className="w-full h-full flex justify-center items-center">
        <img src={MapLayer} alt="" />
      </div>
      <div className="absolute flex justify-center items-center flex-col gap-[10px]">
        <div className="flex justify-center items-center gap-[20px]">
          {" "}
          <img src={PakFlag} alt="" className="w-[17.906px] h-[14.116px]" />
          <span className="text-[#1D2939] font-outfit text-[18px] font-semibold leading-[22.5px] tracking-[-0.36px]">
            Pakistan
          </span>
        </div>
        <span className="text-[#1D2939] font-outfit text-[18px] font-normal leading-[22.5px] tracking-[0.2px]">
          +92 309 6311196
        </span>
      </div>
    </section>
  );
};

export default Map;
