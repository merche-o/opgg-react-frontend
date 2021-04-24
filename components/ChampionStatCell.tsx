import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Box, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,

        },
        firstLine: {
            color: "#5e5e5e",
            fontSize: "13px",
            fontFamily : "AppleSDGothicNeo",
            fontWeight:"bold",
        },
        secondLine:{
            color: "#879292",
            fontSize: "11px",
            fontFamily : "Helvetica"
        },
        greenWR:{ color:"#2daf7f"},
        redWR:{ color:"#c6443e"},
        yellowWR:{ color:"#e19205"},
        containerPadding:{
            padding:"15px"
        }

    }));

/// have to loop over taglist
export default function ChampionStatCell() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper variant="outlined" square>
                <Grid container  spacing={0} alignContent="center" alignItems="center" className={classes.containerPadding}>
                    <Grid item xs>
                        <Avatar  src="https://opgg-static.akamaized.net/images/medals/diamond_1.png" />
                    </Grid>
                    <Grid item xs={3} container direction="row">
                        <Grid item xs={12} className={classes.firstLine}>Title</Grid>
                        <Grid item xs={12} className={classes.secondLine}> position</Grid>
                    </Grid>
                    <Grid item xs={3} container direction="row">
                    <Grid item xs={12} className={classes.firstLine}>Title</Grid>
                        <Grid item xs={12} className={classes.secondLine}> position</Grid>
                    </Grid>
                    <Grid item xs={3} container direction="row">
                    <Grid item xs={12} className={classes.firstLine}>Title</Grid>
                        <Grid item xs={12} className={classes.secondLine}> position </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}