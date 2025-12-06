
import React, { useState } from 'react'
import { FaCircleUser } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {  loginAPI, registerAPI } from '../../service/allAPI';
import { toast } from 'react-toastify';




function Auth({register}) {

  const [showPassword, setshowPassword] = useState(false)

  const[userDetails,setUserDetails] = useState({
    username:"",
    email:"",
    password:""

  })

  console.log(userDetails);

  const navigate = useNavigate()

  //register

  const handleRegister = async() =>{
    const {username,email,password} = userDetails
    if(!userDetails || !email || !password){
      toast.info("fill the form completely")

    }
    else{
     const result = await registerAPI(userDetails)
     console.log(result);
     if(result.status == 200){
      toast.success(`Registered successfully`)
      setUserDetails({
        username:"",
        email:"",
        password:""
      })
      navigate("/login")

     }else if(result.status == 404){
      toast.warning(result.response.data)
      setUserDetails({
        username:"",
         email:"",
        password:""

      })
     }else{
      toast.error(`something went wrong..`)
       setUserDetails({
        username:"",
         email:"",
        password:""

      })
     }
     
    }
  }

  //login

  const handleLogin = async()=>{
     const {email,password} = userDetails
    if(!email || !password){
      toast.info("fill the form completely")

    }else{
      const result =await loginAPI(userDetails)
      console.log(result);
      if(result.status == 200){
        toast.success(`login Successfull`)

          //  Store existinguser & token in sessionStorage
      sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser));
      sessionStorage.setItem("token", result.data.token);

      // GET ROLE
      const role = result.data.existingUser.role;

      // Redirect based on role
      if (role === "admin") {
        navigate("/admin-books");
      } else {
        navigate("/");
      }
      
        setUserDetails({
          email:"",
          password:""
        })
        // navigate("/")
      }else if(result.status == 404){
        toast.warning(result.response.data)
         setUserDetails({
          email:"",
          password:""
        })

      }else if (result.status == 401){
        toast.warning(result.response.data)

      }else{
         toast.warning(`something went wrong`)
         setUserDetails({
          email:"",
          password:""
        })

      }
      
    }

  }


  
  return (
    <>
      <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfo7sSzB9Vzxn4UrN8o0HmqkqoXxW4fXm5Q&s)] bg-cover bg-center'>
        <div className='p-10'>
          <h1 className='text-3xl   font-bold text-center'>BOOKSTORE</h1>
          <div style={{ width: "400px" }} className='bg-blue-950 text-white p-5 flex flex-col my-5 justify-center items-center'>
            <div style={{ width: "100px", height: '100px', borderRadius: "50%" }} className='border mb-3 flex justify-center items-center'>
              <FaCircleUser className='text-6xl' />
            </div>
           {register ? <h1 className='text-2xl'>Register   </h1>
           : <h1 className='text-2xl'>Login  </h1> }

            <form action="">
             {register && (
              <div className='my-5'>
                <label htmlFor="">Username</label>
                <input value={userDetails?.username} onChange={(e)=>setUserDetails({...userDetails, username:e.target.value})} type="text" placeholder='username ' className='bg-white p-2 w-full  rounded mt-2 placeholder-gray-500 text-black' />

              </div>
             ) }
              <div className='mt-5'>
                <label htmlFor="">Email</label>
                <input value={userDetails?.email} onChange={(e)=>setUserDetails({...userDetails, email:e.target.value})}  type="text" placeholder='Email ' className='bg-white p-2 w-full  rounded mt-2 placeholder-gray-500 text-black' />

              </div>
              <div className='mt-5  relative'>
                 
                <label htmlFor="">Password</label>
                <input value={userDetails?.password} onChange={(e)=>setUserDetails({...userDetails, password:e.target.value})}  type={showPassword ? "text" : "password"} placeholder='password ' className='bg-white p-2 w-full  rounded mt-2 placeholder-gray-500 text-black' />
               <span
                  className=" absolute right-3 top-10 text-gray-600 cursor-pointer"
                  onClick={() => setshowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye />  : <FaEyeSlash />}
                </span>
              </div>
              <div className='mt-2'>
                <p className='text-xs text-orange-400'>*Never share your password with others</p>
              </div>
              <div className='mt-4'>
            {register ? <button onClick={handleRegister} type='button' className='bg-green-700 p-2 w-full rounded'>Register</button> 
            : <button onClick={handleLogin} type='button' className='bg-green-700 p-2 w-full rounded'>Login</button> }    
               
              </div>
              {/* google authentication */}

              <div> </div>

              {/* button */}
              <div className='mt-3'>
              {register ?  <p>Are you Already a user ? <Link to={"/login"} className='text-blue-400'>Login</Link></p> 
              :<p>Are you a new user ? <Link to={"/register"} className='text-blue-400'>Register</Link></p>}  
                
              </div>
            </form>
          </div>

        </div>
      </div>

    </>
  )
}

export default Auth