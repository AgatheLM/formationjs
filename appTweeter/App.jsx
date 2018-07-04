import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ajouterTweet} from './actions/actions';
//import Img from 'react-image';
import AjouterTweet from './Component/AjouterTweet';
import AffichageTweets from './Component/AffichageTweets';
import AjouterImage from './Component/AjouterImage';

/* TP Tweeter*/

/* App est le component racine de l'application. C'est le seul à pouvoir communiquer avec Redux.*/
//<AjouterImage />

class App extends Component{
    render(){
		const {dispatch, visibleTodos}=this.props;
		return(
		
				<div>		
					
					<h1> Tweeter </h1>			
					<AjouterImage/>
					<AjouterTweet onTweeterClic = {(texte) => dispatch(ajouterTweet(texte))} />
					<AffichageTweets listeTweet={visibleTodos}/>
				</div>
		);
	}
} 

/*Cette fonction prend l'état du store et renvoie les props*/
function select(state){
	return{
		visibleTodos:state.listeTweet
	}
}
/*La fonction connect() est utilisée pour connecter app au store*/
/* On exporte pas App mais connect(select)(App)*/
export default connect(select)(App) ;


