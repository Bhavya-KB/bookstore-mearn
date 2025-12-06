
import React, { useEffect, useState } from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'
import { FaBackward, FaRegEye } from 'react-icons/fa'
import { IoMdCloseCircle } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom'
import { getABookAPI } from '../../service/allAPI'
import SERVERURL from '../../service/ServerURL'


function ViewBook() {

  const [modalStatus, setModalStatus] = useState(false)  //open modal
  const[bookDetail,setBookDetail] = useState({})
  const {id} = useParams()

  const getABook =  async ()=>{
    const token =  sessionStorage.getItem("token")
    const reqHeader = {"Authorization" : `Bearer ${token}`}
    try{
       const result = await getABookAPI(id,reqHeader);
          console.log(result);
          setBookDetail(result.data)

    }
    catch(error){
      console.log(error);
      
    }

  }
  console.log(bookDetail);
  

  useEffect(()=>{
    getABook()

  },[])
  



  return (
    <>
      <Header />

      <div className='m:p-20 p-5 '>
        <div className='shadow w-full md:p-10 p-5'>
          <div className='flex justify-end'>
            <FaRegEye onClick={() => setModalStatus(true)} />
          </div>
          <div className='md:grid grid-cols-[1fr_3fr] w-full'>
            <div>
              <img src={bookDetail?.imageUrl} className=' h-100' alt="" />
            </div>

            <div className='px-4'>
              <h1 className='text-center font-medium text-2xl'>Title:{bookDetail?.title}</h1>
              <p className='text-center text-blue-500'>Author: {bookDetail?.author}</p>
              <div className='md:flex justify-between mt-10'>
                <p>Publisher : {bookDetail?. publisher} </p>
                <p>Languages: {bookDetail?.language} </p>
                <p>No of Pages: {bookDetail?.noofPages} </p>
              </div>
              <div className='md:flex justify-between mt-10'>
                <p>Seller Mail : {bookDetail?.userMail}</p>
                <p>Real Price :{bookDetail?.price} </p>
                <p>ISBN  :{bookDetail?.isbn} </p>
              </div>
              <p className='text-justify mt-10'>
             {bookDetail?.abstract}
              </p>
              <div className='mt-10 flex justify-end'>
                <Link to={"./all-books"} className='flex px-4 py-3 bg-blue-800 rounded text-white hover:bg-white hover:text-blue-800 hover:border hover:border-blue-800' ><FaBackward className='mt-1 me-2' /> Back</Link>
                <button className=' px-4 py-3 bg-green-800 rounded text-white hover:bg-white hover:text-green-800 hover:border hover:border-green-800 ms-5'>Buy ₹</button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {modalStatus &&
        <div className='relative z-10 overflow-y-hidden'>
          <div className='bg-gray-500/75 fixed inset-0'>
            <div className='flex justify-center items-center min-h-screen scroll-auto'>
              <div className='bg-white rounded-2xl md:w-250 w-100'>
                <div className='bg-black text-white flex justify-between items-center p-3'>
                  <h3>Book Images</h3>
                  <button onClick={() => setModalStatus(false)}><IoMdCloseCircle className='text-xl' /></button>
                </div>
                <div className='relative p-5'>
                  <p className='text-blue-600'>Camera click of the book in the hand of seller</p>
                </div>
                <div className='md:flex flex-wrap my-4 overflow-y-hidden'>

       {  bookDetail?.uploadImages.length > 0 ?
       bookDetail?.uploadImages?.map(img => ( 
       <img src={`${SERVERURL}/Imguploads/${img}`} alt="" height={"250px"} width={"250px"} className='mx-2 md:mb-0 mb:2' />

       ))
      
               :
               <p className='font-bold text-red-700 ms-5'>User Upload book images are available...</p>}
               
                </div>
              </div>
            </div>
          </div>
        </div>
      }



      <Footer />

    </>
  )
}

export default ViewBook












//old

// import React, { useState } from 'react'
// import Header from '../../common/components/Header'
// import Footer from '../../common/components/Footer'
// import { FaRegEye } from "react-icons/fa";
// import { FaFastBackward } from "react-icons/fa";

// function ViewBook() {
//   const [modalStatus, setModalStatus] = useState()
//   return (
//     <>
//     <Header/>

//     <div className='md:p-20 p-5 '>
//       <div className='shadow w-full md:p-10 p-5'>
//         <div onClick={()=>setModalStatus(false)} className='flex justify-end'>
//           <FaRegEye />
//         </div>

//         <div className='md:grid grid-cols-[1fr_3fr] w-full'>
//           <div>
//             <img src="https://m.media-amazon.com/images/I/91a1yz32T3L._UF1000,1000_QL80_.jpg" className='w-full h-100' alt="" />
//           </div>
//           <div className='px-4 '> 
//             <h1 className='text-center font-medium text-2xl'>Wings Of Fire</h1>
//             <p className='text-center text-blue-500 '>APJ Abdul Calam (author)</p>

//             <div className='md:flex justify-between mt-10'>
//             <p>Publisher :</p>
//             <p>Language: </p>
//             <p>No of pages:</p>

//           </div>
//           <div className='md:flex justify-between mt-10'>
//             <p>Seller Mail:</p>
//             <p>Real Price: </p>
//             <p>ISBN:</p>
//           </div>
//           <p className='text-justify mt-10'>Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat quos fugit minima sit ut, inventore eum nobis cumque repudiandae aliquid doloribus quidem iusto at, quasi atque. Ducimus, reiciendis fugiat! Quod? ipsum, dolor sit amet consectetur adipisicing elit. Cumque porro non reiciendis, atque neque incidunt rem repellat doloremque tempore itaque placeat vero omnis, eveniet rerum ad quibusdam. In, totam architecto.</p>
//           <div className='mt-10 flex justify-end'>
//             <button className='flex px-4 py-3 bg-blue-800 rounded text-white hover:bg-white hover:text-blue-900 hover:border hover:border-blue-800 '> <FaFastBackward  className='mt-1 me-2'/>Back  </button>
//             <button className='px-4 py-3 bg-green-800 rounded text-white hover:bg-white hover:text-blue-900 hover:border hover:border-green-800 ms-5'>Buy ₹450</button>

//           </div>
//           </div>

          

//         </div>

//       </div>

//     </div>

//     {modalStatus &&
//       <div  className='relative z-10 overflow-y-hideen'>
//       <div className='bg-gray-500/75 fixed inset-0'>
//       <div className='flex justify-center items-center min-h-screen scroll-auto'>
//         <div className='bg-white rounded-2xl md:w-250 w-100'>
//           <div className='bg-black text-white flex justify-between items-center p-5'>
//             <h3>Book Images</h3>
//             <button onClick={()=> setModalStatus(false)} className=''>X</button>

//           </div>
//           <div className='relative p-5 '>
//             <p className=''> Camera click of the  book in the hand of seller</p>

//           </div>

//           <div className='md:flex flex-wrap my-4 overflow-y hidden'>
//             <img src="" alt="" />

//           </div>

//         </div>

//       </div>


//       </div>

//     </div>}
//     <Footer/>

    
//     </>
//   )
// }

// export default ViewBook