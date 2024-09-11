import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { LuCircleDollarSign } from "react-icons/lu";

function Content() {
  return (
    <>
      <div className="w-full h-[60vh] relative">
        <img
          src="./Images/new.jpg"
          className="w-full h-full object-cover"
          alt=""
        />

        <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center gap-4">
          <h2 className="text-center text-5xl max-md:text-2xl text-txtColor krona leading-tight">
            Be natural, <br />
            be beautiful,
            <br />
            be you
          </h2>

         
        </div>
      </div>
      <div className="w-full  flex max-md:flex-col mt-10">
        <div className="w-1/2 max-md:w-full h-auto ">
          <img
            src="./Images/bgnone.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col w-1/2 max-md:w-full justify-start py-10">
          <h2 className="text-5xl krona max-md:text-2xl max-md:px-4">Elegance what you deserves</h2>
          <p className="text-gray-500 text-[16px]  max-md:w-[90%] max-md:px-4 w-[70%] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nulla,
            quis error nemo totam sit praesentium tenetur expedita officia
            minima ullam non eum amet ducimus iusto inventore recusandae
            dignissimos? Omnis magnam explicabo quasi ut.
          </p>
          <p className="text-gray-500 text-[16px] max-md:px-4 max-md:w-[90%] w-[70%] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nulla,
            quis error nemo totam sit praesentium tenetur expedita officia
            minima ullam non eum amet ducimus iusto inventore recusandae
            dignissimos? Omnis magnam explicabo quasi ut.
          </p>
        </div>
      </div>
      <section className="text-gray-600 body-font px-10">
        <div className="container px-5 py-14 mx-auto">
      
            <h1 className="krona sm:text-3xl text-2xl font-medium title-font text-center text-gray-900">
              Why Choose Us
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3 gap-2">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow text-white flex-shrink-0  relative">
                  <CiDeliveryTruck  className=" absolute left-3 text-3xl text-txtColor top-2" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Delivery
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="mt-3 text-yellow inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3 gap-2">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow text-white flex-shrink-0 relative">
                  <FaHeart  className=" absolute left-3 text-3xl text-txtColor top-2" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Products
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="mt-3 text-yellow inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3 gap-2">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow text-white flex-shrink-0 relative">
                  <LuCircleDollarSign className=" absolute left-3 text-3xl text-txtColor top-2" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Pyment
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="mt-3 text-yellow inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
       
      </section>
    </>
  );
}

export default Content;
