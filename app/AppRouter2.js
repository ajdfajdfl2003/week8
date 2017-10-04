import React, {Component} from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';
import Home from './components/Home';

export default class AppRouter2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Router>
        {/* Home, 註冊, 登入 */}
        <Scene key="homeGroup" initial>
          <Scene key="home" component={Home} initial hideNavBar={true} hideTabBar={true} />
        </Scene>
      </Router>
    );
  }
}






