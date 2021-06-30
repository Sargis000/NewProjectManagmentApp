import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MuiThemeProvider } from '@material-ui/core';
import {Provider} from 'react-redux'
import {store} from './Reducers/index'
import {createStore} from 'redux'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Project} from './TaskProject/index'

let Store=createStore(
  store,
  window._REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider>
        <Provider store={Store}>

              <Router > 
                <Switch>
                      <Route exact path ="/" component={App}/>
                      <Route  path ="/project/:id" component={Project}/>
                </Switch>
              </Router>

         </Provider>
    </MuiThemeProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
