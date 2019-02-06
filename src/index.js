//Import reactDOM and react libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
const App = () => {
  const buttonText = 'Click Me';
  return (
    <div>
      <label for="name" className="label">Enter Name</label>
      <input id="name" type="text"/>
      <button style={{backgroundColor:'pink', color:'#555'}}>
      {buttonText}
      </button>
    </div>
  );
}

//Take the react component and render to the DOM
ReactDOM.render(
<App />, document.querySelector('#root')

);
