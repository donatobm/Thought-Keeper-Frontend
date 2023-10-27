import React, { useContext } from 'react';
import { Formik } from 'formik';
import { View, Button } from 'react-native';
import { useNavigate } from 'react-router-native';

import AuthContext from '../../context/AuthContext';
import FormInputValue from '../../components/Inputs/FormInputValue';

const initialValues = {
  username: '',
  firstname: '',
  lastname: '',
  password: '',
};

const RegisterScreen = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const registerUser = () => {
    login('asdsadasds');
  };
  const handleLoginOnPress = () => {
    navigate('/login');
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
            <FormInputValue name="first_name" placeholder="Firstname" />
            <FormInputValue name="last_name" placeholder="Lastname" />
            <FormInputValue name="password" placeholder="Password" />
            <Button onPress={registerUser} title="Register" />

            <Button onPress={handleLoginOnPress} title="Or Login" />
          </View>
        );
      }}
    </Formik>
  );
};

export default RegisterScreen;
