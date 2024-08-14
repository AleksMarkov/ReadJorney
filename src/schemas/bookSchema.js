//bookSchema.js
import * as yup from 'yup';

const bookSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, 'Title must be at least 2 characters')
    .max(100, 'Maximum title length is 100 characters')
    .required('Title is required'),
  author: yup
    .string()
    .min(2, 'Author name must be at least 2 characters')
    .max(50, 'Maximum author name length is 50 characters')
    .required('Author is required'),
  totalPages: yup
    .number()
    .typeError('Total pages must be a number')
    .positive('Total pages must be a positive number')
    .integer('Total pages must be an integer')
    .min(1, 'Total pages must be at least 1')
    .required('Total pages are required'),
});

export default bookSchema;
