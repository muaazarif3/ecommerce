import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import PaymentForm from "./PaymentForm";





const DeliveryForm = ({ check ,  handleDeliveryFormSubmit }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10,15}$/, "Phone number must be between 10 to 15 digits")
      .required("Phone number is required"),
    city: Yup.string().required("City is required"),
    address: Yup.string().required("Address is required"),
    zipCode: Yup.string()
      .matches(/^[0-9]{5}$/, "Invalid zip code")
      .required("Zip code is required"),
  });

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
      {!isFormSubmitted ? (
        <>
          <h1 className="text-2xl font-bold mb-6 text-center">
            Delivery Details
          </h1>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              city: "",
              address: "",
              zipCode: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert("Delivery Form Submitted!");
                setIsFormSubmitted(true); // Mark the form as submitted
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.name && touched.name && (
                      <div className="text-red-600">{errors.name}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.email && touched.email && (
                      <div className="text-red-600">{errors.email}</div>
                    )}
                  </div>
                </div>

                {/* Phone and City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.phone && touched.phone && (
                      <div className="text-red-600">{errors.phone}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.city}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.city && touched.city && (
                      <div className="text-red-600">{errors.city}</div>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {errors.address && touched.address && (
                    <div className="text-red-600">{errors.address}</div>
                  )}
                </div>

                {/* Zip Code */}
                <div>
                  <label htmlFor="zipCode" className="block text-gray-700">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.zipCode}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {errors.zipCode && touched.zipCode && (
                    <div className="text-red-600">{errors.zipCode}</div>
                  )}
                </div>

                {/* Submit Button */}

                {check === 0 ? (
                  <button
                    type="submit"
                    disabled
                    className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg opacity-50 cursor-not-allowed"
                  >
                    Proceed
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full text-white font-bold py-3 rounded-lg transition duration-300 
                ${
                  isSubmitting
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
                  >
                    Proceed
                  </button>
                )}
              </form>
            )}
          </Formik>
        </>
      ) : (
        <PaymentForm handleDeliveryFormSubmit={handleDeliveryFormSubmit} />
      )}
    </div>
  );
};

export default DeliveryForm;
