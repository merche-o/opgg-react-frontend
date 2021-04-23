import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid, Paper } from '@material-ui/core';
import Image from 'material-ui-image'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,

        }
    }));

/// have to loop over taglist
export default function RankCard() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper variant="outlined" square>
                <Grid container  spacing={5}>
                    <Grid item xs>
                        <Image src="https://opgg-static.akamaized.net/images/medals/diamond_1.png" />
                    </Grid>
                    <Grid item xs={7} container direction="row">
                        <Grid item xs={12}>Title</Grid>
                        <Grid item xs={12}>position</Grid>
                        <Grid item xs={12}>ranked</Grid>
                        <Grid item xs={12}>rank point</Grid>
                        <Grid item xs={12}>win ration</Grid>

                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}