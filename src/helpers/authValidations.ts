import * as yup from 'yup';
import { passwordRegex, capitalLetterRegex } from './regex';

export const baseAuthValidationSchema = yup.object().shape({
  username: yup.string().required('You need an username'),
  password: yup
    .string()
    .matches(
      passwordRegex,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    )
    .required("You don' a password, you idiot xd"),
});

export const registerValidationSchema = baseAuthValidationSchema.shape({
  firstname: yup
    .string()
    .matches(capitalLetterRegex, 'Must begin with a capital letter')
    .required("So, you don't have a name xd"),
  lastname: yup
    .string()
    .matches(capitalLetterRegex, 'Must begin with a capital letter')
    .required("So, you don't have a family xd"),
});
