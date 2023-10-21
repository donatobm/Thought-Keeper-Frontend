import React from 'react';
import { NativeRouter } from 'react-router-native';

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        
      </Routes>
    </NativeRouter>
    // <View style={styles.container}>
    //   <TouchableWithoutFeedback>
    //     <TextInput style={styles.input} placeholder='Username' />
    //   </TouchableWithoutFeedback>
    //   <TouchableWithoutFeedback>
    //     <TextInput style={styles.input} placeholder='First name' />
    //   </TouchableWithoutFeedback>
    //   <TouchableWithoutFeedback>
    //     <TextInput style={styles.input} placeholder='Last name' />
    //   </TouchableWithoutFeedback>
    //   <TouchableWithoutFeedback>
    //     <TextInput style={styles.input} placeholder='Password' />
    //   </TouchableWithoutFeedback>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFAA',
    flex: 1,
    justifyContent: 'center',
  },

  input: {
    backgroundColor: 'green',
    borderColor: '#FFBB00',
    borderRadius: 5,
    borderWidth: 2,
    color: '#FFF',
    fontSize: 20,
    height: 50,
    margin: 16,
    padding: 15,
    textAlign: 'left',
    width: 300,
  },
});
