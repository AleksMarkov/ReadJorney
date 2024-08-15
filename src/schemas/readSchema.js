// readSchema.js
import * as yup from 'yup';

const readSchema = yup.object().shape({
  page: yup
    .number()
    .typeError('Page number must be a number')
    .positive('Page number must be positive')
    .integer('Page number must be an integer')
    .min(1, 'Page number must be at least 1')
    .required('Page number is required'),
});

export default readSchema;
