import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,
    borderBottom:"1px",
    padding : "15px",


  },
  name : {
    fontFamily: "AppleSDGothicNeo",
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "-0.77px",
    color: "#242929",
  }
}));

export default function PlayerBanner() {
    const classes = useStyles();
    return (
      <div >

      <Grid
  container
  direction="row"
  justify="Left"
  alignItems="left"
className={classes.root} spacing={3} >

<Grid item xs={1}> Picture </Grid>
          <Grid container direction="column" spacing={3} item xs={11}>
          <Grid item xs={12} className={classes.name}>Name</Grid>
          <Grid item xs={12}>desc</Grid>

            </Grid>
          </Grid>
          
        </div>
        );
}