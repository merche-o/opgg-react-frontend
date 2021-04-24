import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Box, Grid, Paper } from '@material-ui/core';

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
    grey1Color:{color: "#666666"},
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


  })
);

/// have to loop over taglist
export default function WinRateCell() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
                <Grid container  spacing={1} alignContent="center" alignItems="center" className={classes.gridContainer}>
                    <Grid item xs={5} className={classes.helveticaF + " " + classes.smallText + " " + classes.grey1Color}>
                    win data
                    <Box alignContent="center" alignSelf="center" alignItems="center">    <Avatar  src="https://opgg-static.akamaized.net/images/medals/diamond_1.png" /> </Box>
                    </Grid>
                    <Grid item xs={7} container direction="row">
                        <Grid item xs={12} className={classes.helveticaF + " " + classes.textBold + " " + classes.blackColor}>Title</Grid>
                        <Grid item xs={12} className={classes.helveticaF + " " + classes.textBold + " " + classes.textBig}> position</Grid>
                    </Grid>
                </Grid>
        </div>
    );
}