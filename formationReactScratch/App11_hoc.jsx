import React, {Component} from 'react';

/* React JS : Usage des HOC*/

	
	var newdata={
		data:"Donnée du HOC";
	}
	
	var myHOC = componentH => class extends Component{
		componentDidMount(){
				this.setState({data: newData.data}]
		}
		
		render(){
			return(
				<componantH />
			)
		}
		
	}
	
	class MyComponent extends Component{
    render(){
		    return (
			<div>
				<h1> {this.state.data} </h1>
			</div>
		  );
		}
	}


export default myHOC(MyComponent);


