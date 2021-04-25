import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar :{
        backgroundColor: '#1ea1f7'
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
       padding: theme.spacing(0, 2),
      height: '100%',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'right',
      justifyContent: 'right',
      color: "#1ea1f7",
      fontSize: "18px",
      fontFamily : "Helvetica-Bold"
    },
    inputRoot: {
      color: '#727272',
      backgroundColor: '#fff'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: '1em',
      paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);

export default function SearchAppBar() {
  const classes = useStyles();

 

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} >
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            OP.GG
          </Typography>
          <div className={classes.search}>

            <InputBase
              placeholder="name1,name2..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              endAdornment={ <div className={classes.searchIcon}
          //    onKeyPress={onKeyDown()}
            //  onChange={onChange()}
              >
              .GG
            </div>}

            />
                       
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
