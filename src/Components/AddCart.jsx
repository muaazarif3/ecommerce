import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../feature/cartSlice";
import DeliveryForm from "./FromVlidation"; // Assuming you meant DeliveryForm component
import { addToOrders } from "../feature/orderSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cartSlice.items);
  const dispatch = useDispatch();

  const handleDeliveryFormSubmit = () => {
    const orders = cartItems.map((item) => ({
      orderImage: item.image,
      orderName: item.name,
      quantity: itemCounters[item.id],
      totalOrderPrice: (item.price * itemCounters[item.id]).toFixed(2),
    }));

    dispatch(addToOrders(orders)); // Dispatching the orders
    console.log("Orders submitted:", orders);
  };



  const [itemCounters, setItemCounters] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  const [totalPrice, setTotalPrice] = useState(0);



  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * itemCounters[item.id];
    }, 0);
    setTotalPrice(total.toFixed(2));
  }, [itemCounters, cartItems]);

  const handleOnMinus = (id) => {
    if (itemCounters[id] === 1) {
      dispatch(removeFromCart(id));
    } else {
      setItemCounters((prevState) => ({
        ...prevState,
        [id]: prevState[id] - 1,
      }));
    }
  };

  const handleOnPlus = (id) => {
    setItemCounters((prevState) => ({
      ...prevState,
      [id]: prevState[id] + 1,
    }));
  };





  return (
    <>
      <div className="w-full px-10 h-auto bg-white max-md:flex-col flex justify-between">
        <div className="w-[55%] max-md:w-full">
          <h2>Delivery Information</h2>
          <div className="rounded-lg p-5 bg-[#fff]">
            {/* Pass the handleDeliveryFormSubmit as a callback */}
            <DeliveryForm check={cartItems.length} handleDeliveryFormSubmit={handleDeliveryFormSubmit} />
          </div>
        </div>
        <div className="w-[40%] max-md:w-full">
          <h2>Order Summary</h2>
          <div className="w-full rounded-lg p-5 bg-[#fff]">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <div className="flex flex-col gap-6 w-full">
                {cartItems.map((item) => (
                  <div
                    className="flex justify-between w-full items-center"
                    key={item.id}
                  >
                    <div className="flex gap-4 items-end">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-contain border-[1px] border-gray-400 border-opacity-60 object-center rounded-full"
                      />
                      <div className="flex flex-col items-start">
                        <p className="text-[14px] leading-tight text-txtColor font-semibold">
                          {item.name.split(" ").slice(0, 3).join(" ")}
                        </p>
                        <p className="text-[14px] text-gray-700 ml-1 mt-1">{`$${(
                          item.price * itemCounters[item.id]
                        ).toFixed(2)}`}</p>
                      </div>
                    </div>
                    <div className="flex w-auto">
                      <div
                        onClick={() => handleOnMinus(item.id)}
                        className="w-8 h-8 border-[1px] border-gray-400 border-opacity-60 bg-white text-txtColor text-[14px] flex items-center justify-center cursor-pointer"
                      >
                        -
                      </div>
                      <div className="w-8 h-8 border-[1px] border-gray-400 border-opacity-60 bg-white text-txtColor text-[14px] flex items-center justify-center">
                        {itemCounters[item.id]}
                      </div>
                      <div
                        onClick={() => handleOnPlus(item.id)}
                        className="w-8 h-8 border-[1px] border-gray-400 border-opacity-60 bg-white text-txtColor text-[14px] flex items-center justify-center cursor-pointer"
                      >
                        +
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <p className="mt-10">Total price: ${totalPrice}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
