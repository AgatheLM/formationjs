import {combineReducers} from 'redux';
import {ADD_TWEET} from '../actions/actions';

/* Les actions déclenchent uniquement des modifications dans l'application */
/* Les reducers spécifient ces modifications, prend en paramètre state et actio pour renvoyer un state à jour */

// todo sera utilisée pour crée un nouvel élément
function tweet(state,action){
	switch(action.type){
		case ADD_TWEET:
			return{
				id: action.id,
				texte: action.texte
			}
		default:
			return state
	}
}

//todos sera utilisée pour pousser le nouvel élément dans la liste existante.
function listeTweet(state=[],action){
	switch(action.type){
		case ADD_TWEET:
			return [
				...state,
				tweet(undefined,action)
			]
		default:
			return state
	}
}


//combineReducers  : permet d'ajouter les nouveaux reducers.
const tweetApp = combineReducers({
	listeTweet
})

export default tweetApp;

