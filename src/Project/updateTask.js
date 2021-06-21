import React,{useEffect, useState} from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));




export const UpdateTask=({modal,task,onUpdate})=> {

 const classes = useStyles();
  const [openModal, setOpen] = useState(false);

  const [name,setName]=useState("");
  const [summary,setSummary]=useState("");

  useEffect(()=>{
    setOpen(modal);
    setName(task.taskName);
    setSummary(task.summary);
  },[modal,task])

  const handleChange=(e)=>{
    const{name,value}=e.target
    if(name==="taskName"){
        setName(value);
    }else{
        setSummary(value);
    }
}
  const handleClose = (e) => {
    setOpen(false);
  };
  const updateHandler=()=>{
     task={
        ...task,
       taskName:name,
       summary:summary,
     }

     setOpen(false);  
     onUpdate(task)
  }

  return (
    <div>
            <Dialog open={openModal} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update Project</DialogTitle>
                    <DialogContent>
                            <form className={classes.root} onSubmit={(e)=>{
                                  e.preventDefault(); }} >
                                    <TextField  label="New Task" value={name} name="taskName" onChange={handleChange}  />
                                    <TextField  label="Summary"  value={summary} name="summary" onChange={handleChange}  />
                            </form>
                    </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={updateHandler} color="primary">
                    Update
                </Button>
                </DialogActions>
            </Dialog>
    </div>
  );
}
