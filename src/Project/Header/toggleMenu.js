import React,{useEffect ,useState}from "react"
import {Drawer,List,ListItem,ListItemIcon,ListItemText} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import PhoneIcon from '@material-ui/icons/Phone'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
      root:{
            width:200,
      }
    
 }));
 

const ListToggleMenu = () =>{
      const classes = useStyles();

 return (  
      <div className={classes.root} > 
                  <List>
                              <ListItem button="button">
                                    <ListItemIcon>
                                          <HomeIcon color='error'/>
                                    </ListItemIcon>
                                    <ListItemText>Home</ListItemText>
                              </ListItem>
                              <ListItem button="button">
                                    <ListItemIcon>
                                          <PhoneIcon color='error'/>
                                    </ListItemIcon>
                                    <ListItemText>Connect</ListItemText>
                              </ListItem>
                   </List>
                              <Divider/>

                              <List></List>
      </div>
  )
}
export const DrawToggleMenu=({handler})=>{
       const [openDrawer,setOpenDrawer]=useState(false);

       useEffect(() => {
           setOpenDrawer(handler)
       },[handler]) 

                  return(
                              <Drawer anchor='left' onClose={()=>setOpenDrawer(false)} open={openDrawer}>
                                    <ListToggleMenu />
                              </Drawer>
                        )
}