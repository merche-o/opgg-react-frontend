import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Box, Grid, Paper, Tab, Tabs, Typography } from "@material-ui/core";

import Image from "material-ui-image";
import WinRateCell from "./WinRateCell"
import GameHistoryCell from "./GameHistoryCell"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    cardPosition:{
      display: "flex",
      justifyContent: "center",
      alignItems:"center",
      alignContent:"center"
    },
    bigText: {
      fontSize: "14px",
      fontFamily: "Helvetica",
    },
    smallText: {
      fontSize: "11px",
      fontFamily: "Helvetica",
    },
    mediumText: {
      fontSize: "12px",
      fontFamily: "Helvetica",
    },
    rbigText: {
      fontSize: "16px",
      fontFamily: "Helvetica",
    },
    textBold: {
      fontWeight: "bold",
    },
    greenWR: { color: "#2daf7f" },
    redWR: { color: "#c6443e" },
    yellowWR: { color: "#e19205" },
  })
);

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          <Grid container className={classes.cardPosition}>
            <Grid item xs>
          <Paper variant="outlined" square>
                  <WinRateCell /> 
         </Paper>
          </Grid>
          <Grid item xs>

          <Paper variant="outlined" square>
        <GameHistoryCell/>
        <GameHistoryCell/>
        <GameHistoryCell/>

          </Paper>
          </Grid>
          <Grid item xs>

          <Paper variant="outlined" square>
            <Typography>{children} fddsf </Typography>
          </Paper>
          </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
}

/// have to loop over taglist
export default function GameSummaryTab() {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState<Number>(0);

  const handleChange = (e: React.ChangeEvent<{}>, value: any) => {
    console.log("change !");
    console.log(value as Number);
    setTabIndex(value as Number);
  };

  return (
    <div className={classes.root}>
      <Paper variant="outlined" square>
        <Grid container spacing={0} alignContent="center" alignItems="center">
          <Grid item xs={12}>
            <Tabs value={tabIndex} onChange={handleChange}>
              <Tab label="Total" />
              <Tab label="Ranked Solo" />
              <Tab label="Ranked Flex" />
            </Tabs>
          </Grid>
          <Grid item xs={12}>
            <TabPanel value={tabIndex} index={0}></TabPanel>
            <TabPanel value={tabIndex} index={1}></TabPanel>
            <TabPanel value={tabIndex} index={2}></TabPanel>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
