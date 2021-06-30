import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
import { Checkbox } from '@material-ui/core';
import { FavoriteBorder,Favorite } from '@material-ui/icons';
import {UpdateTask} from './updateTask'
import {Link} from 'react-router-dom'
const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    iconpos:{
        position:'relative',
        left:25
}});
  
export const CardItem=({task,onDelete,onUpdate,onChange})=> {
    const classes = useStyles();
    const [isOpenmodal,setModal]=useState(false);
    const [currentTask,setCurrentTask]=useState(null)

    const toggle=(taskItem)=>{
        setCurrentTask(taskItem)
        setModal(!isOpenmodal)

    }
    const getValue=(e,taskItem)=>{
        onChange({
            ...taskItem,
            isCompleted:e.target.checked
        })
    }
    return (
     <>
        {
              task.map((taskItem)=>{
                    return(
                             <div key={taskItem.id}>
                                  <Card className={classes.card}>
                                      <CardContent>
                                          <Typography
                                              className={classes.title}
                                              color="textSecondary"
                                              gutterBottom="gutterBottom">
                                              <lable>{taskItem.currentTime}</lable>
                                          </Typography>
                                          <Typography variant="h5" component="h2">
                                          <Link to={`/project/${taskItem.id}`} color='inherit'>
                                               {taskItem.taskName}  
                                          </Link>
                                          </Typography>
                                          <Typography variant="body2" component="p">
                                              {taskItem.summary}
                                          </Typography>
                                      </CardContent>
                                      <CardActions className={classes.iconpos}>
                                          <Button size="small" onClick={()=>{ toggle(taskItem)} }>
                                              <UpdateIcon/>
                                          </Button>
                                          <Button size="small" onClick={()=>{onDelete(taskItem)} }><DeleteIcon/></Button>
                                          <Checkbox
                                              color="primary"
                                              icon={<FavoriteBorder/>}
                                              checkedIcon={<Favorite/>}
                                              onChange={(e)=>getValue(e,taskItem)}/>
                                      </CardActions>
                                  </Card>   
                              
                         </div>
                         )
                })
        }
        { currentTask!==null? <UpdateTask modal={isOpenmodal} task={currentTask} onUpdate={(currentTask)=>{onUpdate(currentTask)}}/>:null}
     </>
    );
  }