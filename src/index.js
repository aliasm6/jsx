//Import reactDOM and react libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
const App = () => {
  return <div>Hi there!</div>;
}

//Take the react component and render to the DOM
ReactDOM.render(
<App />, document.querySelector('#root')

);
