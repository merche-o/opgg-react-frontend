import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Avatar,
  Box,
  Chip,
  Divider,
  Grid,
  GridList,
  GridListTile,
  Paper,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { IGameData } from "../redux/type/gameData";
import { useSelector } from "react-redux";
import { GlobalState } from "../redux/type/global";
import Moment from 'react-moment';
import TeamDisplayCell from "./TeamDisplayCell";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    gridContainer: {
      padding: "7px",
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
    appleSDGothicNeo: {
      fontSize: "11px",
      fontFamily: "AppleSDGothicNeo",
      textAlign: "center",
    },
    helveticaF: {
      fontSize: "11px",
      fontFamily: "Helvetica",
      textAlign: "center",
    },
    gridTileStyle: {
      position: "relative",
      float: "left",
      width: "100%",
      maxHeight: "22px",
      maxWidth: "22px",
      minHeight: "22px",
      minWidth: "22px",
      overflow: "hidden",
      // height: '100% !important'
    },
    greenWR: { color: "#2daf7f" },
    redWR: { color: "#d0021b" },
    yellowWR: { color: "#e19205" },
    grey1Color: { color: "#555555" },
    grey2Color: { color: "#555e5e" },
    lightGrey: {color: "#948e8d"},
    blackColor: { color: "333333" },
    textBold: {
      fontWeight: "bold",
    },
    textBig: {
      fontSize: "15px",
    },
    win: {
      backgroundColor: "#b0ceea",
      marginBottom: "8px"
    },
    loose: {
      backgroundColor: "#d6b5b2",
      marginBottom: "8px"

    },
     chipStyle:{
      display: "inline-block",
      background:" #ee5a52",
      border: "1px solid #c6443e",
      borderRadius: "15px",
      padding: "2px 5px",
      lineHeight: "1"
     }
  })
);

interface ChampionStatCellProps {
  matches?: IGameData
}

