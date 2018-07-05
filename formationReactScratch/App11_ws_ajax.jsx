import React, {Component} from 'react';
/*global $*/
// /*global $*/ permet de reconnaitre le $

/* React JS : Cycle de vie des composants*/
/* Quand on utilise les accolades c'est qu'on est en jsx*/

class App extends Component{
	
	constructor(props){
		//le paramètre props est optionnel, en général on le met quand on va utiliser les props
		super(props);
		this.state = {
			 error: null,
			 isLoaded: false,
			 items: []
		};
	}
	
	jQueryURL(){
		$.get("https://jsonplaceholder.typicode.com/albums/")
		.done( reponse => {
					console.log(reponse);
					this.setState({items:reponse, isLoaded:true})
			  })	
		.fail( erreur => {
				this.setState({error:"Pas de retour"})					
		   })
		.always( toujours => {
				console.log("executé dans tous les cas");
			})
		}
	
	
	componentDidMount() {
		this.jQueryURL();
  }
	
    render(){
		const { error, isLoaded, items } = this.state;
		if (error) {
		    return <div>Error: {this.state.error}</div>;
		} else if (!isLoaded) {
		    return <div>Loading...</div>;
		} else {
		    return (
			<ul>
			  {items.map(i => (
				<li key={i.id}>
				  {i.id} {i.title}
				</li>
			  ))}
			</ul>
		  );
		}
	}
} 

export default App;


