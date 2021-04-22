import { Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlayerBanner from './components/PlayerBanner';
import SearchAppBar from './components/SearchBar';
import TagList from './components/TagList'

export default function App() {
  const [input, setInput] = useState('');


  return (
    <View style={styles.container}>
            <SearchAppBar 
      />
<Container>

      <TagList />
      <PlayerBanner/>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
