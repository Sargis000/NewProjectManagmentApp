import './App.css';
import React,{useState} from 'react'
import AppHeader from './Project/Header/headerComponnet'
import {LeftSlice} from './Project/LeftSliceSite/containerSlice'
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { idGenerator} from './Project//Function/idGenerator'
import { currentTime} from './Project//Function/currentTime'
import { CardItem } from './Project/cardsTask';
import { CreateTask } from './Project/ArticalSlice/createTask';

const onAdd=(taskname,summary,taskDB,setTaskDB)=>{
       setTaskDB([
              ...taskDB,
              {
                 id:idGenerator(),
                 taskName:taskname,
                 summary:summary,
                 isCompleted:false,
                 currentTime:currentTime()  
              }
       ])
}
const onDelete=(task,taskDB,setTaskDB)=>{
       setTaskDB(taskDB.filter((t)=>t.id!==task.id))
}

const onChange=(checkedTask,taskDB,setTaskDB)=>{
          setTaskDB( taskDB.map((task)=>{
                  if(task.id===checkedTask.id){
                        return checkedTask;
                      }
               return task;
       }) 
)}

const onUpdate=(newTask,taskDB,setTaskDB)=>{
       setTaskDB(taskDB.map((task)=>{
              if(task.id===newTask.id){
                     return {
                            ...task,
                             taskName:newTask.taskName,
                             summary:newTask.summary,
                             currentTime:currentTime(),
                     } 
              }
           return task;
       })
  )}

function App() {
       const [taskDB,setTaskDB]=useState([
              {
                  id:idGenerator(),
                  taskName:"todo",
                  summary:"ToDo",
                  isCompleted:false,
                  currentTime:currentTime()
              }
          ])
           
  return (
        <div className="App">
             <AppHeader/>
                     <div className="Content">
                             <LeftSlice task={taskDB}/>
                             <Container fixed="fixed">
                                   <div className="CreateTask">
                                          <CreateTask onAdd={(taskname,summary)=>onAdd(taskname,summary,taskDB,setTaskDB)}/>
                                   </div>
                                   <Divider className="DividerInline"/>
                                   <div className="CardPos">
                                          <CardItem task={taskDB}
                                                 onDelete={(task)=>{ onDelete(task,taskDB,setTaskDB)}}
                                                 onUpdate={(newTask)=>{onUpdate(newTask,taskDB,setTaskDB)}}
                                                 onChange={(checkedTask)=>{onChange(checkedTask,taskDB,setTaskDB)}}/>
                                   </div>
                             </Container>
                     </div>
       </div>
  );
}

export default App;
