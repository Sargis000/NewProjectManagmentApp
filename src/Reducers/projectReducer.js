import { idGenerator} from '../Project/Function/idGenerator'
import {currentTime} from '../Project/Function/currentTime'

export const initState=[  
      {
        id:idGenerator(),
        taskName:"todo",
        summary:"ToDo",
        isCompleted:false,
        currentTime:currentTime()  
     },   
]

export const ProjectReducer=(state=initState,action)=>{
    switch(action.type){
        case 'PROJECT_ADD':
            return[
                ...state,
                action.payload
            ]
            
        case 'PROJECT_REMOVE':
            console.log(action.payload.data.id)
             return state.filter((task)=>task.id!==action.payload.data.id)

        case 'PROJECT_UPDATE':
            let {id,taskName,summary}=action.payload.data
            return state.map((project)=>{
                if(project.id===id){
                    project.taskName=taskName
                    project.summary=summary
                    project.currentTime=currentTime();
                    project.isCompleted=false
                }
                return project
            })

        case 'ON_CHANGE':
             return  state.map((project)=>{        
                              if(project.id===action.payload.checkedTask.id){
                                    return action.payload.checkedTask;
                                  }
                           return project;
                   })
        default:
            return state        
    }
}

