import React from 'react';
import { TextInput } from 'react-native';
import { useField } from 'formik';

const FormInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <TextInput
      value={field.value}
      onChangeText={helpers.setValue}
      {...props}
      {...(name.toLowerCase() === 'password' ? { secureTextEntry: true } : {})}
    />
  );
};

export default FormInputValue;
