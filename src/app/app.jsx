import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { bindActionCreators } from 'redux'

import ActionCreators from './actions'
import configureStore from './store'
import Main from './components/Main'; // Our custom react component

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const store = configureStore();
const states = store.getState();
const actions = bindActionCreators(ActionCreators, store.dispatch);

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(<Main states={states} actions={actions} />, document.getElementById('app'));
