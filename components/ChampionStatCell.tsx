import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Grid, Paper } from '@material-ui/core';
import { Champion } from '../redux/type/championUsage';
import { kdacolor, KDAFormula, percentagePar } from '../tools/calctool';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,

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
            fontFamily: "Helvetica"
        },
        greenWR: { color: "#2daf7f" },
        redWR: { color: "#c6443e" },
        yellowWR: { color: "#e19205" },
        containerPadding: {
            padding: "15px"
        },
        greenKDA: { color: "#2daf7f" },
        blueKDA: { color: "#1f8ecd" },
        yellowKDA: { color: "#e19205" },

    }));

interface ChampionStatCellProps {
    champData?: Champion[]
}



/// have to loop over taglist
export default function ChampionStatCell(props: ChampionStatCellProps) {
    const classes = useStyles();
    const { champData } = props;

    return (
        <div className={classes.root}>
            {champData?.map((value, index) => {
                return (<Paper variant="outlined" square key={index} >
                    <Grid container spacing={0} alignContent="center" alignItems="center" className={classes.containerPadding}>
                        <Grid item xs>
                            <Avatar src={value.imageUrl} />
                        </Grid>
                        <Grid item xs={3} container direction="row">
                            <Grid item xs={12} className={classes.firstLine}>{value.name}</Grid>
                            <Grid item xs={12} className={classes.secondLine}> CS {value.cs}</Grid>
                        </Grid>
                        <Grid item xs={3} container direction="row">
                            <Grid item xs={12} className={classes.firstLine + " " + kdacolor(KDAFormula(value.kills, value.assists, value.deaths, value.games), classes)}>{KDAFormula(value.kills, value.assists, value.deaths, value.games)}:1 KDA</Grid>
                            <Grid item xs={12} className={classes.secondLine}> {Math.round(value.kills / value.games)} / {Math.round(value.deaths / value.games)} / {Math.round(value.assists / value.games)}</Grid>
                        </Grid>
                        <Grid item xs={3} container direction="row">
                            <Grid item xs={12} className={classes.firstLine + " " + (percentagePar(value.wins, value.games) >= 60 )? classes.redWR : ""}>{percentagePar(value.wins, value.games)}%</Grid>
                            <Grid item xs={12} className={classes.secondLine}> {value.games} Played </Grid>
                        </Grid>
                    </Grid>
                </Paper>)
            })}
        </div>
    );
}