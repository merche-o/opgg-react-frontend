import { Container, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import React, { useState, useEffect, Dispatch } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlayerBanner from './components/PlayerBanner';
import SearchAppBar from './components/SearchBar';
import TagList from './components/TagList'
import RankCard from './components/RankCard'
import GameSummaryTab from './components/GameSummaryTab'
import ChampionStatTab from './components/ChampionStatTab'
import HistoryCard from './components/HistoryCard'
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/store'
import { ISummonerSummary } from './redux/type/summonerSummary';
import { GlobalState } from './redux/type/global';
import { getSumonerSummary } from './redux/actionSummonerSummary';
import Global from './tools/Global';

export default function App() {
 
  return (
    <Provider store={store}>
      <Global />
    </Provider>
  );
}


