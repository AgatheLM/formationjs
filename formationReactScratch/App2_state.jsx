import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';

/* React JS les états*/
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
				<Typography variant="caption" gutterBottom>
					<p>{this.state.data}</p>
					<p>{this.state.content}</p>
				</Typography>
				
			</div>
		);
	}
} 



export default App ;