import React, {Component} from 'react';
import AjouterProduit from './component/AjouterProduit'
import Liste from './component/Liste'
import Panier from './component/Panier'
import {connect} from 'react-redux';
import {ajouterProduit} from './actions/ajouterProduit';
import {ajouterProduitPanier} from './actions/ajouterProduitPanier';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';



/* App est le component racine de l'application. C'est le seul à pouvoir communiquer avec Redux.*/


class App extends Component{
    render(){
		// dispath est utilisé pour faire marcher le dispacher
		const {dispatch, produitsEnregistres, produitPanier}=this.props;
		// Le dispache est mis au niveau du main par le store, et le visibleTodo par la fonction select (fonction définie en locale)*/
		//const {dispatch, visibleTodos}=this.props;
		// En commentaire la version sans la const
		console.log({produitsEnregistres});
		console.log({produitPanier});
		return(
			<Router>
				<div>				
					<h1> Gestion de produit </h1>	
					<ul>
						<li> <Link to={'/ajouterProduit'}> Ajouter un produit </Link> </li>
						<li> <Link to={'/listeProduit'}> Liste des produits </Link> </li>
						<li> <Link to={'/panier'}> Panier </Link> </li>
					</ul>
					<hr/>
					<Switch>
						 <Route exact path='/ajouterProduit' 
						  render={() => <AjouterProduit onAddClick = {(refPdt, nomPdt, prixPdt) => 
										 dispatch(ajouterProduit(refPdt, nomPdt, prixPdt))}/>} />
						 <Route exact path='/listeProduit' 
						 render={() => <Liste listeProduits={produitsEnregistres} onPanierClick = {(produit) => 
										 dispatch(ajouterProduitPanier(produit))} />} />
						 <Route exact path='/panier' 
						 render={() => <Panier listeProduitsPanier={produitPanier}/>} />
					</Switch>

				</div>
			</Router>
				
		);
	}
} 

/*Cette fonction prend l'état du store et renvoie les props*/
function select(state){
	return{
		produitsEnregistres:state.listeProduits,
		produitPanier:state.listeProduitsPanier
	}
}
/*La fonction connect() est utilisée pour connecter app au store*/
/* On exporte pas App mais connect(select)(App)*/
//export default connect(select)(App) ;
export default connect(select)(App);


