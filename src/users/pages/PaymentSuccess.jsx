import React from "react";
import Header from "../../common/components/Header";
import Footer from "../../common/components/Footer";
import { Link } from "react-router-dom";

function PaymentSuccess() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 py-40 px-20 items-center justify-center">
        <div>
          <h1 className="text-5xl text-green-700">Congratulations!!!</h1>
          <p className="mt-5 mb-10">
            Thank you for shopping with Bookstore .Hope u have a good time with
            us
          </p>
          <Link
            to={"/all-books"}
            className="px-4 py-3 bg-blue-600 text-white hover:border hover:border-blue-500 hover:bg-white hover:text-blue-500"
          >
            Explore more books
          </Link>
        </div>
        <div>
          <img
            src="https://cdn.dribbble.com/userupload/15097592/file/original-11af0dab65a0913fe4ea1d71d9d48f4a.gif"
            alt=""
            className="w:3/4 ms-30"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PaymentSuccess;
