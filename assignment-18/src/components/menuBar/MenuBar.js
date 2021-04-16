import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../menuBar/menuBar.css'
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
})); 

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }
  return (
    <div >
    
    
    <Grid item xs={12}>
          
        
      <AppBar position="static">
        <Toolbar className='appBar'>
         <div className='mainMenu' id='title'>
         <ul>
           <li>Jenkins</li>
           <li>CD</li>
         </ul>
         </div>
          <div className='menuList' id='menuBar'>
          <ul>
            <li>Blog</li>
            <li >
            <Button  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Documentation
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><b>User Guide</b></MenuItem>
        <MenuItem onClick={handleClose}>Installing Jenkins</MenuItem>
        <MenuItem onClick={handleClose}>Jenkins Pipline</MenuItem>
      </Menu></li>
            <li>Plugin</li>
            <li>Community</li>
            <li>Subprojects</li>
            <li>About</li>
            <li>English</li>
            <li><Button color="inherit">Download</Button></li>
            <li><input className='search' type='search' placeholder='Search' height='48'/></li>
          </ul>
          
          
          
         
         </div>
        </Toolbar>
      </AppBar>
      </Grid>
      
     
 
 

 


      </div>
    
  );
}