import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Box, Grid, Paper } from '@material-ui/core';
import Image from 'material-ui-image'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,

        },
        rankType: {
            color: "#879292",
            fontSize: "11px",
            fontFamily : "AppleSDGothicNeo"
        },
        positionInfo:{
            color: "#353a3a",
            fontSize: "12px",
            fontFamily : "AppleSDGothicNeo"
        },
        league:{
            color: "#1f8ecd",
            fontSize: "15px",
            fontFamily : "Helvetica"
        },
        lp:{
            color: "#555e5e",
            fontSize: "12px",
            fontFamily : "Helvetica"
        },
        winCount:{
            color: "#879292",
            fontSize: "12px",
            fontFamily : "Helvetica"

        },
        winRatio : {
            color: "#879292",
            fontSize: "12px",
            fontFamily : "AppleSDGothicNeo"
        },

        textBold: {
            fontWeight:"bold",

        },

    }));

/// have to loop over taglist
export default function RankCard() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper variant="outlined" square>
                <Grid container  spacing={0} alignContent="center" alignItems="center">
                    <Grid item xs  alignContent="center" alignItems="center">
                        <Image src="https://opgg-static.akamaized.net/images/medals/diamond_1.png" />
                    </Grid>
                    <Grid item xs={7} container direction="row">
                        <Grid item xs={12} className={classes.rankType}>Title</Grid>
                        <Grid item xs={12} className={classes.positionInfo}> <Box fontWeight='fontWeightBold' display='inline'>position</Box> (details)</Grid>
                        <Grid item xs={12} className={classes.league + " " + classes.textBold}>league</Grid>
                        <Grid item xs={12} className={classes.lp + " " + classes.textBold}>rank point <Box className={classes.winCount} display='inline'> / XW 14L</Box></Grid>
                        <Grid item xs={12} className={classes.rankType}>win ration</Grid>

                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}