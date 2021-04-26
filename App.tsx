import { Container, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import React, { useState, useEffect, Dispatch } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlayerBanner from './components/PlayerBanner';
import { Provider } from 'react-redux';
import store from './redux/store'
import Main from './Main';

export default function App() {

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}


