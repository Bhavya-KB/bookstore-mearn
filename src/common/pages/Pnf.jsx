import React from 'react'
import { Link } from "react-router-dom";

function Pnf() {
  return (
    <>
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-6">
      <img
        src="https://assets-v2.lottiefiles.com/a/6a21fb9a-1178-11ee-a809-cbf4c1cb708c/KS4fSTQC7T.gif" 
        alt="Page not found"
        className="w-90 mb-6 "
      />
     
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Back Home
      </Link>
    </div>

    </>
  )
}

export default Pnf