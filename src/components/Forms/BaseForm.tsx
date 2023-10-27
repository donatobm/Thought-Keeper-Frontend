import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';

const BaseForm = ({ initialValues, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
    >
      {({ handleSubmit }) => {
        return <View>{children}</View>;
      }}
    </Formik>
  );
};

export default BaseForm;
