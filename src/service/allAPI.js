


import apiCommon from "./apiCommon"
// import commonAPI from "./commonAPI"
import SERVERURL from "./ServerURL"

// register 

 export const registerAPI= async (reqBody)=>{

    return await apiCommon("POST", `${SERVERURL}/register`, reqBody)

 } 

 //login

 export const loginAPI= async (reqBody)=>{

    return await apiCommon("POST", `${SERVERURL}/login`, reqBody)

 }

 //google login

 export const googleLoginAPI = async (reqBody)=>{

    return await apiCommon("POST", `${SERVERURL}/google-login`, reqBody)

 }



 //gethome-book

 export const getHomeBookAPI= async ()=>{

    return await apiCommon("GET", `${SERVERURL}/home-books`)

 }

 //.......................users......................................

 //add-book
 export const addBookAPI= async (reqBody,reqHeader)=>{

    return await apiCommon("POST", `${SERVERURL}/add-book`, reqBody,reqHeader)

 }

 //get all books

 export const getAllBooksAPI= async (searchKey,reqHeader)=>{

    return await apiCommon("GET", `${SERVERURL}/all-books?search=${searchKey}`, "" ,reqHeader)

 }


 //get a book view

 export const getABookAPI= async (id,reqHeader)=>{

    return await apiCommon("GET", `${SERVERURL}/view-book/${id}`, "" ,reqHeader)

 }


 //getuserbook

 export const getUserBookAPI= async(reqHeader)=>{
   return await apiCommon("GET", `${SERVERURL}/user-books`, "" ,reqHeader)

 }

 //deletebook

 export const deleteUserAddedBookAPI = async(id)=>{
   return await apiCommon("DELETE", `${SERVERURL}/delete-book/${id}`)

 }

//purchase history
  export const getPurchasedBookAPI = async(reqHeader)=>{
   return await apiCommon("GET", `${SERVERURL}/purchase-history`,"",reqHeader)

 }

 //update user profile

  export const updateProfileAPI = async(reqBody,reqHeader)=>{
   return await apiCommon("PUT", `${SERVERURL}/update-user-profile`,reqBody,reqHeader)

 }

 //make payment 

   export const makePaymentAPI = async(reqBody,reqHeader)=>{
   return await apiCommon("PUT", `${SERVERURL}/make-payment`,reqBody,reqHeader)

 }


 //...................................admin...................................................................


 //getall books

  export const getAllBooksAdminAPI = async()=>{
   return await apiCommon("GET", `${SERVERURL}/getadmin-allboks`,)

 }

//  updatebooksstatusadmin

 export const approvedBookStatusAPI = async(id)=>{
   return await apiCommon("PUT", `${SERVERURL}/update-books/${id}`)

 }


 //  getall users

  export const getAllUsersAPI = async(reqHeader)=>{
   return await apiCommon("GET", `${SERVERURL}/get-allusers`,"",reqHeader)

 }

//  export const getAllUsersAdmin = async(reqHeader)=>{
//    return await apiCommon("GET", `${SERVERURL}/getadmin-users`,"",reqHeader)

//  }



//update admin profile

  export const updateAdminProfileAPI = async(reqBody,reqHeader)=>{
   return await apiCommon("PUT", `${SERVERURL}/update-admin-profile`,reqBody,reqHeader)

 }

 



 






 