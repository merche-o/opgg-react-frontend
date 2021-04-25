import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Box, Grid, Paper } from '@material-ui/core';
import Image from 'material-ui-image'
import { League } from '../redux/type/summonerSummary';

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
        paperPadding:{
            marginBottom : "5px"
        }

    }));

    interface RankCardProps {
        leagues?:League[];
      }

/// have to loop over taglist
export default function RankCard(props:RankCardProps) {
    const classes = useStyles();
    const { leagues } = props;
    return (
        <div className={classes.root}>
                            {leagues?.map((value, index) => {
return(
            <Paper variant="outlined" square className={classes.paperPadding} key={index}>
                <Grid container  spacing={0} alignContent="center" alignItems="center">
                    <Grid item xs>
                        <Image src={value.tierRank.imageUrl} />
                    </Grid>
                    <Grid item xs={7} container direction="row">
                        <Grid item xs={12} className={classes.rankType}>{value.tierRank.name}</Grid>
                        <Grid item xs={12} className={classes.positionInfo}> <Box fontWeight='fontWeightBold' display='inline'> ? </Box> (total play )</Grid>
                        <Grid item xs={12} className={classes.league + " " + classes.textBold}>{value.tierRank.tierDivision}</Grid>
                        <Grid item xs={12} className={classes.lp + " " + classes.textBold}>{value.tierRank.lp} LP <Box className={classes.winCount} display='inline'> / {value.wins}W {value.losses}L</Box></Grid>
                        <Grid item xs={12} className={classes.rankType}>win ration {Math.round(((value.wins / (value.wins + value.losses)) * 100))} %</Grid>

                    </Grid>
                </Grid>
            </Paper>)
                            })}
        </div>
    );
}