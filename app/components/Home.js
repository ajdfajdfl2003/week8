import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Text style={{fontSize: 28}}>登入畫面</Text>
        </View>
        <View style={{flex: 1}}>
          <Button title="註冊" color="green" onPress={() => Actions.name()} />
          <Button title="登入" color="blue" onPress={() => null} />
        </View>
      </View>
    );
  }
}