
import React, { useEffect, useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import AdminHeader from '../components/AdminHeader'
import { approvedBookStatusAPI, getAllBooksAdminAPI,getAllUsersAPI } from '../../service/allAPI'


function AdminBooks() {

  const [bookListStatus, setBookListStatus] = useState(true)
  const [userListStatus, setUserListStatus] = useState(false)

   const [token, setToken] = useState("")


  const[allBooks,setAllBooks]= useState([])
  // const [allUsers, setAllUsers] = useState([])
    const [allUsers, setAllUsers] = useState([])





    const getAllBooksAdmins =async ()=>{
      try{

        const result = await getAllBooksAdminAPI()
        console.log(result);
        setAllBooks(result.data)

      }catch(error){
        console.log(error);

      }

    }


    const approveBook = async(id)=>{
      console.log(id);
      try{

        const results = await approvedBookStatusAPI(id)
        console.log(results);
        getAllBooksAdmins()
        

      }
     catch(error){
        console.log(error);

      }
      

    }

    //getallusers

      const getAllUsers = async () => {
    try {

      // reqHeader
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await getAllUsersAPI(reqHeader)
      console.log(result);
      if (result.status == 200) {
        setAllUsers(result.data)
      }

    } catch (error) {
      console.log(error);

    }
  }


  //     const getAllUsers = async () => {
  //   try {
  //     const token = sessionStorage.getItem("token")
  //     const result = await getAllUsersAdmin(token)
  //     setAllUsers(result.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }





   useEffect (()=>{

    getAllBooksAdmins()
       if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))

    }


   },[])

  return (
    <>

    <AdminHeader/>
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
          <AdminSideBar />
        </div>
        <div className='col-span-4 p-10'>
          <h1 className='text-center text-3xl font-bold'>All Books</h1>
          {/* tabs */}

          <div className='flex justify-center items-center my-8 font-medium text-lg'>
            {/* when click booklist /user show booklist/user */}
            <p onClick={() => { setUserListStatus(false), setBookListStatus(true) }} className={bookListStatus ?
              "text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer" : 'p-4 border-b border-gray-200 cursor-pointer'}>Book List</p>
            <p onClick={() => { setUserListStatus(true), setBookListStatus(false), getAllUsers(); }} className={userListStatus ?
              "text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer" : 'p-4 border-b border-gray-200 cursor-pointer'}>Users</p>
          </div>


          {bookListStatus &&
            <div className='md:grid grid-cols-4 w-full my-5'>
              {allBooks?.length > 0 ?
              allBooks?.map((book,index)=>(
                 <div key={index} className='shadow rounded p-3 m-4'>
                <img width={"100%"} height={"300px"} src={book?.imageUrl} alt="" />
                <div className='flex flex-col justify-center items-center mt-4'>
                  <p>{book?.title}</p>
                  <p>{book?.author}</p>
                  <p>₹ {book?.dPrice}</p>

          {   book?.status == "pending" &&
       
       <button type='button' onClick={()=>approveBook(book?._id)} className=' w-full mt-3 p-3 rounded bg-green-700 text-white hover:border-green-600 hover:bg-white hover:text-green-700'>
                    Approve</button>
                    }

                    {
                      book?.status == "approved" &&
                      <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCiBbX64uRGmUzuTmCSoNMHJnwSf80vo7jlA&s" alt="" style={{width:"80px",height:"70px",borderRadius:"50%"}} /></div>


                    }
                
                
                </div>
              </div>

              ))

              
              
              :
              <p> No Books Available </p>
              
              }
             
              
            </div>




          }

          {/* userslist */}


          {userListStatus &&
            <div className='md:grid grid-cols-3 w-full my-5'>
               {allUsers?.length > 0 ? 
               allUsers?.map((use, index) => (

                    <div key={index} className='shadow rounded p-2 m-2 bg-gray-200'>
                <p className='text-red-700 font-bold'>ID :{use?._id}</p>
                <div className='flex items-center mt-3'>
                  <img src={use?.profile} alt="" style={{ width: "80px", height: "80px", borderRadius: "50%" }} />
                  <div className='flex flex-col ml-3 w-full'>
                    <p className='text-blue-800 text-lg font-bold'>{use?.username}</p>
                    <p>{use?.email}</p>

                  </div>

                </div>

              </div>

               )) 
               
            

               :
                   <p className='text-red-700 font-semibold text-center mt-10 text-xl'>No Users Available.....</p>
               }

            </div>}
        </div>
      </div>
    </>
  )
}

export default AdminBooks



