import React, { Dispatch, useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import { ITeamsData } from '../redux/type/teams';
import { BASE_URL } from '../tools/env';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            borderBottom: "1px",
            padding: "15px",


        },
        name: {
          
        },
        gridTileStyle: {
            position: "relative",
            float: "left",
            width: "100%",
            maxHeight: "16px",
            maxWidth: "16px",
            minHeight: "16px",
            minWidth: "16px",
            overflow: "hidden",
            // height: '100% !important'
          },
          textWrapping:{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display:"inline-block",
            whiteSpace: "nowrap",
            maxWidth:"45px",
            width:"45px",
            fontFamily: "Helvetica",
            fontSize: "11px",
            letterSpacing: "-0.42px",
            color: "#555555",

          }
    }));

interface TeamDisplayellProps {
    gameId: string,
    userName:string
}

export default function TeamDisplayCell(props: TeamDisplayellProps) {
    const classes = useStyles();
    const { gameId, userName } = props;


    const [teamData, setTeamData] = useState<ITeamsData>({
        gameId:gameId,
        teams: []
    });
 
    useEffect(() => {
        fetch(BASE_URL + userName + "/matchDetail/"+gameId+"?hl=en", {
            "method": "GET",
          })
            .then(response => response.json())
            .then(response => {
               if (0 === teamData.teams.length) {
                 setTeamData(response as ITeamsData)
               }
            })
            .catch(err => {
              console.log(err);
            }); [teamData.teams]   },
            );

    return (
        <div >

            <Grid container direction="row" spacing={1}>
                  
                    { 
                     
                    teamData?.teams.map ((team, index) => { 
                    return (   <Grid container direction='row' item xs={5} className={classes.name} key={team.teamId} >

                    {team.players.map((value, index) => { 
                        return (
                            <Grid container key={index}>
                            <Grid item xs={1} className={classes.gridTileStyle}>
                            <img src={value.champion.imageUrl} />
                            </Grid>
                            <Grid item xs={1} >
                            <Typography noWrap className={classes.textWrapping} key={value.summonerId}>{value.summonerName}</Typography>
                            </Grid>
                            </Grid>
                        )
                        })}
                            </Grid>)})
                }   
            </Grid>
        </div>
    );
}