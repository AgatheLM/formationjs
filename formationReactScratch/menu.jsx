import React, {Component} from 'react';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
    menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};



function Menu(props) {

	const { classes } = props;
     return (
       <div className="Menu">
       <AppBar position="static">
        <Toolbar>
          <IconButton className="menuButton" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className="flex">
            Title
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );	
 }

   
   
Menu.propTypes = {
  classes: PropTypes.object.isRequired,

}

export default withStyles(styles)(ButtonAppBar);