import axios from 'axios'

let adminUrl="https://wtsacademy.dedicateddevelopers.us/api"
let profileURL='https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic'
let imageURL='https://wtsacademy.dedicateddevelopers.us/uploads/product'
if(process.env?.REACT_APP_ENV==="production"){
    adminUrl="https://wtsacademy.dedicateddevelopers.us/api"// change when app goes live
}

export const  baseURL= adminUrl
export const profileDetailsPath=(media)=>{
    return profileURL+`/${media}`;
}
export const blogpic=(media)=>{
    return imageURL+ `/${media}`
}
let axiosInstance=axios.create({baseURL})

axiosInstance.interceptors.request.use(
    async(config)=>{
        const token=localStorage.getItem("token") || sessionStorage.getItem("token")
            if(token!==undefined && token!==null){
                config.headers["x-access-token"]=token
            }

            return config

    },
    function(err){
        return Promise.reject(err)
    }
)

export default axiosInstance