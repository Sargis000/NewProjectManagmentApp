import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {DrawToggleMenu}  from './toggleMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  ground: {
    background:'#00CED1',
  },
  title:{
    flexGrow: 1,
     color:'#F0FFF0'
  }

}));

export default function AppHeader() {
  const classes = useStyles();
  const [toggleDrawer,setToggleDrawer]=useState(false)
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.ground}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=>setToggleDrawer(!toggleDrawer)}>
            <MenuIcon  />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Project Managment
          </Typography>
          <Button color="inherit" >Login</Button>
        </Toolbar>
      </AppBar>
      <DrawToggleMenu handler={toggleDrawer}></DrawToggleMenu>
    </div>
  );
}