import { Container, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlayerBanner from './components/PlayerBanner';
import SearchAppBar from './components/SearchBar';
import TagList from './components/TagList'
import RankCard from './components/RankCard'
import GameSummaryTab from './components/GameSummaryTab'
import ChampionStatTab from './components/ChampionStatTab'
import HistoryCard from './components/HistoryCard'
import { Provider } from 'react-redux';
import store from './redux/store'

export default function App() {
  const [input, setInput] = useState('');
  const classes = useStyles();


  return (
    <Provider store={store}>

    <View >
      <SearchAppBar
      />
      <Container>

        <TagList />
        <PlayerBanner />
      </Container>
      <div className={classes.line}>
        <Container>
          <Grid container spacing={3} className={classes.marginContainer}>
            <Grid item container  className={classes.statsDataContainer} direction="row" spacing={3} xs={4}>
              <Grid item xs={12}> <RankCard /></Grid>
              <Grid item xs={12}> <ChampionStatTab /></Grid>
            </Grid>
            <Grid item xs={8}>
              <Grid item container direction="row" spacing={3} xs={12}>
                <Grid item xs={12}> <GameSummaryTab /></Grid>
                <Grid item xs={12}> <HistoryCard /></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </View>
    </Provider>
  );
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    line: {
      borderTop: "1px solid #d8d8d8",

    },
    marginContainer:{
      marginTop: "15px",

    },
    statsDataContainer: {
      display: "flex",
      paddingTop: "15px",
      justifyContent: "center",
      alignItems: "center",
    }
  })

)