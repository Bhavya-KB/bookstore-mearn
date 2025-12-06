import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



function Footer() {
  return (
    <>

    <div className='md:grid grid-cols-3 md:gap-9 bg-gray-900 text-white p-10'>

        <div>
            <h3 className='text-bold'>About Us</h3>
            <p className='text-justify mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae facilis nulla omnis. Quisquam expedita fugiat, laudantium earum quae, animi aut sunt a hic, aperiam nam obcaecati tempore excepturi exercitationem pariatur.</p>
        </div>

        <div>
            <h3 className='font-bold'>News Letter</h3>
            <p className='my-5'>Stay Updated without latest Trends</p>

            <div className='flex'>
                <input type="text" placeholder='Enter Email'  className='p-2 bg-white placeholder-gray-500' />
                <button className='bg-yellow-400 p-3'><FaArrowRight /></button>
            </div>
        </div>

        <div>
            <h3>Follow Us</h3>
            <p className='my-5'>Let Us be social</p>

            <div className='flex mt-4'>
                <FaInstagramSquare className='me-3 text-2xl' />
                <FaXTwitter  className='me-3 text-2xl'/>
                <FaFacebookSquare className='me-3 text-2xl' />
                <FaLinkedin  className='me-3 text-2xl' />


            </div>
        </div>

    </div>
    <div className='bg-black p-2 text-center text-white'>
        <p>CopyRight © 2023 All rights reserved | This is website is made with 	&#10084; by Bhavya KB | Luminar Technolab</p>
    </div>
    
    
    </>
  )
}

export default Footer