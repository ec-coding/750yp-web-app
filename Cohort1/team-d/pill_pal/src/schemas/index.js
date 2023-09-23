import * as yup from 'yup';

const prescriptionSchema = yup.object().shape({
  name: yup.string().required('Please select the medication name'),
  strength: yup.string().required('Please select the medication strength'),
  frequency: yup.string().required('Please select the medication frequency'),
  amount: yup
    .number()
    .typeError('Enter a number for Quantity')
    .required('Please enter a number')
    .positive('Quantity must be positive')
    .integer('Quantity must be an integer'),
  duration: yup
    .number()
    .typeError('Enter a number for Duration')
    .required('Please enter a number')
    .positive('Duration must be positive')
    .integer('Duration must be an integer'),
  takeWithMeal: yup
    .number()
    .typeError('Please select when to take the medication')
    .required('Please select when to take the medication'),
});

export default prescriptionSchema;
