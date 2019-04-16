import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from "react-router-dom";
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route, Switch } from "react-router-dom";
import indexRoutes from "./routes/index";
// import index from "./js/index";
import { Provider } from "react-redux";
import store from "./js/store/index";

// ReactDOM.render(<App />, document.getElementById('root'));

/*ReactDOM.render(<BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
*/

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route to={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </HashRouter>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
