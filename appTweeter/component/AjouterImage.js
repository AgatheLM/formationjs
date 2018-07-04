import React, {Component, PropTypes} from 'react';


class AjouterImage extends Component{
	render() {
        return (
            <div>
				<input type="file" id="image"/> 
				<button>Envoyer</button>
            </div>
        );
    }
}
export default AjouterImage