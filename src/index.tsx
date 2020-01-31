import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as _ from 'lodash';
import App from './App';
import * as serviceWorker from './serviceWorker';

;(() => {
  const adjustBase = () => {
    const clientWidth = Math.max(document.body.clientWidth, window.innerWidth)
    document.querySelector('html')!.style.fontSize = Math.min(75, clientWidth / 100) + 'px'
  }
  adjustBase()
  window.onresize = _.debounce(adjustBase, 150)
})()

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
