import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { featuresPassenger } from "@/constants";
import PassengerAppButton from "../Global/PassengerAppButton";

const PassengerSection = () => {
  return (
    // <section className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="feature">
    //   <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
    <section className="relative pt-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center w-full px-4 lg:w-11/12">
        <div className="justify-center mr-auto w-full lg:w-9/12">
          <h6 className="lg:text-xl font-bold leading-relaxed text-green-500 text-center md:text-start">
            Do you need a ride?
          </h6>
          <h3 className="text-xl lg:text-2xl mb-4 font-bold leading-relaxed text-black-600 text-center md:text-start">
            Become a Passenger
          </h3>

          <ul className="text-black-500 self-start list-inside ml-2">
            {featuresPassenger.map((feature, index) => (
              <li
                className="px-2 relative circle-check custom-list inline-flex items-center mb-6 align-middle"
                key={index}
              >
                <div className="mr-2 -ml-4 mb-5">
                  <FaCheck className=" text-green-500 text-2xl" />
                </div>
                {feature}
              </li>
            ))}
          </ul>
          <PassengerAppButton />
        </div>

        <div className="flex w-full justify-end order-first md:order-none">
          <div className="h-full w-full p-4">
            <Image
              src="/images/passenger.png"
              alt="passenger"
              quality={100}
              height={414}
              width={508}
              unoptimized
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassengerSection;
