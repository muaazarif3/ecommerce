import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { MdOutlineCoPresent } from "react-icons/md";
import { RiLoginCircleFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {

  let [hidden , setHidden] = useState(true)
  const cartItems = useSelector((state) => state.cartSlice.items);
  const orderItems = useSelector((state) => state.orderSlice.orders);


  let handleOnClick = () => {
    setHidden(prevState => !prevState);
  }
    

  return (
    <header className="flex justify-between px-10 py-8 items-center">
      <Link to="/" className="logo krona text-2xl">
        Wavey
      </Link>
      <nav className="flex gap-8 items-center">
        <div className="icons flex gap-4 text-txtColor text-2xl cursor-pointer">
          <Link to={"cart"}>
            {cartItems.length === 0 ? (
              <IoCart />
            ) : (
              <FaCartPlus className="text-red-600" />
            )}
          </Link>
          <div className=" relative">
            <MdOutlineCoPresent onClick={handleOnClick} />
            <div className={`absolute top-5 max-md:top-10 max-md:right-[-80%] right-2 w-[42vw] max-md:w-[90vw] h-auto px-4 py-2 bg-[#fff] border-[1px] border-gray-400 border-opacity-60 ${hidden === true ? 'hidden' : 'visible'}`}>
              <h2>Order History</h2>
              {orderItems.length === 0 ? (
                <p>No orders available</p>
              ) : (
                <div>
                  {orderItems.map((item, index) => (
                    <div key={index} className="order-item flex mt-2  gap-10 items-center">
                      <img
                        src={item.orderImage}
                        alt={item.orderName}
                        className="w-12 h-12 object-contain border-[1px] border-gray-400 border-opacity-60 object-center rounded-full"
                      />
                      <div className="flex flex-col justify-start w-[50%]">
                        <h3 className="text-[16px] leading-tight m-0">{item.orderName.split(" ").slice(0, 3).join(" ")}</h3>
                        <p className="text-[12px]">Quantity: {item.quantity}</p>

                      </div>
                      <div>
                        <p className="text-[12px] m-0 ml-10">Total Price: ${item.totalOrderPrice}</p>
                     
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
