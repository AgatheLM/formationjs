import React, {Component} from 'react';

/* React JS : Usage des HOC*/

	
	var newData={
		data:'Donnée du HOC'
	}
	
	/* MyHOC est une fonction d'ordre supérieur, 
	Elle prend un componant en entrée et renvoie un componant avec ses props et states.
	Au passage elle met a jour le state de MyComponent avec la valeur newData
	Elle est utilisée pour transmettre des données à MyComponent*/
	
	/* La fonction HOC pourrait être ailleurs, on l'importerai en début de la classe myComponent, 
	et on exporterai de la même manière export default myHOC(MyComponent)*/
	
	var myHOC = ComponentH => class extends Component{
		componentDidMount(){
				this.setState({data: newData.data
			})
		}
		
		render(){
			return(
			<div>
				<ComponentH {...this.props} {...this.state}/>
			</div>
			)
		}
		
	}
	
	class MyComponent extends Component{
 
		constructor(){
				super();
				this.state={
					toto:'tata'
				}
			}
		render(){
		    return (
			<div>
				<h1> {this.props.data} </h1>
				<h1> {this.state.toto} </h1>
			</div>
		  );
		}
	}

/* Du coup on export le component renvoyé par la fonction myHOC appliquée à MyComponent*/
export default myHOC(MyComponent);


