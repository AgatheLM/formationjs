import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';

/* React JS les props*/
class App extends Component{
    render(){
		return(
			<div>
				<Typography variant="caption" gutterBottom>
					<p>{this.props.titre}</p>
					<p>{this.props.titre2}</p>
				</Typography>				
			</div>
		);
	}
} 

App.defaultProps={
	titre1:"Titre1 par défaut",
	titre2:"Titre2 par defaut"
}

export default App ;