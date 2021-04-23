import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            borderBottom: "1px",
            padding: "15px",


        },
        name: {
            fontFamily: "Helvetica",
            fontSize: "20px",
            fontWeight: "bold",
            letterSpacing: "-0.77px",
            color: "#242929",
        },
        desc: {
            fontFamily: " Helvetica",
            fontSize: "11px",
            color: "#657070",
        },
        textGrid:{
            height:"100%"
        },
        badge: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
            position: 'absolute',
        },
        image: {
            backgroundImage: "url(https://opgg-static.akamaized.net/images/profile_icons/profileIcon1625.jpg)",
            backgroundPosition: "center", /* Center the image */
            backgroundRepeat: "no-repeat", /* Do not repeat the image */
            backgroundSize: "85%" /* Resize the background image to cover the entire container */
        },
        level: {
            zIndex: 100,
            position: 'absolute',
            color: "#eabd56"
            //  marginTop: "-14px",
            //  backgroundImage: "url('../assets/bglevelbox.png')",
        },
        portrait: {
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
        }
    }));

export default function HistoryCard() {
    const classes = useStyles();
    return (
        <div >

            <Paper variant="outlined" square>
        <Typography>fsdf  </Typography>
              </Paper>

        </div>
    );
}