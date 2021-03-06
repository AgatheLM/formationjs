import React, {Component} from 'react';


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
	
	fetchURL(){
		  fetch("https://jsonplaceholder.typicode.com/albums/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
	}
	
	
	componentDidMount() {
		this.fetchURL();
  }
	
    render(){
		const { error, isLoaded, items } = this.state;
		if (error) {
		    return <div>Error: {error.message}</div>;
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


