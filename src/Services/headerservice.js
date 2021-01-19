export const CommonHeader=()=>{
    const token = localStorage.getItem('logintoken')

    return{
            headers: {
                'content-type': "application/json"
            }
    }
}
export const HeaderWithToken=()=>{
    const token = localStorage.getItem('logintoken')

    return{
            headers: {
                'Authorization': token,
                "content-type": "application/json"
            }
    }
}

export const HeaderForBlog=()=>{
    const token = localStorage.getItem('logintoken')

    return{
            headers: {
                'Authorization': token,
                "Content-Type": "multipart/form-data"
            }
    }
}