import {combineReducers} from 'redux';
import {AJOUTER_PRODUIT} from '../actions/ajouterProduit';
import {AJOUTER_PRODUIT_PANIER} from '../actions/ajouterProduitPanier';
/* Les actions déclenchent uniquement des modifications dans l'application */
/* Les reducers spécifient ces modifications, prend en paramètre state et actio pour renvoyer un state à jour */

// todo sera utilisée pour crée un nouvel élément
function produit(state,action){
	switch(action.type){
		case AJOUTER_PRODUIT:
			return{
				id: action.id,
				refPdt : action.refPdt,
				nomPdt : action.nomPdt,
				prixPdt : action.prixPdt
			}
		default:
			return state
	}
}

function produit(state,action){
	switch(action.type){
		case AJOUTER_PRODUIT:
			return{
				id: action.id,
				refPdt : action.refPdt,
				nomPdt : action.nomPdt,
				prixPdt : action.prixPdt
			}
		default:
			return state
	}
}

//todos sera utilisée pour pousser le nouvel élément dans la liste existante.
function listeProduits(state=[],action){
	switch(action.type){
		case AJOUTER_PRODUIT:
			return [
				...state,
				produit(undefined,action)
			]
		default:
			return state
	}
}

//todos sera utilisée pour pousser le nouvel élément dans la liste existante.
function listeProduitsPanier(state=[],action){
	switch(action.type){
		case AJOUTER_PRODUIT_PANIER:
		console.log("AJOUTER_PRODUIT_PANIER");
			return [
				...state,
				action
			]
		default:
			return state
	}
}


//combineReducers  : permet d'ajouter les nouveaux reducers.
const produitApp = combineReducers({
	listeProduits,
	listeProduitsPanier
})

export default produitApp;

