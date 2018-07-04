import React, {Component, PropTypes} from 'react';

class AddTodo extends Component{
	render(){
		return(
			<div>
				<input type='text' ref='input'/>
				<button onClick= {(e) => this.handleClick(e)}>
					Add task
				</button>				
			</div>
		)
	}
	handleClick(e){
		const node=this.refs.input;
		const text = node.value.trim();
		// OnAddClick est la fonction passée en props dans le App
		this.props.onAddClick(text);
		node.value='';
	}
}
export default AddTodo