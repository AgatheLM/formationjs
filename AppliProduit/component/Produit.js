import React, {Component, PropTypes} from 'react';
//import PropTypes from 'prop-types';


class Produit extends Component{
	render(){
		console.log(this.props.id);
		return(
			<div>
				<li>
					Identifiant  : {this.props.id}
					<br></br>
					Reférence  : {this.props.refPdt}
					<br></br>
					Nom  : {this.props.nomPdt}
					<br></br>
					Prix : {this.props.prixPdt}
				</li>			
			</div>
		)
	}


// Produit.propTypes = {
	// id: PropTypes.number,	
	// ref: PropTypes.string.isRequired,	
	// nom: PropTypes.string,	
	// prix: PropTypes.number
// }

	
}
export default Produit