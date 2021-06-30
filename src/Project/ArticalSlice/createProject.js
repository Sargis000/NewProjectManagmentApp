import React,{useState} from 'react'
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


export const CreateProject=({onAdd})=> {
 const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  const [name,setName]=useState("");
  const [summary,setSummary]=useState("");

  const handleChange=(e)=>{
    const{name,value}=e.target
    if(name==="taskName"){
        setName(value);
    }else{
        setSummary(value);
    }
}

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
  };
  const addHandler=()=>{
    if(name!=="" && summary!==""){
           onAdd(name,summary)
           setName("");
           setSummary("");
    }
    setOpen(false);
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Create Task
      </Button>
            <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Task</DialogTitle>
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
                <Button onClick={addHandler} color="primary">
                    Add Project
                </Button>
                </DialogActions>
            </Dialog>
    </div>
  );
}
