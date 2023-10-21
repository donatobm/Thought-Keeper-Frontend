import React, { useContext } from 'react';
import { Formik } from 'formik';
import { TextInput, View, Button } from 'react-native';
import { useNavigate } from 'react-router-native';

import AuthContext from '../../context/AuthContext';

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
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View>
            <TextInput
              placeholder="Username"
              value={values.username}
              onChangeText={handleChange('user_name')}
            />
            <TextInput
              placeholder="First name"
              value={values.firstname}
              onChangeText={handleChange('first_name')}
            />
            <TextInput
              placeholder="Last name"
              value={values.lastname}
              onChangeText={handleChange('last_name')}
            />
            <TextInput
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Button onPress={registerUser} title="Register" />

            <Button onPress={handleLoginOnPress} title="Or Login" />
          </View>
        );
      }}
    </Formik>
  );
};

export default RegisterScreen;
