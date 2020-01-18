import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './views/Home';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="Header-wrap">
            <a className="App-logo" href="/">
              <h1>爱问管理</h1>
            </a>
            <nav className="nav">
              <ul className="menu">
                <li className="menu-item"><Link to="/">首页</Link></li>
                <li className="menu-item"><Link to="/">关于我们</Link></li>
                <li className="menu-item"><Link to="/">产品服务</Link></li>
                <li className="menu-item"><Link to="/">最新动态</Link></li>
                <li className="menu-item"><Link to="/">学习资源</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <Switch>
          <Route path="/react">
            <div>
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
