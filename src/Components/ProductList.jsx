import React, { useState } from "react";
import { IoCart } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart } from "../feature/cartSlice";

function ProductList({ data, loading }) {
  const dispatch = useDispatch();
  const [addedProducts, setAddedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // State to track selected product

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAddedProducts((prevState) => [...prevState, product.id]);
  };

  const handleSeeMore = (product) => {
    setSelectedProduct(product); // Set the selected product when 'See more' is clicked
  };

  const handleCloseModal = () => {
    setSelectedProduct(null); // Close the modal
  };

  return (
    <>
      <div className="flex flex-wrap">
        {data.map((value) => {
          const isAdded = addedProducts.includes(value.id);
          return (
            <div key={value.id} className="w-[33%] max-md:w-full">
              <div className="p-4">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-56 md:h-48 w-full object-contain object-center"
                    src={value.image_link}
                    alt={value.name}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {value.brand}
                    </h2>
                    <h1 className="text-[16px] font-medium text-txtColor mb-3 h-[40px]">
                      {value.name}
                    </h1>

                    <div className="flex items-end flex-wrap gap-2  mt-2">
                      <button
                        className={`btn px-3 py-2 capitalize inline-flex items-center md:mb-2 lg:mb-0 gap-2 ${isAdded ? "cursor-not-allowed bg-gray-300" : ""}`}
                        onClick={() =>
                          !isAdded &&
                          handleAddToCart({
                            image: value.image_link,
                            name: value.name,
                            price: value.price,
                            id: value.id,
                          })
                        }
                        disabled={isAdded}
                      >
                        {isAdded ? "Added" : "Add to Cart"}
                        <IoCart />
                      </button>
                      <button
                        className="btn px-3 py-2 capitalize inline-flex items-center md:mb-2 lg:mb-0 gap-2"
                        onClick={() => handleSeeMore(value)} // Show the modal when "See more" is clicked
                      >
                        See more
                      </button>
                      <p className="tracking-widest text-[16px] title-font font-medium text-gray-700 text-end mb-1">
                        {`$${value.price}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

  
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <button
              className="text-gray-500 float-right text-xl"
              onClick={handleCloseModal} // Close the modal
            >
              &times;
            </button>
            <img
              src={selectedProduct.image_link}
              alt={selectedProduct.name}
              className="w-full h-64 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold">{selectedProduct.name}</h2>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Brand:</strong> {selectedProduct.brand}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Category:</strong> {selectedProduct.category}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Description:</strong> {selectedProduct.description.split(" ").slice(0, 30).join(" ")}
            </p>
            <p className="text-lg font-bold text-gray-800">
              Price: ${selectedProduct.price}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductList;
