import React from 'react'
import { FaPowerOff} from 'react-icons/fa'
import { Link } from 'react-router-dom'


function AdminHeader() {
  return (
    <>

        {/* logo */}
      <nav className='px-5 py-3 flex items-center'>
        {/* logo */}
        <div className='flex items-center'>
          <img width={"100px"} height={"100px"} src="https://pngfre.com/wp-content/uploads/book-png-image-pngfre-26-300x264.png" alt="" />
          <h1 className='font-bold text-2xl ms-4'>BOOKSTORE</h1>
        </div>
        {/* login */}
        <div className='ms-auto'>
         <Link to={"/login"}>
            <button  className='flex justify-between items-center border border-black rounded px-4 py-2 ms-3 
                      hover:bg-black hover:text-white'><FaPowerOff className='me-3' />Logout</button>
         </Link>
        </div>
      </nav>

    
    </>
  )
}

export default AdminHeader