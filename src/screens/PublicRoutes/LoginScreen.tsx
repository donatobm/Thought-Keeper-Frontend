import React, { useContext } from 'react';
import { Button } from 'react-native';
import { useNavigate } from 'react-router-native';

import AuthContext from '../../context/AuthContext';
import FormInputValue from '../../components/Inputs/FormInputValue';
import BaseForm from '../../components/Forms/BaseForm';
import { baseAuthValidationSchema } from '../../helpers/authValidations';

const initialValues = {
  username: '',
  password: '',
};

const LoginScreen = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const loginUser = () => {
    login('asdsadasds');
  };
  const handleRegisterOnPress = () => {
    navigate('/register');
  };

  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={baseAuthValidationSchema}
    >
      <FormInputValue name="user_name" placeholder="Username" />
      <FormInputValue name="password" placeholder="Password" />
      <Button onPress={loginUser} title="Login" />

      <Button onPress={handleRegisterOnPress} title="Or Register" />
    </BaseForm>
  );
};

export default LoginScreen;
