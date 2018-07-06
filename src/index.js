import React from 'react';
import ReactDOM from 'react-dom';

// creating component (which produces html)
const App = () => {
    return <div>Hi</div>;   // this is JSX not html
}

// place this component on the page i.e. DOM
// <App /> is an JSX instance of a class
ReactDOM.render(<App />, document.querySelector('.container'));