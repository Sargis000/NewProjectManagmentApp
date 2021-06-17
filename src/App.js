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
                <AppHeader  />
              <div className="Content">
                 <LeftSlice task={taskDB}/>
                <Container fixed >
                       <div className="CreateTask">
                         <CreateTask onAdd={(taskname,summary)=>{
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
                         }}/>
                       </div>

                       <Divider className="DividerInline"/> 

                       <div className="CardPos">
                       <CardItem task={taskDB}
                                  onDelete={(task)=>{
                                         setTaskDB(taskDB.filter((t)=>t.id!==task.id))
                                                                                    }}
                                  onUpdate={(newTask)=>{
                                                 //WRITE
                                        }}
                                  onChange={(checkedTask)=>{
                                                 setTaskDB( taskDB.map((task)=>{
                                                 if(task.id===checkedTask.id){
                                                        return checkedTask;
                                                 }
                                           return task;
                                    }) 
                              )}}     
                         />
                       </div>                    
                </Container> 
              </div>    
         </div>
  );
}

export default App;
