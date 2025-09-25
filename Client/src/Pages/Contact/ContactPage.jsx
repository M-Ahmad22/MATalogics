import React, { useEffect } from "react";

import RequestPricing from "../../Components/RequestPricing/RequestPricing";
import Map from "../../Components/Map/Map";
import BookACallForm from "../../Components/TalkToExpert/BookCallForm";

const ContactPage = () => {
  return (
    <>
      <section className="h-auto bg-[#FFF] w-full flex col justify-center items-center mobile:w-full mobile:h-auto medium:w-full medium:h-auto tablet:w-full tablet:h-auto SpecificLarge:w-full SpecificLarge:h-auto ">
        <div className="w-[75%] h-[786px] my-[100px] mt-[160px] flex flex-col items-start mobile:w-full mobile:h-auto mobile:mt-[130px] mobile:items-center tablet:w-full tablet:h-auto tablet:mt-[130px] tablet:items-center medium:w-full medium:h-auto medium:mt-[130px] medium:items-center SpecificLarge:w-[90%] SpecificLarge:h-auto SpecificLarge:mt-[130px]">
          <h1 className="text-[#1E1D28] font-outfit text-[60px] leading-[63px] tracking-[-1.2px] capitalize font-semibold align-self-stretch w-[60%] mb-[50px] mobile:w-[90%] mobile:h-auto mobile:text-[36px] mobile:leading-[45px] mobile:tracking-[-0.8px] tablet:w-[90%] tablet:h-auto tablet:text-[36px] tablet:leading-[45px] tablet:tracking-[-0.8px] medium:w-[90%] medium:h-auto medium:text-[47px] medium:leading-[45px] medium:tracking-[-0.1px] ">
            Let’s bring your vision to life! Book a 15-minute call today.
          </h1>
          <div className="w-full h-[591px] border-1 border-[#E5E7EB] rounded-[10px] mobile:h-auto tablet:h-auto medium:h-auto SpecificLarge:h-auto  medium:w-full">
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
