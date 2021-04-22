import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,
    padding:"15px",

  }
}));

export default function PlayerBanner() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
     
        </div>
        );
}