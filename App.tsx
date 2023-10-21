import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        onPress={() => Alert.alert("Auxilio")}
      >
        <Text>ausilio</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
