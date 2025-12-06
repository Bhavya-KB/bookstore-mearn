import React, { useState } from 'react'
import { createContext } from 'react'

export const userProfileUpdateContext = createContext()

function ContextShare({children}) {

    const [userProfileUpdateStatus,setUserProfileUpdateStatus] = useState({})
  return (
   
    <userProfileUpdateContext.Provider value={{userProfileUpdateStatus,setUserProfileUpdateStatus}}>

        {children}

        </userProfileUpdateContext.Provider>

    
    
  )
}

export default ContextShare