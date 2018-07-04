import {combineReducers} from 'redux';
import {ADD_TODO} from '../actions/actions';

/* Les actions déclenchent uniquement des modifications dans l'application */
/* Les reducers spécifient ces modifications, prend en paramètre state et actio pour renvoyer un state à jour */

// todo sera utilisée pour crée un nouvel élément
function todo(state,action){
	switch(action.type){
		case ADD_TODO:
			return{
				id: action.id,
				text: action.nouvelItem
			}
		default:
			return state
	}
}

//todos sera utilisée pour pousser le nouvel élément dans la liste existante.
function todos(state=[],action){
	switch(action.type){
		case ADD_TODO:
			return [
				...state,
				todo(undefined,action)
			]
		default:
			return state
	}
}


//combineReducers  : permet d'ajouter les nouveaux reducers.
const todoApp = combineReducers({
	todos
})

export default todoApp;

