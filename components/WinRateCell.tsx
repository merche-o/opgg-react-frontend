import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Box, Grid, Paper } from '@material-ui/core';
import {
  Chart,
  PieSeries,
  
} from "@devexpress/dx-react-chart-material-ui";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    gridContainer:{
        padding:"15px",
        height:"100%"
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
        textAlign: "center",
     //   height: "100%"
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
    heightMax:{
      maxHeight: "75px"
    }


  })
);

export const areas = [{
  name: 'win',
  area: 0.6
}, {
  name: 'Loss',
  area: 0.4
}];


/// have to loop over taglist
export default function WinRateCell() {
    const classes = useStyles();
    return (
                <Grid container spacing={0} direction="row" alignContent="center" alignItems="center" className={classes.gridContainer}>
                    <Grid item xs={6} className={classes.helveticaF + " " + classes.smallText + " " + classes.grey1Color}>
                    win data
                   
                   
                    <Box alignContent="center" >    
                     <Chart data={areas} className={classes.heightMax}>
                    <PieSeries  valueField="area" argumentField="name" innerRadius={0.6}/>
                    </Chart> </Box>
                    </Grid>
                    <Grid item xs={6} container direction="row">
                        <Grid item xs={12} className={classes.helveticaF + " " + classes.textBold + " " + classes.blackColor}>Title</Grid>
                        <Grid item xs={12} className={classes.helveticaF + " " + classes.textBold + " " + classes.textBig}> position</Grid>
                    </Grid>
                </Grid>
    );
}