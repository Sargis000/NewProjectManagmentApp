export  const projectAdd=(project)=>{
        return{
            type:'PROJECT_ADD',
            payload:project
        }
}
 
export  const projectRemove=(data)=>{
    return{
        type:'PROJECT_REMOVE',
        payload: {
            data
        }
    }
}
export  const projectUpdate=(data)=>{
    return{
        type:'PROJECT_UPDATE',
        payload: {
            data
        }
    }
}
export const onChange=(checkedTask)=>{
    return{
        type:'ON_CHANGE',
        payload: {
            checkedTask
        }
    }
}