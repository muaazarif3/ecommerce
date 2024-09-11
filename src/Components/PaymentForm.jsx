import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";

function PaymentForm({handleDeliveryFormSubmit}) {
  
    const validationSchema = Yup.object({
        cardNumber: Yup.string()
          .matches(/^[0-9]{16}$/, "Card number must be 16 digits")
          .required("Card number is required"),
        expiryDate: Yup.string()
          .matches(
            /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
            "Expiry date must be in MM/YY format"
          )
          .required("Expiry date is required"),
        cvv: Yup.string()
          .matches(/^[0-9]{3,4}$/, "CVV must be 3 or 4 digits")
          .required("CVV is required"),
      });
    
      return (
        <div className="max-w-3xl mx-auto p-8 max-md:p-0 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Payment Details</h2>
          <p className="text-center mb-4">
            Please enter your payment details to complete the order.
          </p>
          <Formik
            initialValues={{ cardNumber: "", expiryDate: "", cvv: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert("Payment Submitted: ");
                 
                    handleDeliveryFormSubmit();
                    setSubmitting(false);
                
                    // Trigger a page reload
                    // window.location.reload();
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
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cardNumber}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {errors.cardNumber && touched.cardNumber && (
                    <div className="text-red-600">{errors.cardNumber}</div>
                  )}
                </div>
    
                <div className="mb-4">
                  <label className="block text-gray-700">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.expiryDate}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="MM/YY"
                  />
                  {errors.expiryDate && touched.expiryDate && (
                    <div className="text-red-600">{errors.expiryDate}</div>
                  )}
                </div>
    
                <div className="mb-4">
                  <label className="block text-gray-700">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cvv}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {errors.cvv && touched.cvv && (
                    <div className="text-red-600">{errors.cvv}</div>
                  )}
                </div>
    
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition duration-300"
                >
                  Complete Payment
                </button>
              </form>
            )}
          </Formik>
        </div>
      );
}

export default PaymentForm