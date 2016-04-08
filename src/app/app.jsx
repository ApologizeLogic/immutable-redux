import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { bindActionCreators } from 'redux'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore, selectLocationState } from 'react-router-redux'

import ActionCreators from './actions'
import configureStore from './store'
import Main from './components/Main' // Our custom react component
import ShowCase from './components/ShowCase'
import Login from './components/Login'
import MoiveList from './components/MoiveList'
import CinemaList from './components/CinemaList'

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const store = configureStore();
const states = store.getState();
const actions = bindActionCreators(ActionCreators, store.dispatch);

console.log(states.toJS())

const history = syncHistoryWithStore(browserHistory, store, {selectLocationState: state => state.get('routing').toJS()});

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={Main}>
      <IndexRoute component={Login} />
      <Route path="/about" component={ShowCase}>
        <Route path="/about/cinema" component={CinemaList} />
        <Route path="/about/moive" component={MoiveList} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'));
