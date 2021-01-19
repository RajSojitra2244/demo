export const isAuthenticated = () => {
    if (localStorage.getItem('logintoken')) {
        return localStorage.getItem("logintoken")
    }
    else {
        return false
    }
}
