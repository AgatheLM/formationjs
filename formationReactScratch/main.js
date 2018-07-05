import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';


ReactDOM.render(<App />, document.getElementById('MyApp'));


// Pour démonter le composant après 100 secondes
//setTimeout(()=>{ReactDOM.unmountComponentAtNode(document.getElementById('MyApp'))},5000);

