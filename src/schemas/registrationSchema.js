//registrationSchema.js
import * as yup from 'yup';

const registrationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Maximum name length is 32 symbols')
    .required('Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .matches(
      /^[a-zA-Z0-9]+([._-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.-][0-9a-zA-Z]+)*\.[a-zA-Z]{2,}$/,
      'Invalid email pattern'
    )
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Password must be at least 7 characters')
    .max(64, 'Maximum password length is 64 symbols')
    .required('Password is required'),
});

export default registrationSchema;
