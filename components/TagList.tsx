import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { PreviousTier } from '../redux/type/summonerSummary';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding:"15px",

    },
    button:{
backgroundColor: '#e0e3e3',
border: 'solid 1px #d0d3d4',
    height :  '20px',
    fontFamily: "Helvetica",
    fontSize: "11px",
    color: "#657070",
    letterSpacing: "-0.42px",
    padding : "5px",
    margin:"5px"
    },
    category:{
        fontWeight: "bold",
        paddingRight:"2px",

    }
  }));

  interface TagListProps {
    previousTiers?:[PreviousTier]
  }

  /// have to loop over taglist
export default function TagList(props : TagListProps) {
    const classes = useStyles();
    const { previousTiers } = props;

    return (
        <div className={classes.root}>

                {previousTiers?.map((value, index) => {

                   return  <Button key={index} className={classes.button} variant="outlined"> <p className={classes.category}> S{value.season}</p>  {value.tierDivision}</Button>
                })}
                
          </div>
        );
}