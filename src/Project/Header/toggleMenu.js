import React,{useEffect ,useState}from "react"
import {Drawer,List,ListItem,ListItemIcon,ListItemText} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import PhoneIcon from '@material-ui/icons/Phone'


const ListToggleMenu = () =>{
 return (  
      <div style={{width:200}}> 
                              <List>
                                    <ListItem button >
                                          <ListItemIcon>  <HomeIcon color='error'/>     </ListItemIcon>
                                          <ListItemText>Home</ListItemText>
                                    </ListItem>
                                    <ListItem button >
                                          <ListItemIcon>  <PhoneIcon color='error'/>  </ListItemIcon>
                                          <ListItemText>Connect</ListItemText>
                                    </ListItem>
                              </List>
                                      <Divider />

                              <List>
                              </List>
      </div>
      )
}
export const DrawToggleMenu=({handler})=>{
       const [openDrawer,setOpenDrawer]=useState(true);

       useEffect(() => {
            setOpenDrawer(handler)
            },[handler]) 

                  return(
                              <Drawer anchor='left' onClose={()=>setOpenDrawer(false)} open={openDrawer}>
                                    <ListToggleMenu />
                              </Drawer>
                        )
}