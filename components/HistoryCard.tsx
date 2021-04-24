import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Avatar,
  Box,
  Chip,
  Grid,
  GridList,
  GridListTile,
  Paper,
  Tooltip,
} from "@material-ui/core";

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
    appleSDGothicNeo:{
        fontSize: "11px",
        fontFamily: "AppleSDGothicNeo",
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
    grey2Color:{color: "#555e5e"},
    blackColor:{color : "333333"},
    textBold: {
        fontWeight: "bold",
      },
      textBig :{
          fontSize : "15px"
      }

  })
);

const tileData2 = [
       {
         img: "https://opgg-static.akamaized.net/images/lol/item/1001.png?image=q_auto:best&v=1618413338",
         title: 'Image',
         author: 'author',
       },
       {
        img: "https://opgg-static.akamaized.net/images/lol/item/1001.png?image=q_auto:best&v=1618413338",
        title: 'Image',
        author: 'author',
      },
      {
        img: "https://opgg-static.akamaized.net/images/lol/item/1001.png?image=q_auto:best&v=1618413338",
        title: 'Image',
        author: 'author',
      },
      {
        img: "https://opgg-static.akamaized.net/images/lol/item/1001.png?image=q_auto:best&v=1618413338",
        title: 'Image',
        author: 'author',
      }
     ];

     const tileData = [
        {
          img: "https://opgg-static.akamaized.net/images/lol/item/1001.png?image=q_auto:best&v=1618413338",
          title: 'Image',
          author: 'author',
        },
        {
         img: "https://opgg-static.akamaized.net/images/lol/item/1001.png?image=q_auto:best&v=1618413338",
         title: 'Image',
         author: 'author',
       },
       {
         img: "https://opgg-static.akamaized.net/images/lol/item/1001.png?image=q_auto:best&v=1618413338",
         title: 'Image',
         author: 'author',
       },
       {
         img: "https://opgg-static.akamaized.net/images/lol/item/1001.png?image=q_auto:best&v=1618413338",
         title: 'Image',
         author: 'author',
       },
       {
         img: "https://opgg-static.akamaized.net/images/lol/item/1001.png?image=q_auto:best&v=1618413338",
         title: 'Image',
         author: 'author',
       },
       {
         img: "https://opgg-static.akamaized.net/images/lol/item/1001.png?image=q_auto:best&v=1618413338",
         title: 'Image',
         author: 'author',
       },
       {
         img: "https://opgg-static.akamaized.net/images/lol/item/1001.png?image=q_auto:best&v=1618413338",
         title: 'Image',
         author: 'author',
       },
       {
         img: "https://opgg-static.akamaized.net/images/lol/item/1001.png?image=q_auto:best&v=1618413338",
         title: 'Image',
         author: 'author',
       }
      ];

/// have to loop over taglist
export default function ChampionStatCell() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper variant="outlined" square>
        <Grid container spacing={3} alignContent="center" alignItems="center" className={classes.gridContainer}>
          <Grid item xs container direction="row"  alignItems="center" alignContent="center" spacing={1}>
            <Grid item  xs={12} className={classes.appleSDGothicNeo + " " + classes.textBold + " " + classes.grey1Color}>
              Title
            </Grid>
            <Grid item xs={12} className={classes.appleSDGothicNeo + " " + classes.grey1Color}>

              position
            </Grid>
            <Grid item xs={12} className={classes.appleSDGothicNeo + " " + classes.textBold + " " + classes.redWR}>
              Title
            </Grid>
            <Grid item xs={12} className={classes.appleSDGothicNeo + "  " + classes.grey1Color}>

              position
            </Grid>
          </Grid>
          <Grid item xs container direction="row" alignItems="center" alignContent="center" spacing={1}>
              <Grid item xs={6}>
             <Avatar src="https://opgg-static.akamaized.net/images/medals/diamond_1.png" />
            </Grid>
            <Grid item xs={6}>
            <GridList  cols={2} spacing={1}>
                {tileData2.map((tile) => (
                    <Tooltip title={tile.title}>
                  <GridListTile key={tile.img} cols={1} className={classes.gridTileStyle}>
                    <img src={tile.img} alt={tile.title} />
                  </GridListTile>
                  </Tooltip>
                ))}
                </GridList>
            </Grid>
            <Grid item xs={12} className={classes.appleSDGothicNeo + "  " + classes.grey1Color}>
              Title
            </Grid>
          </Grid>
          <Grid item xs container direction="row" spacing={1}>
            <Grid item xs={12} className={classes.helveticaF + " " + classes.textBold +" " + classes.grey2Color + " " + classes.textBig}>
              Title
            </Grid>
            <Grid item xs={12} className={classes.appleSDGothicNeo + " " + classes.grey2Color}>

              position
            </Grid>
            <Grid item xs={12} className={classes.appleSDGothicNeo}>

            <Chip  size="small" label="Basic"/>
            </Grid>
          </Grid>
          <Grid item xs container direction="row" alignItems="center" alignContent="center" spacing={1}>
            <Grid item xs={12} className={classes.helveticaF + " " + classes.grey2Color}>
              Title
            </Grid>
            <Grid item xs={12} className={classes.appleSDGothicNeo + " " + classes.grey2Color}>

              position
            </Grid>
            <Grid item xs={12} className={classes.helveticaF + " " + classes.redWR}>

              pkill
            </Grid>
          </Grid>
          <Grid item xs container direction="row" spacing={1}>
            <Grid item xs={12} className={classes.firstLine}>
              <GridList  cols={4}  spacing={1}>
                {tileData.map((tile) => (
                    <Tooltip title={tile.title}>
                  <GridListTile key={tile.img} cols={1}   className={classes.gridTileStyle}>
                    <img src={tile.img} alt={tile.title} />
                  </GridListTile>
                  </Tooltip>
                ))}
              </GridList>
            </Grid>
            <Grid item xs={12} className={classes.helveticaF + " " + classes.blackColor + " "  }>
              position
            </Grid>
          </Grid>
          <Grid item xs container direction="row" spacing={1}>
            <Grid item xs={12} className={classes.firstLine}>
              Title
            </Grid>
            <Grid item xs={12} className={classes.secondLine}>

              position
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
