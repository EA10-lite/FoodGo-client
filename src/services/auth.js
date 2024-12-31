import client from "./client";


export const forgotPassword = (body)=> {
    return client.post("/auth/forgotPassword", {...body});
}


export const login = (body)=> {
    return client.post("/auth/loginRestaurant", {...body});
}

export const signup = (body)=> {
    return client.post("/auth/signupRestaurant", {...body});
}

export const resetPassword = (body)=> {
    return client.post(`/auth/resetPassword`, {...body});
}

export const verifyAccount = (body)=> {
    return client.post(`/auth/verifyEmail`, {...body});
}