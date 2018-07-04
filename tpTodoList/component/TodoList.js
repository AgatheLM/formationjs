import React, {Component, PropTypes} from 'react';
import Todo from './Todo.js'

class TodoList extends Component{
	render(){
		return(
			<div>
				<ul>
				{/* ... : spread opérateur pour concatener l'existant avec le nouveau*/}
					{this.props.todos.map((todo) => <Todo key={todo.id} {...todo}/>)}
				</ul>			
			</div>
		)
	}
	
}
export default TodoList