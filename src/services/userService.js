import api from "./baseUrl"

async function checkAuthenticatedUser(pUser){
    const response = await api.post("http://localhost:8089/api/v1/users/check",pUser)
    return await response.data;
}
const getUserName = async(pUserID) => {
    const response = await api.get(`/users/${pUserID}`)
    return response.data
    
}
export {checkAuthenticatedUser,getUserName} 