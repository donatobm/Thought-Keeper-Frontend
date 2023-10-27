import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';

const BaseForm = ({ initialValues, validationSchema, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
      validationSchema={validationSchema}
    >
      <View>{children}</View>
    </Formik>
  );
};

export default BaseForm;
