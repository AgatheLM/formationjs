import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Login from './Login';

/* React JS : Usage des routers*/

class App extends Component{
    render(){
		return(
			<Router>
				<div>				
					<h1> Usage des router avec React JS </h1>	
						<ul>
							{/* sans react : <li><a href="home.html"> Home </a></li>*/}
							{/* Avec react : On ne change plus de page, on charge le  composant en restant dans la même page */}
							<li> <Link to={'/'}> Accueil </Link> </li>
							<li> <Link to={'/Login'}> Login </Link> </li>
						</ul>
					<hr/>
					{/* Les balises link correspondent à l'url*/}
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/Login' component={Login} />					
					</Switch>
				</div>
			</Router>
		);
	}
} 

export default App ;

