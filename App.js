import React from 'react';
import { Provider } from 'react-redux'
import { Scene, Router } from 'react-native-router-flux';
import { View, StyleSheet } from 'react-native';

import configureStore from './store'
import initialState from './actionsReducer/initialState'

import Login from './Login'
import List from './List'

const store = configureStore(initialState)

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Router getSceneStyle={getSceneStyle}>
          <Scene key='root'>
            <Scene key="login" component={Login} title="Login" hideNavBar />
            <Scene key="list" component={List} title="Listado"/>
          </Scene>
        </Router>
      </Provider>
    );
  }
}

const getSceneStyle = () => ({
  flex: 1,
  backgroundColor: '#fff',
  shadowColor: null,
  shadowOffset: null,
  shadowOpacity: null,
  shadowRadius: null
})
