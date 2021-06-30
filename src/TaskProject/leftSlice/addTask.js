
import { Box } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#e9fff5',
        borderRight:'solid #e6e6e6',
        margin:0,
        padding:0,
        width:200,
        height:600,
        fontSize:40,
        fontFamily:'Times New'
    },
  }));


export const AddTask=()=>{
    const classes = useStyles();
    return(
             <Container maxWidth="sm" className={classes.root}>
                    <Box className={classes.root}>
                        ~Tasks~
                        <Divider/>
                    </Box>
            </Container>

    )
}