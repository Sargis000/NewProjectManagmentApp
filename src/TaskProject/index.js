/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
import AppHeader from './Header/headerComponnet'
import { makeStyles } from '@material-ui/core/styles';
import {AddTask} from './leftSlice/addTask'
import {CreateTask} from './main/createTask'
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center'
    },
    taskbut:{
        position:'relative',
        right:20,
        bottom:550
    }
  }));

export const Project=()=>{ 
    const projects=useSelector((state)=>state.projects)
    const params=useParams();
    const classes=useStyles()
    const specProject=projects.find((project)=>{
         if(Number(params.id)===project.id){
             return project;
         }
         return null;
    })

    return (
        <>
        <div className={classes.root}>
                 <AppHeader projectName={specProject}/>           
                 <AddTask/> 
            <div className={classes.taskbut}>
                   <CreateTask/>
            </div>  
            
        </div>
        </>
    )
}