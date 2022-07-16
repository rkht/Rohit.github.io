import { Box, AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'


function Headers() {
  return (
    <Box>

      <AppBar position="static">

        <Toolbar >
          {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton> */}
          <FontAwesomeIcon icon={faUtensils} />

          <Typography variant="h6" align='left' component="div" sx={{ flexGrow: 1}} >
            pinaki's Resturant
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Headers