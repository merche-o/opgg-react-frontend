import { Container, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlayerBanner from './components/PlayerBanner';
import SearchAppBar from './components/SearchBar';
import TagList from './components/TagList'
import RankCard from './components/RankCard'

export default function App() {
  const [input, setInput] = useState('');
  const classes = useStyles();


  return (
    <View style={styles.container}>
      <SearchAppBar
      />
      <Container>

        <TagList />
        <PlayerBanner />
      </Container>
      <div className={classes.line}>
        <Container>
          <Grid container spacing={3} className={classes.statsDataContainer}>
            <Grid item container direction="row" spacing={3} xs={4}>
              <Grid item xs={12}> <RankCard /></Grid>
              <Grid item xs={12}> bottom left</Grid>
            </Grid>
            <Grid item xs={8}>
              <Grid item container direction="row" spacing={3} xs={2}>
                <Grid item xs={12}> top right</Grid>
                <Grid item xs={12}> bottom right</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

});


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    line: {
      borderTop: "1px solid #d8d8d8"

    },
    statsDataContainer: {
      display: "flex",
      paddingTop: "15px",
      justifyContent: "center",
      alignItems: "center",
    }
  })

)