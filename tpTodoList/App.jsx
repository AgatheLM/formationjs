import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from './actions/actions';

import AddTodo from './Component/AddTodo';
import TodoList from './Component/TodoList';

/* TP TodoList*/

/* App est le component racine de l'application. C'est le seul à pouvoir communiquer avec Redux.*/


class App extends Component{
    render(){
		// dispath est utilisé pour faire marcher le dispacher
		// Le dispache est mis au niveau du main par le store, et le visibleTodo par la fonction select (fonction définie en locale)*/
		const {dispatch, visibleTodos}=this.props;
		// En commentaire la version sans la const
		return(
		
				<div>				
					<h1> TP Todolist </h1>	
					{/*dispatch envoie les actions au reducers*/}
					<AddTodo onAddClick = {text => dispatch(addTodo(text))} />
					{/*<AddTodo onAddClick = {text => this.props.dispatch(addTodo(text))} />/>*/}
					{/*<TodoList todos={this.props.visibleTodos}/>*/}
					<TodoList todos={visibleTodos}/>
				</div>
		);
	}
} 

/*Cette fonction prend l'état du store et renvoie les props*/
function select(state){
	return{
		visibleTodos:state.todos
	}
}
/*La fonction connect() est utilisée pour connecter app au store*/
/* On exporte pas App mais connect(select)(App)*/
export default connect(select)(App) ;


