/*document.write("Test from client");
document.write("its working");
document.write(JSON.stringify(window.__data));
console.log('hi from client');*/

import React from 'react';
import ReactDOM from 'react-dom';
import Html from './components/html.jsx';

ReactDOM.render(<Html />, document.getElementById('root'));

