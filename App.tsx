import React, { useContext } from 'react';
import { NativeRouter } from 'react-router-native';

import PublicRoutes from './src/screens/PublicRoutes';
import PrivateRoutes from './src/screens/PrivateRoutes';
import AuthProvider from './src/context/AuthProvider';
import AuthContext from './src/context/AuthContext';

export default function App() {
  const { token } = useContext(AuthContext);

  return (
    <AuthProvider>
      <NativeRouter>
        {token ? <PrivateRoutes /> : <PublicRoutes />}
      </NativeRouter>
    </AuthProvider>
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

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     backgroundColor: '#FFFFAA',
//     flex: 1,
//     justifyContent: 'center',
//   },

//   input: {
//     backgroundColor: 'green',
//     borderColor: '#FFBB00',
//     borderRadius: 5,
//     borderWidth: 2,
//     color: '#FFF',
//     fontSize: 20,
//     height: 50,
//     margin: 16,
//     padding: 15,
//     textAlign: 'left',
//     width: 300,
//   },
// });
