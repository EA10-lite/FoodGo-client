import client from "./client";


export const forgotPassword = (body)=> {
    return client.post("/auth/forgot-password", {...body});
}


export const login = (body)=> {
    return client.post("/auth/loginRestaurant", {...body});
}

export const signup = (body)=> {
    return client.post("/auth/signupRestaurant", {...body});
}

export const resetPassword = (body, email, code)=> {
    return client.put(`/auth/reset-password?code=${code}&email=${email}`, {...body});
}

export const verifyAccount = (code, email)=> {
    return client.get(`/auth/verify-email?code=${code}&email=${email}`);
}

export const sendVerificationCode = (body)=> {
    return client.put(`/auth/verify-email`, {...body});
}