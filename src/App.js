import './App.css';
//import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { projectAdd,projectUpdate,projectRemove,onChange } from './Action/project';
import AppHeader from './Project/Header/headerComponnet'
import {LeftSlice} from './Project/LeftSliceSite/containerSlice'
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { CardItem } from './Project/cardsTask';
import { CreateProject } from './Project/ArticalSlice/createProject';
import { idGenerator} from './Project/Function/idGenerator'
import {currentTime} from './Project/Function/currentTime'



function App() {
const projects=useSelector((state)=>state.projects)
const dispatch =useDispatch();
  return (
           <div className="App">
              <AppHeader/>
                            <div className="Content">
                                   <LeftSlice task={projects}/>
                                   <Container fixed="fixed">
                                          <div className="CreateTask">
                                                 <CreateProject onAdd={(taskname,summary)=>{
                                                        let newtask={
                                                                      id:idGenerator(),
                                                                      taskName:taskname,
                                                                      summary:summary,
                                                                      isCompleted:false,
                                                                      currentTime:currentTime() 

                                                        }
                                                        dispatch(projectAdd(newtask))
                                                 }}/>
                                          </div>
                                          <Divider className="DividerInline"/>
                                          <div className="CardPos">
                                                 <CardItem task={projects}
                                                        onDelete={(id)=>{ dispatch(projectRemove(id))}}
                                                        onUpdate={(newTask)=>{dispatch(projectUpdate(newTask))}}
                                                        onChange={(checkedTask)=>{dispatch(onChange(checkedTask))}}/>
                                          </div>
                                   </Container>
                            </div>
              </div>
  );
}

export default App;
