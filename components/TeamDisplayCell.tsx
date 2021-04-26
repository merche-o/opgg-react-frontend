import React, { Dispatch, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import { ISummonerSummary } from '../redux/type/summonerSummary';
import { GlobalState } from '../redux/type/global';
import { useDispatch, useSelector } from 'react-redux';
import { ITeamsData } from '../redux/type/teams';
import { getTeamData } from '../redux/actionTeamData';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            borderBottom: "1px",
            padding: "15px",


        },
        name: {
            fontFamily: "Helvetica",
            fontSize: "11px",
            letterSpacing: "-0.42px",
            color: "#555555",
        },
        desc: {
            fontFamily: " Helvetica",
            fontSize: "11px",
            color: "#657070",
        },
        textGrid: {
            height: "100%"
        },
        badge: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
            position: 'absolute',
        },
        image: {
            //  backgroundImage: "url(https://opgg-static.akamaized.net/images/profile_icons/profileIcon1625.jpg)",
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

interface GameHistoryCellProps {
    gameId: string
}

export default function TeamDisplayCell(props: GameHistoryCellProps) {
    const classes = useStyles();
    const { gameId } = props;
    const dispatch: Dispatch<any> = useDispatch();


    const sumSummaery: ISummonerSummary | undefined = useSelector(
        (state: GlobalState) => state.summonerSummatry.summoner
    );

    var teamData: ITeamsData
    useEffect(() => {
      /*  fetch(BASE_URL + sumSummaery?.summoner.name + "/matchDetail/"+gameId+"?hl=en", {
            "method": "GET",
          })
            .then(response => response.json())
            .then(response => {
               
            teamData = response as ITeamsData
      
            })
            .catch(err => {
              console.log(err);
            });    */},
            );

    return (
        <div >
                                            {console.log(gameId)}

            <Grid container direction="row" spacing={1}>
                  
              <Grid item  container xs={6} className={classes.name}>
                        player list

              
                                </Grid>
                <Grid item xs={6} className={classes.name}>
                  player list
                </Grid>
                    
            </Grid>


        </div>
    );
}