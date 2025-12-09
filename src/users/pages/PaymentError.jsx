import React from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'
import { Link } from 'react-router-dom'

function PaymentError() {
  return (
    <>
    <Header/>

     <div className="grid grid-cols-2 py-40 px-20 items-center justify-center">
        <div>
          <h1 className="text-5xl text-red-700">Sorry! your payment is unsuccessful</h1>
          <p className="mt-5 mb-10">
            We appologise for the inconvenience caused and appreciate your visit to Bookstore.
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
            src="https://media2.giphy.com/media/AkGPEj9G5tfKO3QW0r/200.gif"
            alt=""
            className="w:3/4 ms-30"
          />
        </div>
      </div>
    <Footer/>

    </>
  )
}

export default PaymentError