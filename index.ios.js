/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import AppContainer from './app/AppContainer';

export default class week8 extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

AppRegistry.registerComponent('week8', () => week8);
