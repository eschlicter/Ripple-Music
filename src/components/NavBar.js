import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


//MATERIAL IMPORTS
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return(
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="secondary" href='/'>Home</Button>
          <Button href='/library'>Library</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;


