import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { bindActionCreators } from 'redux'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore, selectLocationState } from 'react-router-redux'

import ActionCreators from './actions'
import configureStore from './store'
import Main from './components/Main' // Our custom react component
import motionDemo from './components/motionDemo'
import video from './components/ShowList'

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const store = configureStore();
const actions = bindActionCreators(ActionCreators, store.dispatch);
const history = syncHistoryWithStore(browserHistory, store, {selectLocationState: state => state.get('routing').toJS()});

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={video} />
    </Route>
  </Router>
), document.getElementById('app'));
