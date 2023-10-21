import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 
      <TouchableWithoutFeedback>
        <TextInput style={styles.input} placeholder='Username' />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <TextInput style={styles.input} placeholder='First name' />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <TextInput style={styles.input} placeholder='Last name' />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <TextInput style={styles.input} placeholder='Password' />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFAA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    margin: 16,
    width: 300,
    height: 50,
    textAlign: "left",
    padding: 15,
    backgroundColor: "green",
    borderRadius: 5,
    borderColor: "#FFBB00",
    borderWidth: 2,
    color: "#FFF",
    fontSize: 20
  },
  
});
