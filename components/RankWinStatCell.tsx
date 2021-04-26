import React from 'react';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import { Avatar, Grid, LinearProgress, Paper } from '@material-ui/core';
import { RecentWinRate } from '../redux/type/championUsage';
import { percentagePar } from '../tools/calctool';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        containerPadding: {
            padding: "15px",
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
        yellowWR: { color: "#e19205" }

    }));

const BorderLinearProgress = withStyles((theme: Theme) =>
    createStyles({
        root: {
            height: 24,
            borderRadius: 4,
        },
        colorPrimary: {
            backgroundColor: "#ee5a52",
        },
        bar: {
            borderRadius: 4,
            backgroundColor: '#1f8ecd',
        },
    }),
)(LinearProgress);

interface RankWinStatCellProps {
    rankData?: RecentWinRate[]
}

/// have to loop over taglist
export default function RankWinStatCell(props: RankWinStatCellProps) {
    const classes = useStyles();
    const { rankData } = props;

    return (
        <div className={classes.root}>
            {rankData?.map((value, index) => {

                return (<Paper variant="outlined" key={index} square>
                    <Grid container spacing={1} alignContent="center" alignItems="center" className={classes.containerPadding}>
                        <Grid item xs>
                            <Avatar src={value.imageUrl} />
                        </Grid>
                        <Grid item xs={3} container direction="row">
                            <Grid item xs={12} className={classes.firstLine}>{value.name}</Grid>
                        </Grid>
                        <Grid item xs={3} container direction="row">
                            <Grid item xs={12} className={classes.secondLine}> {percentagePar(value.wins, value.wins + value.losses)}%</Grid>
                        </Grid>
                        <Grid item xs={3} container direction="row">
                            <Grid item xs={12} className={classes.firstLine}>
                                <BorderLinearProgress variant="determinate" value={percentagePar(value.wins, value.wins + value.losses)} />
                            </Grid>

                        </Grid>
                    </Grid>
                </Paper>)
            }
            )
            }
        </div>
    );
}