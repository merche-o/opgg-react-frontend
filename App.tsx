import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchAppBar from './components/SearchBar';
import TagList from './components/TagList'

export default function App() {
  const [input, setInput] = useState('');

  const updateInput = async (input) => {

  }

  return (
    <View style={styles.container}>

      <SearchAppBar 
       input={input} 
       onChange={updateInput}
      />
      <TagList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
