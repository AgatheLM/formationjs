import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App.jsx';
import todoApp from './reducers/reducers';

let store=createStore(todoApp);
let rootElement=document.getElementById('MyApp');
// Le store est l'endroit qui détient l'état de l'application, nous le passons en paramètre.
render(
	<Provider store={store}>
		<App />
	</Provider>,
	
	rootElement
)

