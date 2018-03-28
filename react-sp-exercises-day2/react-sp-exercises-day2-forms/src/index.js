import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import registerServiceWorker from './registerServiceWorker';
import Reservations from './Reservations';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