/// have to loop over taglist
export default function ChampionStatCell(props: ChampionStatCellProps) {
  const classes = useStyles();
  const { matches } = props;


  return (

    <div className={classes.root}>
      {matches?.games?.map((value, index) => {
        return (
          <Paper variant="outlined" square key={index} className={value.isWin ? classes.win : classes.loose}>
            <Grid container spacing={3} alignContent="center" alignItems="center" className={classes.gridContainer} >
              <Grid item xs container direction="row" alignItems="center" alignContent="center" spacing={1} >
                <Grid item xs={12} className={classes.appleSDGothicNeo + " " + classes.textBold + " " + classes.grey1Color}>
                  {value.gameType}
                </Grid>
                <Grid item xs={12} className={classes.appleSDGothicNeo + " " + classes.grey1Color}>

                  {<Moment fromNow ago> Date(value.createDate).toUTCString()</Moment>}
                  
                </Grid>
                <Grid item xs={12}>
                <Divider light />

                </Grid>

                <Grid item xs={12} className={classes.appleSDGothicNeo + " " + classes.textBold + " " + classes.redWR}>
                  
                  {value.isWin === true && (
                    <Box className={classes.greenWR}>  Victory</Box>
                  )
                  }
                  {value.isWin === false && (
                    <Box>Defeat</Box>
                  )
                  }
                </Grid>
                <Grid item xs={12} className={classes.appleSDGothicNeo + "  " + classes.grey1Color}>
                  {new Date(value.gameLength * 1000).toISOString().substr(11, 8)}
                </Grid>
              </Grid>
              <Grid item xs
                container
                direction="row"
                alignItems="center"
                alignContent="center"
                spacing={1}
              >
                <Grid item xs={6}>
                  <Avatar src={value.champion.imageUrl} />
                </Grid>
                <Grid item xs={6}>
                  <GridList cols={2} spacing={1}>
                    {value.spells.map((tile, index) => (
                      <Tooltip title={index}>
                        <GridListTile
                          key={index}
                          cols={1}
                          className={classes.gridTileStyle}
                        >
                          <img src={tile.imageUrl} alt={tile.imageUrl} />
                        </GridListTile>
                      </Tooltip>
                    ))}
                  </GridList>
                </Grid>
                <Grid
                  item
                  xs={12}
                  className={
                    classes.appleSDGothicNeo + "  " + classes.grey1Color
                  }
                >
                  {value.summonerName}
                </Grid>
              </Grid>
              <Grid item xs container direction="row" spacing={1}>
                <Grid
                  item
                  xs={12}
                  className={
                    classes.helveticaF +
                    " " +
                    classes.textBold +
                    " " +
                    classes.grey2Color +
                    " " +
                    classes.textBig
                  }
                >
                  <Typography className={
                    classes.helveticaF +
                    " " +
                    classes.textBold +
                    " " +
                    classes.grey2Color +
                    " " +
                    classes.textBig
                  } display="inline">{value.stats.general.kill}</Typography>  <Typography display="inline" className={classes.helveticaF +
                    " " + classes.textBig + " " + classes.lightGrey}> / </Typography> <Typography display="inline" className={   classes.helveticaF +
                    " " +
                    classes.textBold +
                    " " +
                    classes.textBig + " " + classes.redWR}>{value.stats.general.death}</Typography> <Typography display="inline" className={classes.helveticaF +
                      " " + classes.textBig + " " + classes.lightGrey}> / </Typography> <Typography  className={
                      classes.helveticaF +
                      " " +
                      classes.textBold +
                      " " +
                      classes.grey2Color +
                      " " +
                      classes.textBig
                    } display="inline">{value.stats.general.assist}</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                 className={classes.appleSDGothicNeo}
                >
                  <Typography display="inline" className={classes.textBold + " " + classes.blackColor + " " + classes.appleSDGothicNeo} >{value.stats.general.kdaString} </Typography> <Typography  display="inline" className={
                    classes.appleSDGothicNeo + " " + classes.grey2Color
                  }>KDA</Typography>
                </Grid>
                <Grid container item xs={12} spacing={3} alignContent="center" alignItems="center" className={classes.appleSDGothicNeo }>
                
                  {value.stats.general.largestMultiKillString != "" && (
                                 <span className={classes.chipStyle}> {value.stats.general.largestMultiKillString} </span>

                  )}
                  {value.stats.general.opScoreBadge != "" && (
                    <span className={classes.chipStyle}> {value.stats.general.opScoreBadge} </span>
                   
                  )}
                
                </Grid>
              </Grid>
              <Grid
                item
                xs
                container
                direction="row"
                alignItems="center"
                alignContent="center"
                spacing={1}
              >
                <Grid
                  item
                  xs={12}
                  className={classes.helveticaF + " " + classes.grey2Color}
                >
                  Level {value.champion.level}
                </Grid>
                <Grid
                  item
                  xs={12}
                  className={
                    classes.appleSDGothicNeo + " " + classes.grey2Color
                  }
                >
                  {value.stats.general.cs}({value.stats.general.csPerMin}) CS
                </Grid>
                <Grid
                  item
                  xs={12}
                  className={classes.helveticaF + " " + classes.redWR}
                >
                  P/KILL {value.stats.general.contributionForKillRate}%
                </Grid>
              </Grid>
              <Grid item xs container direction="row" spacing={1}>
                <Grid item xs={12} className={classes.firstLine}>
                  <GridList cols={4} spacing={1}>
                    {value.items.map((tile) => (
                      <Tooltip title={tile.imageUrl}>
                        <GridListTile
                          key={tile.imageUrl}
                          cols={1}
                          className={classes.gridTileStyle}
                        >
                          <img src={tile.imageUrl} alt={tile.imageUrl} />
                        </GridListTile>
                      </Tooltip>
                    ))}
                  </GridList>
                </Grid>
                <Grid
                  item
                  xs={12}
                  className={
                    classes.helveticaF + " " + classes.blackColor + " "
                  }
                >
                  controle ward {value.stats.ward.sightWardsBought + value.stats.ward.visionWardsBought}
                </Grid>
              </Grid>
              <Grid item xs container direction="row" spacing={1}>
               <TeamDisplayCell gameId={value.gameId} userName={value.summonerName} key={value.gameId}/>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </div>
  );
}
