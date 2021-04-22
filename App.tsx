import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './components/SearchBar';

export default function App() {
  const [input, setInput] = useState('');

  const updateInput = async (input) => {

  }
  
  return (
    <View style={styles.container}>

      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
