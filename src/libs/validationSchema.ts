import z from 'zod'

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const registationSchema = z.object({
    firstName : z 
    .string()
    .min(2 , 'First name must be atleast 2 characters')
    .max(45 , 'First name must be lest than 45 characters')
    .regex(new RegExp("^[a-zA-Z]+$") , "No special character allowed!"),
  lastName : z 
    .string()
    .min(2 , 'Last name must be atleast 2 characters')
    .max(45 , 'Last name must be lest than 45 characters')
    .regex(new RegExp("^[a-zA-Z]+$") , "No special character allowed!"),
  email : z 
    .string()
    .email('Please add valide email adress'),
  phone : z
    .string()
    .regex(phoneRegex , 'Invalid Number'),
  password : z
    .string()
    .min(6 , 'Password name must be atleast 6 characters')
    .max(45 , 'Password name must be lest than 45 characters'),
  confirmPassword : z
    .string()
    .min(6 , 'Confirm password is require')
    .max(45 , 'Confirm password is require'),
  })
  .refine(data => data.confirmPassword === data.password , {
    message : 'Password and confirm password does not math',
    path: [ "confirmPassword"]
  })

export const signInSchema = z.object({
  email : z 
    .string()
    .email('Please add valide email adress'),
  password : z
    .string()
    .min(6 , 'Password name must be atleast 6 characters')
    .max(45 , 'Password name must be lest than 45 characters'),
  })

export const updatePassword = z.object({
  password : z
    .string()
    .min(6 , 'Password name must be atleast 6 characters')
    .max(45 , 'Password name must be lest than 45 characters'),
  existingpassword : z
    .string()
    .min(6 , 'Password name must be atleast 6 characters')
    .max(45 , 'Password name must be lest than 45 characters'),
  confirmPassword : z
    .string()
    .min(6 , 'Confirm password is require')
    .max(45 , 'Confirm password is require'),
  })
  .refine(data => data.confirmPassword === data.password , {
    message : 'Password and confirm password does not math',
    path: [ "confirmPassword"]
  })



  export const updateProfileInfo = z.object({
  email : z 
    .string()
    .email('Please add valide email adress'),
  firstName : z 
    .string()
    .min(2 , 'First name must be atleast 2 characters')
    .max(45 , 'First name must be lest than 45 characters')
    .regex(new RegExp("^[a-zA-Z]+$") , "No special character allowed!"),
  lastName : z 
    .string()
    .min(2 , 'Last name must be atleast 2 characters')
    .max(45 , 'Last name must be lest than 45 characters')
    .regex(new RegExp("^[a-zA-Z]+$") , "No special character allowed!"),
  phone : z 
    .string()
    .regex(phoneRegex , 'Invalid Number'),
  });

  export const addressValidator = z.object({
  city : z 
    .string()
    .min(2 , 'First name must be atleast 2 characters')
    .max(45 , 'First name must be lest than 45 characters'),
  address : z 
    .string()
    .min(2 , 'Address name must be atleast 2 characters')
    .max(45 , 'Address name must be lest than 45 characters'),
  zip : z 
    .string()
    .min(2 , 'ZIP code must be atleast 2 characters')
    .max(10 , 'ZIP code must be lest than 45 characters'),
  phone : z 
    .string()
    .regex(phoneRegex , 'Invalid Number'),
  });

