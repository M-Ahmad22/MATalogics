import React, { useEffect } from "react";

import RequestPricing from "../../Components/RequestPricing/RequestPricing";
import Map from "../../Components/Map/Map";
import BookACallForm from "../../Components/TalkToExpert/BookCallForm";

const ContactPage = () => {
  return (
    <>
      <section className="h-auto bg-[#FFF] w-full flex col justify-center items-center mobile:w-full mobile:h-auto">
        <div className="w-[75%] h-[786px] my-[100px] mt-[160px] flex flex-col items-start mobile:w-full mobile:h-auto mobile:mt-[130px] mobile:items-center">
          <h1 className="text-[#1E1D28] font-outfit text-[60px] leading-[63px] tracking-[-1.2px] capitalize font-semibold align-self-stretch w-[60%] mb-[50px] mobile:w-[90%] mobile:h-auto mobile:text-[36px] mobile:leading-[45px] mobile:tracking-[-0.8px] ">
            Let’s bring your vision to life! Book a 15-minute call today.
          </h1>
          <div className="w-full h-[591px] border-1 border-[#E5E7EB] rounded-[10px] mobile:h-auto">
            <BookACallForm />
          </div>
        </div>
      </section>

      <RequestPricing />
      <Map />
    </>
  );
};

export default ContactPage;
