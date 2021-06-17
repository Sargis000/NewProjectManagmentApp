import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
    root: {
      width:200,
      height:700,
      background: '#e6fff9',
      borderRight:'solid #e6e6e6'
    },
  });

export const LeftSlice=({task})=>{
    const lent=task.length
    const completed=task.filter((t)=>t.isCompleted).length;
    const classes = useStyles();
     return(
         <div className={classes.root} >
                 <List className={classes.root}>
                        <ListItem button>
                            <ListItemText>Current Task {lent}</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText>Completed Tasks  {completed}</ListItemText>
                        </ListItem>
                </List>
         </div>
     )
}