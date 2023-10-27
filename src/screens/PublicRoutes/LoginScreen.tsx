import React, { useContext } from 'react';
import { Formik } from 'formik';
import { View, Button } from 'react-native';
import { useNavigate } from 'react-router-native';

import AuthContext from '../../context/AuthContext';
import FormInputValue from '../../components/Inputs/FormInputValue';

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
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View>
            <FormInputValue name="user_name" placeholder="Username" />
            <FormInputValue name="password" placeholder="Password" />
            <Button onPress={loginUser} title="Login" />

            <Button onPress={handleRegisterOnPress} title="Or Register" />
          </View>
        );
      }}
    </Formik>
  );
};

export default LoginScreen;
