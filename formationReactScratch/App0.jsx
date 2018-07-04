import React, {Component} from 'react';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from './menu';
import BasPage from './basPage';

class App extends Component{
	constructor(){
		super();
		this.state={
			data:'initial',
			content:'contenu depuis état'
		
		};
	}
    render(){
		return(
			<div>
				<Menu nom="appbar"/>
				<br/>
				<br/>
				<Typography variant="display1" gutterBottom>
					Bienvenue à la formation React ceci est un test!
				</Typography>
				<Typography variant="caption" gutterBottom>
					<p>{this.state.data}</p>
					<p>{this.state.content}</p>
				</Typography>
				
				<br/>
				 <Button variant="contained" color="primary">
					J'ai compris
				</Button>
				<br/>
				<br/>
				<BasPage nom="appbar"/>
			</div>
		);
	}
} 



export default App ;