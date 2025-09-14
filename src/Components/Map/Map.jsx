import React from "react";
import MapLayer from "../../Assets/MapLayer.png";

const Map = () => {
  return (
    <section className="Map w-full h-[399px] relative bg-[#fff] flex justify-center items-center">
      <div className="w-full h-full flex justify-center items-center">
        <img src={MapLayer} alt="" />
      </div>
    </section>
  );
};

export default Map;
