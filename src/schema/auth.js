import * as Yup from "yup";

const email = Yup.string().email('Please enter a valid email address').label().required('Please enter your email address');
const password = Yup.string().label().required('Enter a strong password').matches(
    // /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
    `
      Password must be a minimum of 8 characters, 
      and must contain at least 1 small letter, 
      1 capital letter, 1 number and 1 symbol.
    `
);

export const login_schema = Yup.object().shape({
  email,
  password,
});

export const forgot_password = Yup.object().shape({
  email,
});

export const reset_password = Yup.object().shape({
  new_password: password,
  confirm_password: 
    Yup.string()
      .label()
      .required('Enter a strong password')
      .oneOf([Yup.ref('new_Password'), null], 'Passwords must match')
});

export const signup_schema = Yup.object().shape({
  name: Yup.string().required('Please enter your full name'),
  phone: Yup.string().required('Please enter a valid phone number'),
  email,  
  password,
  // confirm_password: 
  //   Yup.string()
  //     .label()
  //     .required('Enter a strong password')
  //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
});