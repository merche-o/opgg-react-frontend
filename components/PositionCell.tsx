import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Avatar, Box, Grid, Paper } from '@material-ui/core';
import { GlobalState } from '../redux/type/global';
import { useSelector } from 'react-redux';
import { IGameData } from '../redux/type/gameData';
import { percentagePar } from '../tools/calctool';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    gridContainer:{
        padding:"15px",
    },
    firstLine: {
      color: "#5e5e5e",
      fontSize: "13px",
      fontFamily: "AppleSDGothicNeo",
      fontWeight: "bold",
    },
    secondLine: {
      color: "#879292",
      fontSize: "11px",
      fontFamily: "Helvetica",
    },
    nanumBarunGothicOTF:{
        fontSize: "11px",
        fontFamily: "NanumBarunGothicOTF",
        textAlign: "center"
    },
    helveticaF:{
        fontSize: "11px",
        fontFamily: "Helvetica",
        textAlign: "center"
    },
    gridTileStyle : {
        position: 'relative',
        float: 'left',
        width: '100%',
        maxHeight: '22px',
        maxWidth: '22px',
        minHeight: '22px',
        minWidth: '22px',
        overflow: 'hidden',
       // height: '100% !important'
  }
    ,
    greenWR: { color: "#2daf7f" },
    redWR: { color: "#d0021b" },
    yellowWR: { color: "#e19205" },
    grey1Color:{color: "#555555"},
    grey2Color:{color: "#999999"},
    blackColor:{color : "#333333"},
    textBold: {
        fontWeight: "bold",
      },
      textBig :{
          fontSize : "16px"
      },
      textMedium :{
        fontSize : "14px"
    },
    smallText :{
        fontSize : "12px"
    },
    gridItem:{
        height:"100%"
      }


  })
);

/// have to loop over taglist
export default function PositionCell() {
    const classes = useStyles();

    const matches: IGameData | undefined = useSelector(
      (state: GlobalState) => state.gameData.gameData
    );
    return (
    
        <div className={classes.root}>
            {matches?.positions?.map((value, index) => {
        return (
                <Grid container  spacing={0} alignContent="center" alignItems="center" key={index}>
              
                    <Grid item xs={4} className={classes.gridItem}>
                        <Avatar src={require('../assets/'+value.position+'.svg')} />
                    </Grid>
                    <Grid item xs={7} container direction="row" className={classes.gridItem}>
                        <Grid item xs={12} className={classes.helveticaF + " " + classes.blackColor + " " + classes.textMedium}>{value.positionName}</Grid>
                        <Grid item xs={12} className={classes.helveticaF + " " + classes.grey1Color}> <Box fontWeight='fontWeightBold' display='inline'>{percentagePar(value.games, matches.games.length)}%</Box> | Win Ration {percentagePar(value.wins,value.games)}</Grid>

                    </Grid>
                </Grid>
                )})}

        </div>
    );
}