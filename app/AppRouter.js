import React, {Component} from 'react';
import {Actions, Router, Scene} from 'react-native-router-flux';
import Home from './components/Home';
import Name from './components/registration/Name';
import Account from './components/registration/Account';
import Password from './components/registration/Password';
import Main from './components/main/Main';
import TabIcon from './TabIcon';
import MapTab from './components/main/MapTab';
import CameraTab from './components/main/CameraTab';

export default class AppRouter extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Router>
        {/* 首頁(註冊、登入) */}
        <Scene key="homeGroup" initial hideTabBar={true}>
          <Scene key="home" initial component={Home} hideNavBar={true} />
          <Scene key="name" component={Name} title="您的大名" hideNavBar={false} />
          <Scene key="account" component={Account} title="您的帳號" hideNavBar={false} />
          <Scene key="password" component={Password} title="您的密碼" hideNavBar={false} />
        </Scene>
        {/* 主頁 */}
        <Scene key="mainGroup" tabs>
          <Scene key="mapTab" component={MapTab} title="地圖" icon={TabIcon} />
          <Scene initial key="main" component={Main} title="主頁" icon={TabIcon} />
          <Scene key="cameraTab" component={CameraTab} title="相機" icon={TabIcon} />
        </Scene>
      </Router>
    );
  }
}



