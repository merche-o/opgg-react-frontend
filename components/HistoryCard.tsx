import React from "react";
import { createStyles, makeStyles, Theme, withStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Box,
  Chip,
  Divider,
  Grid,
  GridList,
  GridListTile,
  Paper,
  Typography,
} from "@material-ui/core";
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import parse from 'html-react-parser';

import { IGameData, Item } from "../redux/type/gameData";
import { useSelector } from "react-redux";
import { GlobalState } from "../redux/type/global";
import Moment from 'react-moment';
import TeamDisplayCell from "./TeamDisplayCell";
import { rootItem } from "../redux/type/item";
import { timeDifference } from "../tools/calctool";

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
    lightGrey: { color: "#948e8d" },
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
    chipStyleRed: {
      display: "inline-block",
      background: " #ee5a52",
      border: "1px solid #c6443e",
      borderRadius: "15px",
      padding: "2px 5px",
      lineHeight: "1",
      color: "#ffffff",
      marginRigt: "2px"

    },
    chipColorPurple: {
      display: "inline-block",
      background: " #8c51c5",
      border: "1px solid #7f3590",
      borderRadius: "15px",
      padding: "2px 5px",
      lineHeight: "1",
      color: "#ffffff"
    },
    chipPadding: {
      padding: "15px",

    }
  })
);

const HtmlTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: '#222727',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(11),
  },
}))(Tooltip);

interface HistoryCardProps {
  matches?: IGameData
}

export default function HistoryCard(props: HistoryCardProps) {
  const classes = useStyles();
  const { matches } = props;

  const itemsCollection: rootItem[] | undefined = useSelector(
    (state: GlobalState) => state.itemData.data
  );

  function getItemID(data: string) {

    var start = data.search("item/")
    var end = data.search(".png")

    return data.slice(start + 5, end)

  }

  function getChampionName(data: string) {
    var start = data.search("champion/")
    var end = data.search(".png")

    return data.slice(start + 9, end)

  }

  function returnDesc(item: Item) {
    var id = getItemID(item.imageUrl)

    if (typeof itemsCollection != typeof []) {
      return ""
    }
    var citem = itemsCollection[id]
    if (citem == undefined) {
      return ""
    } else {
      return <React.Fragment>    {citem["name"]} <br /><br />   {parse(citem["description"])} <br /><br />  {citem["plaintext"]}  </React.Fragment>
    }
  }
  
  function returnMinSeconDate(timestamp:number){
    var time = new Date(timestamp * 1000)
  
    return time.getMinutes()+"m " + time.getSeconds() +"s"

  }
  return (

    <div className={classes.root}>
      {matches?.games?.map((value, index) => {
        return (
          <Paper variant="outlined" square key={index} className={value.isWin ? classes.win : classes.loose} >
            <Grid container spacing={1} alignContent="center" alignItems="center" className={classes.gridContainer} key={index} >
              <Grid item xs container direction="row" alignItems="center" alignContent="center" spacing={0} >
                <Grid item xs={12} className={classes.appleSDGothicNeo + " " + classes.textBold + " " + classes.grey1Color}>
                  {value.gameType}
                </Grid>
                <Grid item xs={12} className={classes.appleSDGothicNeo + " " + classes.grey1Color}>
                {timeDifference(Date.now(), value.createDate * 1000)}
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
                  {returnMinSeconDate(value.gameLength)}
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
                        <GridListTile
                          key={index}
                          cols={1}
                          className={classes.gridTileStyle}
                        >
                          <img src={tile.imageUrl} alt={tile.imageUrl} />
                        </GridListTile>
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
                  {getChampionName(value.champion.imageUrl)}
                </Grid>
              </Grid>
              <Grid item xs container direction="row" spacing={1}>
                <Grid
                  item
                  xs={11}
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
                    " " + classes.textBig + " " + classes.lightGrey}> / </Typography> <Typography display="inline" className={classes.helveticaF +
                      " " +
                      classes.textBold +
                      " " +
                      classes.textBig + " " + classes.redWR}>{value.stats.general.death}</Typography> <Typography display="inline" className={classes.helveticaF +
                        " " + classes.textBig + " " + classes.lightGrey}> / </Typography> <Typography className={
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
                  xs={11}
                  className={classes.appleSDGothicNeo}
                >
                  <Typography display="inline" className={classes.textBold + " " + classes.blackColor + " " + classes.appleSDGothicNeo} >{value.stats.general.kdaString} </Typography> <Typography display="inline" className={
                    classes.appleSDGothicNeo + " " + classes.grey2Color
                  }>KDA</Typography>
                </Grid>
                <Grid item xs={11} className={classes.appleSDGothicNeo}>
                  <Typography display="inline" className={classes.appleSDGothicNeo + " " + classes.chipPadding} align="center" >
                    {value.stats.general.largestMultiKillString != "" && (
                      <span className={classes.chipStyleRed}> {value.stats.general.largestMultiKillString} </span>

                    )}
                    {value.stats.general.opScoreBadge != "" && (
                      <span className={classes.chipColorPurple}> {value.stats.general.opScoreBadge} </span>

                    )}
                  </Typography>
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
                  xs={11}
                  className={classes.helveticaF + " " + classes.grey2Color}
                >
                  Level {value.champion.level}
                </Grid>
                <Grid
                  item
                  xs={11}
                  className={
                    classes.appleSDGothicNeo + " " + classes.grey2Color
                  }
                >
                  {value.stats.general.cs}({value.stats.general.csPerMin}) CS
                </Grid>
                <Grid
                  item
                  xs={11}
                  className={classes.helveticaF + " " + classes.redWR}
                >
                  P/Kill {value.stats.general.contributionForKillRate}
                </Grid>
              </Grid>
              <Grid item xs container direction="row" spacing={1}>
                <Grid item xs={12} className={classes.firstLine}>
                  <GridList cols={4} spacing={1}>
                    {value.items.map((tile) => (
                      <HtmlTooltip title={returnDesc(tile)} arrow >
                        <GridListTile
                          key={tile.imageUrl}
                          cols={1}
                          className={classes.gridTileStyle}
                        >
                          <img src={tile.imageUrl} alt={tile.imageUrl} />
                        </GridListTile>
                      </HtmlTooltip>
                    ))}
                  </GridList>
                </Grid>
                <Grid
                  item
                  xs={12}
                  className={
                    classes.helveticaF + " " + classes.blackColor + " "
                  }
                  container spacing={2}>
                  <Grid item xs={1}>
                    {value.isWin ? <img src={require('../assets/icon-ward-blue.svg')} /> : <img src={require('../assets/icon-ward-red.svg')} />

                    }
                  </Grid>
                  <Grid item xs={9}>
                    controle ward {value.stats.ward.sightWardsBought + value.stats.ward.visionWardsBought}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs container direction="row" spacing={1}>
                <TeamDisplayCell gameId={value.gameId} userName={value.summonerName} key={value.gameId} />
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </div>
  );
}
