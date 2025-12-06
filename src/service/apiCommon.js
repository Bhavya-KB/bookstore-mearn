import axios from "axios"

const apiCommon =async (httpRequest, url , reqBody, reqHeader)=>{

   const requestConfig = {
    method: httpRequest,
    url,
    data:reqBody,
    headers:reqHeader


}

return await axios(requestConfig).then(res =>{
    return res
}).catch (err =>{
    return err
})
}

export default apiCommon