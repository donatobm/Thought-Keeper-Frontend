import React, { useContext } from 'react';
import { Button } from 'react-native';
import { useNavigate } from 'react-router-native';

import AuthContext from '../../context/AuthContext';
import FormInputValue from '../../components/Inputs/FormInputValue';
import BaseForm from '../../components/Forms/BaseForm';
import { registerValidationSchema } from '../../helpers/authValidations';

const initialValues = {
  username: '',
  firstname: '',
  lastname: '',
  password: '',
};

const RegisterScreen = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = () => {
    login('asdsadasds');
  };
  const toLoginScreen = () => {
    navigate('/login');
  };

  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={registerValidationSchema}
    >
      <FormInputValue name="user_name" placeholder="Username" />
      <FormInputValue name="first_name" placeholder="Firstname" />
      <FormInputValue name="last_name" placeholder="Lastname" />
      <FormInputValue name="password" placeholder="Password" />
      <Button onPress={handleSubmit} title="Register" />

      <Button onPress={toLoginScreen} title="Or Login" />
    </BaseForm>
  );
};

export default RegisterScreen;
