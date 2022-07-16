import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {Box, Grid} from '@mui/material';
import { Outlet, Link } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

function Home() {
  return ( 
    
 
        <Box sx={{ flexGrow: 1 }}>
        
          <Typography variant='h5' align='center' sx={{fontWeight:'bold',margin:2}}
           >Welcome To Food's Kitchen</Typography>
           <Grid container sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Button variant='contained' 
           >
             <Link to="/menu" style={{color:'white',textDecoration: 'none'}}>Go To Menu</Link>
             
           </Button>
           </Grid>
        </Box>
     
    
  )
}

export default Home