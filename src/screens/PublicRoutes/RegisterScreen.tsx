import React from 'react';
import { Formik } from 'formik';
import { TextInput, View, Button } from 'react-native';

const initialValues = {
  username: '',
  firstname: '',
  lastname: '',
  password: '',
};

const RegisterScreen = () => {
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
            <Button onPress={handleSubmit} title="Register" />
          </View>
        );
      }}
    </Formik>
  );
};

export default RegisterScreen;
