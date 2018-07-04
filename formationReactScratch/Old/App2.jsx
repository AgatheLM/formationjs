import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = {
  root: {
    flexGrow: 1,
  },
};
class App extends Component{
    render(){
		return(
			<div>
				<SimpleAppBar nom="appbar"/>
				<Typography variant="display1" gutterBottom>
					Bienvenue à la formation React !
				</Typography>
				
				<br/>
				 <Button variant="contained" color="primary">
					Connexion
				</Button>
			</div>
		);
	}
} 
function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div className="M">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            FormationJS
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};







export default App ;
